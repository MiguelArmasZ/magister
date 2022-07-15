import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMainContext } from '../hooks'
import { Logo } from '../components/ui'
import s from '../styles/pages/Home.module.css'

export const Reserved = () => {
  const { formValues } = useMainContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (Object.values(formValues).includes('')) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Logo />

      <h2 className={s.Heading}>
        ¡Gracias! <span>Tu reserva está en proceso</span>
      </h2>

      <p className={s.Paragraph}>
        La matrícula sólo será efectiva una vez se haya recibido el
        Pago por Tarjeta o Transferencia
      </p>

      <Link className={`${s.Link} btn`} to='/'>
        volver a Home
      </Link>

      <Link className={`${s.Back} back `} to='/'>
        volver atrás
      </Link>
    </>
  )
}
