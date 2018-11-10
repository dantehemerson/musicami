import React from 'react'
import styled, { css } from 'react-emotion'

import icon from '../assets/images/logo.png'

const Logo = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 10px 12px 0;
`

const Title = styled('h3')`
  color: white;
  margin: 0;
  padding-left: 6px;
  font-weight: 800;
  font-size: 19px;
  text-transform: uppercase;
`

export default props => (
  <Logo>
    <img
      className={css`
        width: 45px;
        height: 45px;
      `}
      src={icon}/>
    <Title>Musicami</Title>
  </Logo>
)
