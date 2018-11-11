import React from 'react'
import styled, { css } from 'react-emotion'
import { Link } from 'react-router-dom'

import icon from '../assets/images/logo.png'

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  margin: 12px 0;
  text-decoration: none !important;
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
  <Logo to='/'>
    <img
      className={css`
        width: 45px;
        height: 45px;
      `}
      alt='Musicami'
      src={icon}/>
    <Title>Musicami</Title>
  </Logo>
)
