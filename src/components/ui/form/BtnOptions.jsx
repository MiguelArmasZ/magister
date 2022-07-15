/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useMainContext } from '../../../hooks'

export const BtnOptions = ({
  name,
  class$ = '',
  options,
  handleChange
}) => {
  const [active, setActive] = useState(null)
  const { formValues } = useMainContext()

  function handleActive(i) {
    setActive(i)
  }

  return (
    <div className={`keypad ${class$}`}>
      {options.map(({ nombre, id }, i) => (
        <button
          onClick={(e) => {
            handleChange(e)
            handleActive(i)
          }}
          key={id}
          type='button'
          className={`btn btn--form ${
            active === i || formValues[name] === nombre
              ? 'active'
              : ''
          }`}
          name={name}
          value={nombre}
        >
          {nombre}
        </button>
      ))}
    </div>
  )
}

BtnOptions.propTypes = {
  name: PropTypes.string.isRequired,
  class$: PropTypes.string,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func
}
