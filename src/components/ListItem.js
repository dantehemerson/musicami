import React from 'react'
import { Image, List } from 'semantic-ui-react'
import styled, { css } from 'react-emotion'

const ListItem = styled(List.Item)`
  height: 52px;
  display: flex !important;
  align-items: center;
  border-radius: 4px !important;
  position: relative !important;
  margin: -1px 0 !important;
  &:hover {
    background-color: #efeff2 !important;
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

export default ({ song }) => (
  <ListItem>
    <List.Content>
      { song.title }
    </List.Content>
  </ListItem>
)
