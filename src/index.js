import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Root from './root'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(thunkMiddleware)
	)
)

const rootElement = document.getElementById('root')
const app = <Root store={ store } />
render(app, rootElement)

registerServiceWorker()
