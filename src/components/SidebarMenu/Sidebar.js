import React from 'react'
import styled, { css } from 'react-emotion'

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
    <ul>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ul>
  </Sidebar>
)
