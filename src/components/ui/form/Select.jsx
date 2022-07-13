import React from 'react'
import PropTypes from 'prop-types'

export const Select = ({
  collection,
  name,
  value,
  class$ = '',
  handleChange
}) => {
  return (
    <select
      onChange={handleChange}
      className={class$}
      name={name}
      id={name}
      value={value}
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
  value: PropTypes.string.isRequired,
  class$: PropTypes.string,
  handleChange: PropTypes.func
}
