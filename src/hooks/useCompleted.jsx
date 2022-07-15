import { useEffect, useState } from 'react'
import { useMainContext } from './'

export const useCompleted = (props) => {
  const { formValues } = useMainContext()
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (!props.includes('')) {
      setCompleted(true)
    } else {
      setCompleted(false)
    }
  }, [formValues])

  return completed
}
