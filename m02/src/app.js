'use strict'

var React = require('react')
var ReactDOM = require('react-dom')

var Title = React.createClass({
    render: function () {
        return React.createElement('h1', null, 'Titulo')
    }
})

module.exports = Title