import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../components/layouts'
import { BtnGoBack, Heading } from '../components/ui'
import { InputFields, Select } from '../components/ui/form'
import { directionData } from '../data'
import { useForm, useGetData, useMainContext } from '../hooks'

export const Direction = () => {
  const { formValues } = useMainContext()
  const handleChange = useForm()

  const comunidades = useGetData('comunidades')

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

        <ul className='form-list'>
          {directionData.map((field) => (
            <InputFields
              key={field.name}
              handleChange={handleChange}
              {...field}
              value={formValues[field.name] || ''}
            />
          ))}
        </ul>

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
      <Link className='btn btn--next' to='/pago'>
        siguiente
      </Link>
      <BtnGoBack />
    </Section>
  )
}
