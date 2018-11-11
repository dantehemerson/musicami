import React from 'react'
import { List } from 'semantic-ui-react'
import styled, { css } from 'react-emotion'

const ListItem = styled(List.Item)`
  height: 52px;
  display: flex !important;
  align-items: center;
  border-radius: 4px !important;
  position: relative !important;
  margin: -1px 0 !important;
  padding: .5em .5em !important;
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
  color: #92929d;
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
      <span className='index'>#</span>
    </Index>
    <Favorite>
    </Favorite>
    <span
      className={css`
        color: #92929d;
        font-size: 14px;
        margin: 0;
        padding-left: 12px;
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap !important;
        overflow: hidden;
      `}>
      TRACK
    </span>
    <span
      className={css`
        color: #92929d;
        font-size: 14px;
        margin: 0;
        padding-left: 12px;
        width: 120px;
        text-overflow: ellipsis;
        white-space: nowrap !important;
        overflow: hidden;
      `}>
      ARTIST
    </span>
    <span
      className={css`
        font-size: 14px;
        margin: 0;
        color: #92929d;
        padding-left: 12px;
        width: 60px;
        text-overflow: ellipsis;
        white-space: nowrap !important;
        overflow: hidden;
      `}>
      L.
    </span>
  </ListItem>
)
