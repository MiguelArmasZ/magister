import React from 'react'
import { BtnMenu, Sidebar } from '../ui'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <BtnMenu type />
      <div className='wrap'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}
