import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../components/layouts'
import { BtnGoBack, Heading } from '../components/ui'
import { InputFields } from '../components/ui/form'
import { personalData } from '../data'
import { useForm, useMainContext } from '../hooks'

export const PersonalData = () => {
  const { formValues } = useMainContext()
  const handleChange = useForm()

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

        <ul className='form-list'>
          {personalData.map((field) => (
            <InputFields
              key={field.name}
              handleChange={handleChange}
              {...field}
              value={formValues[field.name] || ''}
            />
          ))}
        </ul>
      </form>

      <Link className='btn btn--next' to='/direccion'>
        siguiente
      </Link>
      <BtnGoBack />
    </Section>
  )
}
