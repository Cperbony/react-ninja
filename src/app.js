'use strict'

import React, { Component } from 'react'
import Timer from './timer'

//Criar classes, extendendo componente React
class App extends Component {
    constructor() {
        console.log('componentWillMount')
        super()
        this.state = {
            showTimer: 'true'
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        return (
            <div>
                {this.state.showTimer && <Timer />}
                <button onClick={() => {
                    this.setState({ showTimer: !this.state.showTimer })
                }}>Show / Hide</button>
            </div>
        )
    }
}

export default App