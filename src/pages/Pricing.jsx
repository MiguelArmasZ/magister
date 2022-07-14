import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../components/layouts'
import { BtnGoBack, Heading } from '../components/ui'
import { BtnOptions } from '../components/ui/form'
import { useForm, useGetData } from '../hooks'

export const Pricing = () => {
  const tarifas = useGetData('tarifas')
  const handleChange = useForm()

  return (
    <Section>
      <Heading>selecciona tu tarifa</Heading>
      <div className='field'>
        <label className='label' htmlFor='tarifa'>
          tarifas <span>(Selecciona una opción)</span>
        </label>

        <BtnOptions
          class$='pricing'
          options={tarifas}
          name='tarifa'
          handleChange={handleChange}
        />
      </div>
      <Link className='btn btn--next' to='/datos-personales'>
        siguiente
      </Link>
      <BtnGoBack />
    </Section>
  )
}
