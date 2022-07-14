import React from 'react'
import Arrow from '../../../assets/arrow.png'
import PropTypes from 'prop-types'

export const LinkCondition = ({ text }) => {
  return (
    <a className='conditions'>
      {text}
      <img className='arrow' src={Arrow} alt='flecha' />
    </a>
  )
}

LinkCondition.propTypes = {
  text: PropTypes.string.isRequired
}
