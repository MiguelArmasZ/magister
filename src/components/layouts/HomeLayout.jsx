import React from 'react'
import { Outlet } from 'react-router-dom'

import { BtnMenu } from '../ui'

export const HomeLayout = () => {
  return (
    <main className='main bg-blue fade'>
      <BtnMenu />
      <Outlet />
    </main>
  )
}
