import React from 'react'
import { BtnMenu, Sidebar } from '../ui'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <BtnMenu class$='Line-black' />
      <div className='wrap'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}
