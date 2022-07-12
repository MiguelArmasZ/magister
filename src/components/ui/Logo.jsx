import React from 'react'
import s from '../../styles/components/Logo.module.css'
import Logotipo from '../../assets/logo.png'

export const Logo = () => {
  return (
    <div className={s.Wrap}>
      <img className={s.Logo} src={Logotipo} alt='logo de magister' />
      <h1>Magister</h1>
    </div>
  )
}
