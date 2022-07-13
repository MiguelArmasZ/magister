/* eslint-disable space-before-function-paren */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BtnGoBack = () => {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <button className='back' onClick={handleGoBack}>
      volver atrás
    </button>
  )
}
