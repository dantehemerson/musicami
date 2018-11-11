import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'react-emotion'

const ExploreItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  border: 1px solid #d1d1d7;
  border-radius: 3px;
  box-shadow: 0 1px 5px rgba(10,10,22,.25);
  background: url('/static/images/channels/popular.png');
  &:hover {
    text-decoration: none;
    opacity: .9;
  }
  h4 {
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
`

export default props => (
  <ExploreItem to='/'>
    <h4>{ props.title }</h4>
  </ExploreItem>
)
