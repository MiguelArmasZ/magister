import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../components/layouts'
import { BtnGoBack, Heading } from '../components/ui'
import { BtnOptions } from '../components/ui/form'
import { useForm, useGetData } from '../hooks'

export const Hours = () => {
  const modalidad = useGetData('modalidades')
  const horario = useGetData('horarios')
  const [, handleChange] = useForm({
    modalidad: '',
    horario: ''
  })

  return (
    <Section>
      <Heading>
        elige el horario y modalidad que más te acomode
      </Heading>

      <form className='form--hours'>
        <div className='field'>
          <label className='label' htmlFor='rama'>
            modalidad <span>(Selecciona una opción)</span>
          </label>

          <BtnOptions
            class$='keypad--hours'
            options={modalidad}
            name='modalidad'
            handleChange={handleChange}
          />
        </div>

        <div className='field'>
          <label className='label' htmlFor='rama'>
            horario <span>(Selecciona una opción)</span>
          </label>

          <BtnOptions
            options={horario}
            name='horario'
            handleChange={handleChange}
          />
        </div>
      </form>
      <Link className='btn btn--next' to='/horario-y-modalidad'>
        siguiente
      </Link>
      <BtnGoBack />
    </Section>
  )
}
