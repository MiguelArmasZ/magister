/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const BtnOptions = ({ options, name, handleChange }) => {
  const [active, setActive] = useState(null)
  function handleActive(e, i) {
    setActive(i)
  }

  return (
    <div className='keypad'>
      {options.map(({ option, id }, i) => (
        <button
          onClick={(e) => {
            handleChange(e)
            handleActive(e, i)
          }}
          key={id}
          type='button'
          className={`btn btn--form ${active === i ? 'active' : ''}`}
          name={name}
          value={option}
          id={id}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

BtnOptions.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func
}
