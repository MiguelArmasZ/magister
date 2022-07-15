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
import ScheduleSVG from '../assets/ilustrations/schedule.svg'

export const Hours = () => {
  const { formValues } = useMainContext()

  const completed = useCompleted([
    formValues.modalidad,
    formValues.horario
  ])

  const modalidad = useGetData('modalidades')
  const horario = useGetData('horarios')
  const handleChange = useForm()

  useChangeImg(ScheduleSVG)

  return (
    <Section>
      <Heading>
        elige el horario y modalidad que más te acomode
      </Heading>

      <form className='form--hours'>
        <div className='field'>
          <label className='label' htmlFor='modalidad'>
            modalidad <span>(Selecciona una opción)</span>
          </label>

          <BtnOptions
            class$='hours'
            options={modalidad}
            name='modalidad'
            handleChange={handleChange}
          />
        </div>

        <div className='field'>
          <label className='label' htmlFor='horario'>
            horario <span>(Selecciona una opción)</span>
          </label>

          <BtnOptions
            options={horario}
            name='horario'
            handleChange={handleChange}
          />
        </div>
      </form>

      {completed ? (
        <>
          <Link className='btn btn--next' to='/tarifas'>
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
