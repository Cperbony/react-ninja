'use strict'

import React, { Component } from 'react'
import Button from './button'

//Criar classes, extendendo componente React
class App extends Component {
    constructor() {
        super()
        this.state = {
            text: 'Claus'
        }
    }
    //Renderizamos como um objeto.
    render() {
        return (
            <div className='container' onClick={() => this.setState({
                text: 'Outro Texto'
            })}>
                {this.state.text}
            </div>
        )
    }
}

export default App