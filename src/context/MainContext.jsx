/* eslint-disable space-before-function-paren */
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const MainContext = createContext()

export const ProviderMainContext = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const [formValues, setFormValues] = useState({
    alumno: '',
    comunidad: '',
    'data-protection': '',
    direction: '',
    email: '',
    horario: '',
    legal: '',
    localidad: '',
    mobile: '',
    modalidad: '',
    nif: '',
    nombre: '',
    pago: '',
    provincia: '',
    rama: '',
    recomendado: '',
    tarifa: '',
    zip: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    const props = Object.values(formValues).includes('')

    if (props) {
      console.log('todos los campos son obligatorios')
      return
    }

    console.log('enviando', formValues)
  }

  return (
    <MainContext.Provider
      value={{
        menu,
        setMenu,
        formValues,
        setFormValues,
        handleSubmit
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

ProviderMainContext.propTypes = {
  children: PropTypes.element.isRequired
}
