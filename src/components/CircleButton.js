import React from 'react'
import { css } from 'react-emotion'
import { Icon } from 'semantic-ui-react'

const sizes = {
  mini: {
    padding: '14px',
    sizeIcon: 'small'
  },
  small: {
    padding: '18px',
    sizeIcon: 'small'
  },
  normal: {
    padding: '21px',
    sizeIcon: 'normal'
  }
}

export default props => (
  <Icon
    className={css`
      &&& {
        padding: ${sizes[props.size]  ? sizes[props.size].padding : '21px' } !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        &&{
          background-color: #000000!important;
        }
        margin-right: ${props.marginRight ? props.marginRight : '9px'};
        transition-duration: .15s;
        &:hover {
          transform: scale3d(1.2,1.2,1.2);
        }
      }
    `}
    circular
    inverted
    size={sizes[props.size] ? sizes[props.size].sizeIcon : 'normal'}
    name={props.name ? props.name : 'play'} />
)
