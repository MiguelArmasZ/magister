import React from 'react'
import s from '../../styles/components/BtnMenu.module.css'

export const BtnMenu = () => {
  return (
    <button className={s.Btn}>
      <span className={s.Line}></span>
      <span className={s.Line}></span>
      <span className={s.Line}></span>
    </button>
  )
}
