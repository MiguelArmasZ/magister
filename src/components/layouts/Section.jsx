import React from 'react'
import PropTypes from 'prop-types'

export const Section = ({ children }) => {
  return <main className='content section fade'>{children}</main>
}

Section.propTypes = {
  children: PropTypes.node
}
