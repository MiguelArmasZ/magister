/* eslint-disable space-before-function-paren */
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const MainContext = createContext()

export const ProviderMainContext = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const [sidebarImg, setSidebarImg] = useState('')
  const [spinner, setSpinner] = useState(false)
  const [feedback, setFeedback] = useState({})

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
    'provincia-examen': '',
    rama: '',
    recomendado: '',
    tarifa: '',
    zip: '',
    date: new Date(Date.now()).toLocaleString()
  })

  return (
    <MainContext.Provider
      value={{
        menu,
        setMenu,
        sidebarImg,
        setSidebarImg,
        feedback,
        setFeedback,
        spinner,
        setSpinner,
        formValues,
        setFormValues
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

ProviderMainContext.propTypes = {
  children: PropTypes.element.isRequired
}
