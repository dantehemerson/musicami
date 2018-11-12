import React from 'react'
import styled, { css } from 'react-emotion'
import { Divider, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Logo from './Logo'

const Sidebar = styled('div')`
  background: rgb(35, 35, 44);
  width: 220px;
  position: fixed;
  padding-top: 20px;
  left: 0;
  top: 0;
  z-index: 4;
  bottom: 0;
`

export default props => (
  <Sidebar>
    <Logo/>
    <Menu
      inverted
      secondary
      vertical
      className={css`
        width: 100% !important;
        margin: 0 !important;
        padding: 15px;
        a.item i.icon {
          float: left !important;
          margin: 0 .5em 0 0 !important;
        }
      `}>
      <Menu.Item
        as={Link}
        to='/search'
        icon='search'
        name='SEARCH'/>
      <Menu.Item
        as={Link}
        to='/'
        icon='home'
        name='HOME'/>
      <Menu.Item
        as={Link}
        to='/explore'
        icon='internet explorer'
        name='EXPLORE'/>
      <Divider inverted />
      <Menu.Item
        as={Link}
        to='/profile/id/loved'
        icon='music'
        name='My Music'/>
      <Menu.Item
        as={Link}
        to='/profile/id/loved'
        icon='heart'
        name='Favorites'/>
      <Menu.Item
        as={Link}
        to='/profile/id/playlists'
        icon='list ul'
        name='Playlists'/>
    </Menu>
  </Sidebar>
)
