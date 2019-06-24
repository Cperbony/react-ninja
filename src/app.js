'use strict'

import React, { Component } from 'react'
import Button from './button'

//Criar classes, extendendo componente React
class App extends Component {
    //Renderizamos como um objeto.
    render() {
        return (
        <div className='container'>
          <Button>
              <span>Texto</span>
              </Button>
        </div>
        )
    }
}

export default App