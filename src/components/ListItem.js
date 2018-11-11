import React from 'react'
import { Image, List } from 'semantic-ui-react'
import styled, { css } from 'react-emotion'

import CircleButton from './CircleButton'

const ListItem = styled(List.Item)`
  height: 52px;
  display: flex !important;
  align-items: center;
  border-radius: 4px !important;
  position: relative !important;
  margin: -1px 0 !important;
  &:hover {
    background-color: #efeff2 !important;
    i.play.small.circular {
      display: inherit !important;
    }
    .index {
      display: none !important;
    }
  }
  &:before {
    content: '';
    top: 0;
    background-color: #efeff2;
    height: 1px;
    left: 6px;
    position: absolute;
    right: 6px;
  }
`

const Index = styled('div')`
  display: flex;
  height: 28px;
  width: 32px;
  align-items: center;
  justify-content: center;
  i.play.small.circular {
    display: none !important;
  }
`

export default ({ song }) => (
  <ListItem>
    <Index>
      <CircleButton
        marginRight='0'
        size='mini'/>
      <span className='index'>12</span>
    </Index>
    { song.title }
  </ListItem>
)
