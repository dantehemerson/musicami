import React from 'react'
import { hydrate, render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Root from './root'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

import Icons from 'uikit/dist/js/uikit-icons'
import UIKit from 'uikit'

import 'uikit/dist/css/uikit.min.css'

UIKit.use(Icons)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
)

const rootElement = document.getElementById('root')
const app = <Root store={ store } />

if(rootElement.hasChildNodes()) {
  render(app, rootElement)
} else {
  hydrate(app, rootElement)
}

registerServiceWorker()
