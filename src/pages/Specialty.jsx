import React from 'react'
import { Section } from '../components/layouts'
import { Heading } from '../components/ui'
import { Link } from 'react-router-dom'
import Arrow from '../assets/arrow.png'

export const Specialty = () => {
  return (
    <Section>
      <Heading>¿en que te quieres especializar?</Heading>
      <form className='form--speciality'>
        <div className='field'>
          <label className='label' htmlFor='rama'>
            rama <span>(Selecciona una opción)</span>
          </label>
          <select className='select' name='rama' id='rama'>
            <option value=''>hola</option>
            <option value=''>chao</option>
            <option value=''>adios</option>
          </select>
        </div>

        <div className='field'>
          <label className='label' htmlFor='provincia'>
            provincia <span>(Selecciona una opción)</span>
          </label>
          <select className='select' name='provincia' id='provincia'>
            <option value=''>hola</option>
            <option value=''>chao</option>
            <option value=''>adios</option>
          </select>
        </div>

        <div className='field alumno'>
          <label className='label' htmlFor='alumno'>
            ¿has sido alumn@ de Magister?
          </label>
          <a className='conditions'>
            consulta condiciones
            <img className='arrow' src={Arrow} alt='flecha' />
          </a>
          <div className='keypad'>
            <button type='button' className='btn btn--form'>
              no
            </button>
            <button type='button' className='btn btn--form'>
              sí
            </button>
            <button type='button' className='btn btn--form'>
              sí, después de 2017
            </button>
          </div>
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
