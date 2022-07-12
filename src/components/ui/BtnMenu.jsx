/* eslint-disable space-before-function-paren */
import React from 'react'
import s from '../../styles/components/BtnMenu.module.css'
import PropTypes from 'prop-types'
import { useMainContext } from '../../hooks'

export const BtnMenu = ({ class$ = '' }) => {
  const { menu, setMenu } = useMainContext()

  function handleMenu() {
    setMenu(!menu)
  }

  return (
    <button
      onClick={handleMenu}
      className={`${s.Btn} ${menu ? s.active : ''}`}
    >
      <span className={`${s.Line} ${s[class$]}`}></span>
      <span className={`${s.Line} ${s[class$]}`}></span>
      <span className={`${s.Line} ${s[class$]}`}></span>
    </button>
  )
}

BtnMenu.propTypes = {
  class$: PropTypes.string
}
