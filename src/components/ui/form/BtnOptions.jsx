/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useMainContext } from '../../../hooks'

export const BtnOptions = ({
  options,
  name,
  class$ = '',
  handleChange
}) => {
  const { formValues } = useMainContext()

  const [active, setActive] = useState(null)

  function handleActive(e, i) {
    setActive(i)
  }

  return (
    <div className={`keypad ${class$}`}>
      {options.map(({ nombre, id }, i) => (
        <button
          onClick={(e) => {
            handleChange(e)
            handleActive(e, i)
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
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  class$: PropTypes.string,
  handleChange: PropTypes.func
}
