import React from 'react'
import { List } from 'semantic-ui-react'
import { css } from 'react-emotion'

import Indicator from './ListIndicator'
import Item from './ListItem'

export default props => (
  <div>
    <Indicator/>
    <List
      className={css`
        margin-top: 0 !important;
      `}
      selection>
      {
        props.songs &&
        props.songs.map((song,index) =>
          <Item key={index} song={{...song, index: index + 1 }}/>
        )
      }
    </List>
  </div>
)
