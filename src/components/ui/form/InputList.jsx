import React from 'react'
import PropTypes from 'prop-types'
import { InputFields } from './'
import { useMainContext } from '../../../hooks'

export const InputList = ({ fields, handleChange }) => {
  const { formValues } = useMainContext()

  return (
    <ul className='form-list'>
      {fields.map((field) => (
        <InputFields
          key={field.name}
          handleChange={handleChange}
          {...field}
          value={formValues[field.name] || ''}
        />
      ))}
    </ul>
  )
}

InputList.propTypes = {
  fields: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}
