import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../components/ui'
import s from '../styles/pages/Home.module.css'

export const Home = () => {
  return (
    <>
      <Logo />

      <h2 className={s.Heading}>¡Comencemos con tu matrícula!</h2>

      <p className={s.Paragraph}>
        Para comenzar a especializarte, vamos a realizar unas
        preguntas para darte el mejor servicio
      </p>

      <Link className={`${s.Link} btn`} to='/especialidad'>
        comenzar
      </Link>

      <Link className={`${s.Back} back `} to='/'>
        volver atrás
      </Link>
    </>
  )
}
