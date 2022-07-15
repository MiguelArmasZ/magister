/* eslint-disable space-before-function-paren */
import React from 'react'
import { db } from '../../firebase/firebaseConfig'
import { doc, deleteDoc } from 'firebase/firestore'
import s from '../../styles/components/Reservation.module.css'

export const Reservation = ({ ...reservation }) => {
  const {
    'data-protection': dataProtection,
    legal,
    ...rest
  } = reservation
  const data = Object.entries(rest).sort()

  async function handleDeleteDoc(id) {
    try {
      await deleteDoc(doc(db, 'matriculas', id))
    } catch (error) {
      console.error(
        `hubo un error al intentar elimar el doc ${error}`
      )
    }
  }

  return (
    <li className={s.Card}>
      <h2 className={s.Heading}>{reservation.nombre}</h2>
      {data.map((item, i) => {
        const [key, value] = item

        return (
          <p key={i} className={s.Item}>
            {key} : <span>{value}</span>
          </p>
        )
      })}

      <button
        onClick={() => handleDeleteDoc(reservation.id)}
        className={s.Delete}
      >
        eliminar
      </button>
    </li>
  )
}
