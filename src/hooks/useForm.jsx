/* eslint-disable space-before-function-paren */
import { useMainContext } from './'

export const useForm = () => {
  const { formValues, setFormValues } = useMainContext()

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return handleChange
}
