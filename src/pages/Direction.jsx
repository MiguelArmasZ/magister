/* eslint-disable multiline-ternary */
import React from 'react'
import { Link } from 'react-router-dom'
import {
  useChangeImg,
  useCompleted,
  useForm,
  useGetData,
  useMainContext
} from '../hooks'
import { Section } from '../components/layouts'
import { BtnGoBack, Heading } from '../components/ui'
import { Completed, InputList, Select } from '../components/ui/form'
import { directionData } from '../data'
import LocationSVG from '../assets/ilustrations/location.svg'

export const Direction = () => {
  const { formValues } = useMainContext()

  const completed = useCompleted([
    formValues.comunidad,
    formValues.direction,
    formValues.localidad,
    formValues['provincia-examen'],
    formValues.zip,
    formValues.legal,
    formValues['data-protection']
  ])

  const handleChange = useForm()
  const comunidades = useGetData('comunidades')

  useChangeImg(LocationSVG)

  return (
    <Section>
      <Heading>tu dirección</Heading>

      <form className='form'>
        <div className='field'>
          <label className='label' htmlFor='comunidad'>
            comunidad de Exámen <span>(Selecciona una opción)</span>
          </label>
          <Select
            handleChange={handleChange}
            collection={comunidades}
            class$='select'
            name='comunidad'
          />
        </div>

        <div className='field'>
          <label className='label' htmlFor='direction'>
            dirección
          </label>
          <input
            name='direction'
            onChange={handleChange}
            className='input'
            type='text'
            placeholder='Ej: Calle de García de Paredes, 65'
            value={formValues.direction || ''}
          />
        </div>

        <InputList
          fields={directionData}
          handleChange={handleChange}
        />

        <ul className='form-list'>
          <li className='field checkbox'>
            <input
              id='legal'
              type='checkbox'
              onChange={handleChange}
              name='legal'
            />
            <label className='label-checkbox' htmlFor='legal'>
              acepto la
              <span> información legal</span>
            </label>
          </li>

          <li className='field checkbox'>
            <input
              id='data-protection'
              type='checkbox'
              onChange={handleChange}
              name='data-protection'
            />
            <label
              className='label-checkbox'
              htmlFor='data-protection'
            >
              acepto la
              <span> protección de datos</span>
            </label>
          </li>
        </ul>
      </form>

      {completed ? (
        <>
          <Link className='btn btn--next' to='/pago'>
            siguiente
          </Link>
        </>
      ) : (
        <Completed />
      )}
      <BtnGoBack />
    </Section>
  )
}
