import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Button, Icon, Image, Menu, Segment, Sidebar as SidebarSem } from 'semantic-ui-react'
import { css } from 'react-emotion'

import './static/css/root.css'

// containers
import Header from './containers/headerContainer'
import NavigationHome from './containers/navigation/navigationHomeContainer'
import NavigationSearch from './containers/navigation/navigationSearchContainer'
import Player from './containers/playerContainer'
import Sidebar from './containers/sideBarContainer'
import 'semantic-ui-css/semantic.min.css';
import SidebarMenu from './components/SidebarMenu'

const Root = ({ store }) => (
	<Provider store={ store }>
		<BrowserRouter basename="/musicami">
      <div>
        <Header/>
        <SidebarMenu/>
      	<div
          className={css`
            margin-left: 220px;
          `}>
          <Route exact path='/' component={ NavigationHome } />
          <Route exact path='/search/:q' component={ NavigationSearch }/>
          <div className="sidebar-container">
            <Sidebar />
          </div>
        </div>
  			<div className="page-bottom">
          <Player/>
        </div>
      </div>
		</BrowserRouter>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
