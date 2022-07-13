/* eslint-disable space-before-function-paren */
import { useState } from 'react'

export const useForm = (init) => {
  const [form, setForm] = useState(init)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return [form, handleChange]
}
