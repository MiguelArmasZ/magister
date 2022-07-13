import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ProviderMainContext } from './context/MainContext'
import { Routing } from './Routing'

export const App = () => {
  return (
    <BrowserRouter>
      <ProviderMainContext>
        <Routing />
      </ProviderMainContext>
    </BrowserRouter>
  )
}
