import React from 'react'
import styled, { css } from 'react-emotion'
import { Icon } from 'semantic-ui-react'

export default props => (
  <Icon
    className={css`
      &&& {
        padding: ${props.size === 'small' ? '18px' : '21px'} !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        &&{
          background-color: #000000!important;
        }
        margin-right: 9px;
        transition-duration: .15s;
        &:hover {
          transform: scale3d(1.2,1.2,1.2);
        }
      }
    `}
    circular
    inverted
    size={props.size ? props.size : 'normal'}
    name={props.name ? props.name : 'play'} />
)
