import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { css } from 'react-emotion'

import './static/css/root.css'
import 'semantic-ui-css/semantic.min.css'

import Header from './containers/headerContainer'
import NavigationHome from './containers/navigation/navigationHomeContainer'
import NavigationSearch from './containers/navigation/navigationSearchContainer'
import Explore from './containers/Explore'
import Channel from './containers/Channel'
import Player from './containers/playerContainer'
import Sidebar from './components/Sidebar'
import NotFound from './containers/NotFound'
import './styles'

const Root = ({ store }) => (
	<Provider store={ store }>
		<BrowserRouter>
      <Fragment>
        <Header/>
        <Sidebar/>
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
            <Route exact path='/issue' component={() => window.location.assign('https://github.com/dantehemerson/musicami/issues')}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
  			<div className="page-bottom">
          <Player/>
        </div>
      </Fragment>
		</BrowserRouter>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
