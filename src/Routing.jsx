import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HomeLayout, MainLayout } from './components/layouts'
import {
  Home,
  Specialty,
  Hours,
  Pricing,
  PersonalData,
  Direction,
  Pay,
  Reserved,
  Admin
} from './pages'

export const Routing = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='reserva' element={<Reserved />} />
        <Route path='admin' element={<Admin />} />
      </Route>
      <Route path='/' element={<MainLayout />}>
        <Route path='especialidad' element={<Specialty />} />
        <Route path='horario-y-modalidad' element={<Hours />} />
        <Route path='tarifas' element={<Pricing />} />
        <Route path='datos-personales' element={<PersonalData />} />
        <Route path='direccion' element={<Direction />} />
        <Route path='pago' element={<Pay />} />
      </Route>
    </Routes>
  )
}
