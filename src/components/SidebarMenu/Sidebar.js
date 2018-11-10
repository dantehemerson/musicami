import React from 'react'
import styled, { css } from 'react-emotion'
import { Divider, Icon, Menu } from 'semantic-ui-react'

import Logo from '../Logo'

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
      `}>
      <Menu.Item
        onClick={() => console.log('Ci')}
        name='Home'/>
      <Menu.Item
        onClick={() => console.log('Ci')}
        name='Explore'/>
      <Divider inverted />
      <Menu.Item
        icon='music'
        onClick={() => console.log('Ci')}
        name='My Music'/>
      <Menu.Item
        icon='heart'
        onClick={() => console.log('Ci')}
        name='Favorites'/>
      <Menu.Item
        icon='list ul'
        onClick={() => console.log('Ci')}
        name='Playlists'/>
    </Menu>
  </Sidebar>
)
