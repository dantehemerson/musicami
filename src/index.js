import React from 'react'
import { hydrate, render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Root from './root'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(thunkMiddleware)
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
