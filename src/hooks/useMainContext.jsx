import { useContext } from 'react'
import { MainContext } from '../Context'

export const useMainContext = () => {
  return useContext(MainContext)
}
