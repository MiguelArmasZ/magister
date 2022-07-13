import { useContext } from 'react'
import { MainContext } from '../context/MainContext'

export const useMainContext = () => {
  return useContext(MainContext)
}
