'use strict'

import React from 'react'

const Square = ({ color }) => (
  <div style={{
    backgoroundColor: color,
    height: '100px',
    width: '100px'
  }} />
)

Square.defaultProps = {
  color: 'red'
}

export default Square
