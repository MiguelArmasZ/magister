import React from 'react'
import { Section } from '../components/layouts'
import { Heading } from '../components/ui'
import { Link } from 'react-router-dom'
import { useForm, useGetData } from '../hooks'
import { BtnOptions, Select } from '../components/ui/form'
import Arrow from '../assets/arrow.png'

export const Specialty = () => {
  const ramas = useGetData('ramas')
  const provincias = useGetData('provincias')
  const alumno = useGetData('alumno')

  const [, handleChange] = useForm({
    rama: '',
    provincia: '',
    alumno: ''
  })

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
          <a className='conditions'>
            consulta condiciones
            <img className='arrow' src={Arrow} alt='flecha' />
          </a>
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
          <a className='conditions'>
            consulta condiciones
            <img className='arrow' src={Arrow} alt='flecha' />
          </a>

          <button type='button' className='btn btn--material'>
            material mes a mes
          </button>
        </div>
      </form>
      <Link className='btn btn--next' to='/'>
        siguiente
      </Link>
    </Section>
  )
}
