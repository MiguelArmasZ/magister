/* eslint-disable space-before-function-paren */
import React from 'react'
import PropTypes from 'prop-types'
import { useMainContext } from '../../hooks'
import s from '../../styles/components/BtnMenu.module.css'

export const BtnMenu = ({ white }) => {
  const { menu, setMenu } = useMainContext()

  function handleMenu() {
    setMenu(!menu)
  }

  return (
    <button
      onClick={handleMenu}
      className={`${s.Btn} ${white ? s['Bg-white'] : ''} ${
        menu ? s.active : ''
      }`}
    >
      <span
        className={`${s.Line} ${white ? s['Line-black'] : ''}`}
      ></span>
      <span
        className={`${s.Line} ${white ? s['Line-black'] : ''}`}
      ></span>
      <span
        className={`${s.Line} ${white ? s['Line-black'] : ''}`}
      ></span>
    </button>
  )
}

BtnMenu.propTypes = {
  white: PropTypes.bool
}
