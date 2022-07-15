/* eslint-disable multiline-ternary */
import React from 'react'
import { useGetData } from '../hooks'
import { Logo, Reservation } from '../components/ui'
import s from '../styles/pages/Admin.module.css'

export const Admin = () => {
  const resgistrations = useGetData('matriculas')

  return (
    <>
      <Logo />

      <h2>Lista de reservas</h2>

      {resgistrations.length > 0 ? (
        <ul className={s.List}>
          {resgistrations.map((reservation) => (
            <Reservation key={reservation.id} {...reservation} />
          ))}
        </ul>
      ) : (
        <p>Aún no hay reservas...</p>
      )}
    </>
  )
}
