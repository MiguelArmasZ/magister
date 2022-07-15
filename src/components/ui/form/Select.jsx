import React from 'react'
import PropTypes from 'prop-types'
import { useMainContext } from '../../../hooks'

export const Select = ({
  name,
  class$ = '',
  collection,
  handleChange
}) => {
  const { formValues } = useMainContext()

  return (
    <select
      name={name}
      id={name}
      className={class$}
      value={formValues[name] || ''}
      onChange={handleChange}
    >
      <option value='' disabled>
        -- Seleccione --
      </option>
      {collection.map(({ nombre, id }) => (
        <option key={id} value={nombre}>
          {nombre}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  class$: PropTypes.string,
  collection: PropTypes.array.isRequired,
  handleChange: PropTypes.func
}
