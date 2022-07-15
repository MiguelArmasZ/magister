/* eslint-disable space-before-function-paren */
import { useNavigate } from 'react-router-dom'
import { useMainContext } from './'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export const useRegistration = () => {
  const { formValues, setFeedback, setSpinner, setFormValues } =
    useMainContext()

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const props = Object.values(formValues).includes('')

    if (props) {
      setFeedback({
        state: true,
        msg: 'todos los campos son obligatorios, revisa las secciones'
      })

      setTimeout(() => {
        setFeedback({
          state: false
        })
      }, 3000)
      return
    }

    setSpinner(true)

    setTimeout(() => {
      setSpinner(false)
    }, 5000)

    setTimeout(() => {
      navigate('/reserva')
    }, 3000)

    try {
      await addDoc(collection(db, 'matriculas'), formValues)

      const obj = {}
      Object.keys(formValues).forEach((key) => {
        obj[key] = ''
        obj.date = new Date(Date.now()).toLocaleString()
      })

      setTimeout(() => {
        setFormValues(obj)
      }, 5000)
    } catch (error) {
      console.error(`el error es ${error}`)
    }
  }

  return handleSubmit
}
