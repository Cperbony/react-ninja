'use strict'

import React from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: false
    }
  }

  render() {
    return {
      < form >
      <input type='text' value={this.state.value} onChange={(e) => {
        this.setState({ value: e.target.value })
      }} />
  }
}

}

export default App
