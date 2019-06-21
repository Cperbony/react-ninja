'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer} from 'react-hot-loader'


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