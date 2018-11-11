import React from 'react'
import { Loader } from 'semantic-ui-react'
import { css } from 'react-emotion'

export default () => (
  <Loader
    className={css`
      margin-top: 100px !important;
    `}
    active
    inline='centered'>
    Loading...
  </Loader>
)
