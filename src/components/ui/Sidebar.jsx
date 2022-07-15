import React from 'react'
import { useMainContext } from '../../hooks'
import { Logo, Navbar } from './'
import s from '../../styles/components/Sidebar.module.css'

export const Sidebar = () => {
  const { menu, sidebarImg } = useMainContext()

  return (
    <aside className={`${s.Sidebar} ${menu ? s.active : ''}`}>
      <Logo />
      <Navbar />
      <img className={s.SVG} src={sidebarImg} alt='ilustración' />
    </aside>
  )
}
