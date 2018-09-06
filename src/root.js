import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import './static/css/root.css'

// containers
import Header from './containers/headerContainer'
import NavigationHome from './containers/navigation/navigationHomeContainer'
import Player from './containers/playerContainer'
import Sidebar from './containers/sideBarContainer'

const Root = ({ store }) => (
	<Provider store={ store }>
		<BrowserRouter basename="/musicami">
			<div className="page">
				<div className="page-top">
					<Header />
				</div>
				<Row className="page-middle">
					<Col sm={12} md={12} lg={10}>
						<Route exact path='/' component={ NavigationHome } />
					</Col>					
					<Col smHidden={ true } mdHidden={true} lg={2}>
						<Sidebar />
					</Col>
				</Row>
				<div className="page-bottom">
					<Player />
				</div>
			</div>
		</BrowserRouter>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root