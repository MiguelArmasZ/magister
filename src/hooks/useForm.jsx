/* eslint-disable space-before-function-paren */
import { useState } from 'react'
import { useMainContext } from './'

export const useForm = (init) => {
  const [form] = useState(init)
  const { formValues, setFormValues } = useMainContext()

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return [form, handleChange]
}
