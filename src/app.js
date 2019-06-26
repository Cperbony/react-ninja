'use strict'

import React, { Component } from 'react'
import Button from './button'

// Criar classes, extendendo componente React
class App extends Component {

  constructor() {
    super()
    this.state = {
      value: '2',
      checked: false
    }
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('event', e)
        }}

        onChange={(e) => {
          console.log('name', e.target.value)
          console.log('value', e.target.value)
        }}>

        <input type='name' name='name' /><br />
        <input type='eamil' name='email' /><br />
        <input type='text' value={this.state.value} onChange={(e) => {
          console.log(e.nativeEvent)
          this.setState({
            value: e.target.value
          })
        }} />

        <label>
          <input type='checkbox'
            value='my-checkbox'
            defaultChecked
          // checked={this.state.checked}
          // onChange={(e) => {
          //   this.setState({ checked: e.target.checked })
          // }}
          />
          Checkbox
        </label>

        <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
        <input type='radio' name='rd' value='2' /> Radio 2

        <br />

        <select multiple value={this.state.value} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }}>
          <option value='1'>Opção 1</option>
          <option value='2'>Opção 2</option>
          <option value='3'>Opção 3</option>
        </select>

        <br />

        <textarea defaultValue={'textarea\n value\ncom defaultValue'} />

        <br />

        <button type='submit'>Enviar</button>


      </form>
    )
  }
}

export default App
