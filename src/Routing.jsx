import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeLayout } from './components/layouts'
import { Home } from './pages'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
