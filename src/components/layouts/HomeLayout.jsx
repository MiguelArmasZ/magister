import React from 'react'
import { BtnMenu } from '../ui'
import { Outlet } from 'react-router-dom'

export const HomeLayout = () => {
  return (
    <>
      <BtnMenu />
      <Outlet />
    </>
  )
}
