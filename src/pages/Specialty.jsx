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
import { Heading } from '../components/ui'
import {
  BtnOptions,
  Completed,
  LinkCondition,
  Select
} from '../components/ui/form'
import SpecialtySVG from '../assets/ilustrations/specialty.svg'

export const Specialty = () => {
  const { formValues } = useMainContext()

  const completed = useCompleted([
    formValues.rama,
    formValues.provincia,
    formValues.alumno
  ])

  const handleChange = useForm()

  const ramas = useGetData('ramas')
  const provincias = useGetData('provincias')
  const alumno = useGetData('alumno')

  useChangeImg(SpecialtySVG)

  return (
    <Section>
      <Heading>¿en que te quieres especializar?</Heading>
      <form className='form--speciality'>
        <div className='field'>
          <label className='label' htmlFor='rama'>
            rama <span>(Selecciona una opción)</span>
          </label>
          <Select
            handleChange={handleChange}
            collection={ramas}
            class$='select'
            name='rama'
          />
        </div>

        <div className='field'>
          <label className='label' htmlFor='provincia'>
            provincia <span>(Selecciona una opción)</span>
          </label>
          <Select
            handleChange={handleChange}
            collection={provincias}
            class$='select'
            name='provincia'
          />
        </div>

        <div className='field alumno'>
          <label className='label' htmlFor='alumno'>
            ¿has sido alumn@ de Magister?
          </label>
          <LinkCondition text='consulta condiciones' />
          <BtnOptions
            name='alumno'
            handleChange={handleChange}
            options={alumno}
          />
        </div>

        <div className='field'>
          <label className='label' htmlFor='alumno'>
            entrega de material
          </label>
          <LinkCondition text='consulta condiciones' />

          <button type='button' className='btn btn--material'>
            material mes a mes
          </button>
        </div>
      </form>
      {completed ? (
        <Link className='btn btn--next' to='/horario-y-modalidad'>
          siguiente
        </Link>
      ) : (
        <Completed />
      )}
    </Section>
  )
}
