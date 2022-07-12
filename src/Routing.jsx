import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeLayout, MainLayout } from './components/layouts'
import { Home, Specialty } from './pages'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/' element={<MainLayout />}>
        <Route path='especialidad' element={<Specialty />} />
      </Route>
    </Routes>
  )
}
