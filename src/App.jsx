import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from './Routing'

export const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  )
}
