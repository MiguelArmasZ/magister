import React from 'react'
import PropTypes from 'prop-types'

export const Heading = ({ children }) => {
  return <h2 className='heading'>{children}</h2>
}

Heading.propTypes = {
  children: PropTypes.string
}
