import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const MainContext = createContext()

export const ProviderContext = ({ children }) => {
  const [menu, setMenu] = useState(false)

  return (
    <MainContext.Provider
      value={{
        menu,
        setMenu
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

ProviderContext.propTypes = {
  children: PropTypes.element.isRequired
}
