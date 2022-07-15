/* eslint-disable multiline-ternary */
import React from 'react'
import { Link } from 'react-router-dom'
import {
  useChangeImg,
  useCompleted,
  useForm,
  useMainContext
} from '../hooks'
import { Section } from '../components/layouts'
import { BtnGoBack, Heading } from '../components/ui'
import { Completed, InputList } from '../components/ui/form'
import { personalData } from '../data'
import PersonalDataSVG from '../assets/ilustrations/personal-data.svg'

export const PersonalData = () => {
  const { formValues } = useMainContext()

  const completed = useCompleted([
    formValues.nombre,
    formValues.nif,
    formValues.mobile,
    formValues.email
  ])
  const handleChange = useForm()

  useChangeImg(PersonalDataSVG)

  return (
    <Section>
      <Heading>tus datos personales</Heading>

      <form className='form'>
        <div className='field'>
          <label className='label' htmlFor='nombre'>
            nombre completo
          </label>
          <input
            id='nombre'
            name='nombre'
            onChange={handleChange}
            className='input'
            type='text'
            placeholder='Ej: Miguel Armas'
            value={formValues.nombre || ''}
          />
        </div>

        <InputList
          fields={personalData}
          handleChange={handleChange}
        />
      </form>

      {completed ? (
        <>
          <Link className='btn btn--next' to='/direccion'>
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
