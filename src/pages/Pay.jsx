import React from 'react'
import { Section } from '../components/layouts'
import { BtnGoBack, Heading } from '../components/ui'
import { BtnOptions, LinkCondition } from '../components/ui/form'
import { paymentMethods, recomended } from '../data'
import { useForm, useMainContext } from '../hooks'

export const Pay = () => {
  const { handleSubmit } = useMainContext()

  const handleChange = useForm()

  return (
    <Section>
      <Heading>forma de pago</Heading>

      <form className='form'>
        <div className='field'>
          <label className='label' htmlFor='pago'>
            ¿cómo prefieres abonar tu primer pago?
          </label>
          <BtnOptions
            name='pago'
            handleChange={handleChange}
            options={paymentMethods}
          />
        </div>
        <div className='field'>
          <LinkCondition text='Detalles sobre forma de pago y proceso postpago' />
        </div>

        <div className='field'>
          <label className='label' htmlFor='recomendado'>
            ¿vienes recomendado por alguien?
          </label>
          <BtnOptions
            name='recomendado'
            handleChange={handleChange}
            options={recomended}
          />
        </div>
        <div className='field'>
          <LinkCondition text='Ver información legal' />
        </div>
        <input
          onClick={handleSubmit}
          value='enviar'
          type='submit'
          className='btn btn--next'
        />
      </form>

      <BtnGoBack />
    </Section>
  )
}
