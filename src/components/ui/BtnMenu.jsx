/* eslint-disable space-before-function-paren */
import React from 'react'
import s from '../../styles/components/BtnMenu.module.css'
import PropTypes from 'prop-types'
import { useMainContext } from '../../hooks'

export const BtnMenu = ({ type }) => {
  const { menu, setMenu } = useMainContext()

  function handleMenu() {
    setMenu(!menu)
  }

  return (
    <button
      onClick={handleMenu}
      className={`${s.Btn} ${type ? s['Bg-white'] : ''} ${
        menu ? s.active : ''
      }`}
    >
      <span
        className={`${s.Line} ${type ? s['Line-black'] : ''}`}
      ></span>
      <span
        className={`${s.Line} ${type ? s['Line-black'] : ''}`}
      ></span>
      <span
        className={`${s.Line} ${type ? s['Line-black'] : ''}`}
      ></span>
    </button>
  )
}

BtnMenu.propTypes = {
  type: PropTypes.bool
}
