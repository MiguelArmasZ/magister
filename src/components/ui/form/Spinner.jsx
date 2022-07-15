import React from 'react'
import s from '../../../styles/components/Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={s.spinner}>
      <div className={s.dot1}></div>
      <div className={s.dot2}></div>
    </div>
  )
}
