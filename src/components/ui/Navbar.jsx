/* eslint-disable space-before-function-paren */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMainContext } from '../../hooks'
import { navbarLinks } from '../../data'
import s from '../../styles/components/Navbar.module.css'

export const Navbar = () => {
  const { setMenu } = useMainContext()

  function handleMenu() {
    setMenu(false)
  }

  return (
    <nav className={s.Navbar}>
      {navbarLinks.map(({ to, text }) => (
        <NavLink
          onClick={handleMenu}
          className={s.Link}
          key={text}
          to={to}
        >
          {text}
        </NavLink>
      ))}
    </nav>
  )
}
