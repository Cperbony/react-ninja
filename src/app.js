'use strict'

import React, { Component } from 'react'
import Square from './square'

//Criar classes, extendendo componente React
class App extends Component {
    //Renderizamos como um objeto.
    render() {
        return (
            <div className='container' onClick={(e) => {
                alert('clicou')
            }}>
                <Square />
            </div>
        )
    }
}

// Criar classes, extendendo componente React
// class App extends Component {
//     //Renderizamos como um objeto.
//     render() {
//         return (
//             <div className="container">
//                 <Title name='Claudinei Perboni' />
//             </div>
//         )
//     }
// }


App.defaultProps = {
}

// const App = React.createClass({
//     render: function () {
//         return (
//             <div className="container">
//                 <Title name='Claudinei Perboni'/>
//             </div>
//         )
//     }
// })

export default App