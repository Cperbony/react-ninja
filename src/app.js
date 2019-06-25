'use strict'

import React, { Component } from 'react'
import Button from './button'

// Criar classes, extendendo componente React
class App extends Component {
  render() {
    return (
      <div>
        <Button handleClick={() => (console.log('clicou!'))}>
          Clique em Mim!
          </Button>
      </div>
    )
  }
}

export default App
