'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
    render: function () {
        return <div>Application</div>
    }
})

var Title = React.createClass({
    render: function () {
        return React.createElement('h1', null, 'Titulo')
    }
})

//Utilizar o JSX
var TitleJSX = React.createClass({
    render: function () {
        return <h1>Titulo JSX</h1>
    }
})

export default App
export default Title
export default TitleJSX