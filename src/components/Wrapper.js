import React from 'react'
import { css } from 'react-emotion'

export default props => (
  <div
    className={css`
      padding-top: 30px;
      padding-left: 40px;
      padding-right: 40px;
      padding-bottom: 30px;
    `}>
    { props.children }
  </div>
)
