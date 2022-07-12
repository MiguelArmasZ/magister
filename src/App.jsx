import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ProviderContext } from './Context'
import { Routing } from './Routing'

export const App = () => {
  return (
    <BrowserRouter>
      <ProviderContext>
        <Routing />
      </ProviderContext>
    </BrowserRouter>
  )
}
