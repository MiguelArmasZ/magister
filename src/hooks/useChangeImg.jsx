import { useEffect } from 'react'
import { useMainContext } from './useMainContext'

export const useChangeImg = (img) => {
  const { setSidebarImg } = useMainContext()

  return useEffect(() => {
    setSidebarImg(img)
  }, [])
}
