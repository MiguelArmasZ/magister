import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import s from '../styles/pages/Home.module.css'

export const Home = () => {
  return (
    <main className={`${s.Main} bg-blue `}>
      <header className={s.Header}>
        <img className={s.Logo} src={Logo} alt='logo de magister' />
        <h1>Magister</h1>
      </header>

      <h2 className={s.Heading}>¡Comencemos con tu matrícula!</h2>

      <p className={s.Paragraph}>
        Para comenzar a especializarte, vamos a realizar unas
        preguntas para darte el mejor servicio
      </p>

      <Link className={`${s.Link} btn`} to='/'>
        comenzar
      </Link>

      <Link className={`${s.Back} back `} to='/'>
        volver atrás
      </Link>
    </main>
  )
}
