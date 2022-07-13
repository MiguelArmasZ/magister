import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const MainContext = createContext()

export const ProviderMainContext = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const [formValues, setFormValues] = useState({})

  return (
    <MainContext.Provider
      value={{
        menu,
        setMenu,
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
