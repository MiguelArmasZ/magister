import React from 'react'
import { Outlet } from 'react-router-dom'

import { BtnMenu, Sidebar } from '../ui'

export const MainLayout = () => {
  return (
    <>
      <BtnMenu white />
      <div className='wrap'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}
