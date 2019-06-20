'use strict'

const path = require('path')

//exportar objeto que o webpack precisa para fazer o bundle
//dirname coloca a barra certa para cada sistema operacional

module.exports = {
    entry: path.join(__dirname. 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    }
}


