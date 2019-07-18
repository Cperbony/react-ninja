'use strict'

import React from 'react'

const Title = ({ name, sobrenome }) => {
  <h1>Olá {`${name} ${lastname}`}</h1>
}

Title.defaultProps = {
  name: 'Desconhecido',
  sobrenome: 'Sem sobrenome'
}

// const Title = function (){
//     return (
//         <h1>Olá Claus</h1>
//     )
// }

// var Title = React.createClass({
//     getDefaultProps: function () {
//         return {
//             name:  'Desconhecido',
//             lastname: 'Sem sobrenome'
//         }
//     },

//     render: function (){
//         return (
//             <h1>Olá {this.props.name + ' ' + this.props.lastname}</h1>
//         )
//     }
// })

export default Title
