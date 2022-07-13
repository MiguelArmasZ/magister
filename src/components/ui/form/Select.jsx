import React from 'react'
import PropTypes from 'prop-types'

export const Select = ({
  collection,
  name,
  class$ = '',
  handleChange
}) => {
  return (
    <select
      onChange={handleChange}
      className={class$}
      name={name}
      id={name}
    >
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
