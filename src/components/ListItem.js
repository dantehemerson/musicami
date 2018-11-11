import React from 'react'
import { List, Icon, Popup } from 'semantic-ui-react'
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

const Favorite = styled('div')`
  display: flex;
  height: 28px;
  width: 36px;
  padding-left: 6px;
  align-items: center;
  justify-content: center;
  i.heart.icon {
    margin: 0 !important;
    padding: 11px !important;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    &:hover {
      background: white;
    }
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
    <Favorite>
      <Popup
        trigger={<Icon name='heart outline' />}
        content='Add to Favorites'
        position='top center'
        inverted
        size='mini'/>
    </Favorite>
    <span
      className={css`
        color: #32323d;
        font-size: 14px;
        margin: 0;
        padding-left: 12px;
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap !important;
        overflow: hidden;
      `}>
      { song.title }
    </span>
    <span
      className={css`
        color: #32323d;
        font-size: 14px;
        margin: 0;
        padding-left: 12px;
        width: 120px;
        text-overflow: ellipsis;
        white-space: nowrap !important;
        overflow: hidden;
      `}>
      { song.uploader }
    </span>
    <span
      className={css`
        font-size: 14px;
        margin: 0;
        padding-left: 12px;
        width: 60px;
        text-overflow: ellipsis;
        white-space: nowrap !important;
        overflow: hidden;
      `}>
      { song.length }
    </span>

  </ListItem>
)
