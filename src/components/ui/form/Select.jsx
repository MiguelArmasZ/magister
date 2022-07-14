import React from 'react'
import PropTypes from 'prop-types'
import { useMainContext } from '../../../hooks'

export const Select = ({
  collection,
  name,
  class$ = '',
  handleChange
}) => {
  const { formValues } = useMainContext()

  return (
    <select
      onChange={handleChange}
      className={class$}
      name={name}
      id={name}
      value={formValues[name] || ''}
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
  collection: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  class$: PropTypes.string,
  handleChange: PropTypes.func
}
