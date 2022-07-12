import React from 'react'
import { useMainContext } from '../../hooks'
import { Logo, Navbar } from './'
import s from '../../styles/components/Sidebar.module.css'
import Ilu from '../../assets/ilustrations/speciality.svg'

export const Sidebar = () => {
  const { menu } = useMainContext()

  return (
    <aside className={`${s.Sidebar} ${menu ? s.active : ''}`}>
      <Logo />
      <Navbar />
      <img className={s.SVG} src={Ilu} alt='' />
    </aside>
  )
}
