'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Title from './title'

const App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Title name='Claudinei Perboni' lastname {{ first: 'Cla', last: 'Perboni'}}/>
            </div>
        )
    }
})

export default App