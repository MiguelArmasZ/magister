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
import { BtnOptions, Completed } from '../components/ui/form'
import PricingSVG from '../assets/ilustrations/pricing.svg'

export const Pricing = () => {
  const { formValues } = useMainContext()

  const completed = useCompleted([formValues.tarifa])

  const tarifas = useGetData('tarifas')
  const handleChange = useForm()

  useChangeImg(PricingSVG)

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

      {completed ? (
        <>
          <Link className='btn btn--next' to='/datos-personales'>
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
