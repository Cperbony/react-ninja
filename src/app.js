'use strict'

import React, { Component } from 'react'
import Button from './button'

// Criar classes, extendendo componente React
class App extends Component {

  constructor() {
    super()
    this.state = {
      value: 'Valor Inicial'
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            console.log(e.nativeEvent)
            this.setState({
              value: e.target.value
            })
          }} />
        </form>
      </div>
      // <div>
      //   <Button handleClick={() => (console.log('clicou!'))}>
      //     Clique em Mim!
      //     </Button>
      // </div>
    )
  }
}

export default App
