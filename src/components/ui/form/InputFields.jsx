import React from 'react'
import PropTypes from 'prop-types'

export const InputFields = ({ value, handleChange, ...field }) => {
  const { label, name, type, placeholder } = field

  return (
    <li className='field personal-data'>
      <label className='label' htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        onChange={handleChange}
        className='input'
        type={type}
        placeholder={placeholder}
        value={value}
        id={name}
      />
    </li>
  )
}

InputFields.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string
}
