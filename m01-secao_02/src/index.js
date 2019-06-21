'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer} from 'react-hot-loader'

import Title from './app'

render(
    <AppContainer>
        <app />
    </AppContainer>,
    document.querySelector('[data.js="app"]')
)

if (module.hot) {
    module.hot.accept('./app', () => {
        const nextApp = require('/app').default

        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.querySelector('[data.js="app"]')
        )

    })
}

// var Title = require('/app')

// ReactDOM.render(
//     React.createElement(Title),
//     document.querySelector('[data.js="app"]')
// )

// //Com JSX
// render(
//     <Title />,
//     document.querySelector('[data.js="app"]')
// )

// console.log(sum(1, 2))
