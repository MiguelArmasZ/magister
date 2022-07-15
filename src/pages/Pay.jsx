/* eslint-disable multiline-ternary */
import React from 'react'
import {
  useChangeImg,
  useCompleted,
  useForm,
  useMainContext,
  useRegistration
} from '../hooks'
import { Section } from '../components/layouts'
import { BtnGoBack, Heading } from '../components/ui'
import {
  BtnOptions,
  Completed,
  LinkCondition,
  Spinner
} from '../components/ui/form'
import { paymentMethods, recomended } from '../data'
import PaymentSVG from '../assets/ilustrations/payment.svg'

export const Pay = () => {
  const { formValues, feedback, spinner } = useMainContext()
  const handleSubmit = useRegistration()

  const completed = useCompleted([
    formValues.pago,
    formValues.recomendado
  ])

  const handleChange = useForm()
  useChangeImg(PaymentSVG)

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

        {spinner && <Spinner />}

        {feedback.state && (
          <p className='feedback'>{feedback.msg || ''}</p>
        )}

        {completed ? (
          <input
            onClick={handleSubmit}
            value='enviar'
            type='submit'
            className='btn btn--next'
          />
        ) : (
          <Completed />
        )}
        <BtnGoBack />
      </form>
    </Section>
  )
}
