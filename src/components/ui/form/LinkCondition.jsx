import React from 'react'
import PropTypes from 'prop-types'
import Arrow from '../../../assets/arrow.png'

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
