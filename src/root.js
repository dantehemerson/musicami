import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { css } from 'react-emotion'

import './static/css/root.css'

// containers
import Header from './containers/headerContainer'
import NavigationHome from './containers/navigation/navigationHomeContainer'
import NavigationSearch from './containers/navigation/navigationSearchContainer'
import Explore from './containers/Explore'
import Channel from './containers/Channel'
import Player from './containers/playerContainer'
//import Sidebar from './containers/sideBarContainer'
import 'semantic-ui-css/semantic.min.css';
import SidebarMenu from './components/SidebarMenu'
import NotFound from './containers/NotFound'

const Root = ({ store }) => (
	<Provider store={ store }>
		<BrowserRouter basename="/musicami">
      <div>
        <Header/>
        <SidebarMenu/>
      	<div
          className={css`
            margin-left: 220px !important;
            padding-top: 58px !important;
          `}>
          <Switch>
            <Route exact path='/' component={ NavigationHome } />
            <Route exact path='/explore' component={ Explore } />
            <Route exact path='/explore/:channelId' component={ Channel } />
            <Route exact path='/search/:q' component={ NavigationSearch }/>
            <Route component={NotFound}/>
          </Switch>
          {/*
          <div className="sidebar-container">
            <Sidebar />
          </div>
        */}
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
