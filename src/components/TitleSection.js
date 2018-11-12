import React from 'react'
import styled from 'react-emotion'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  .fjk3 {
    color: #32323d;
    font-size: ${props => props.big ? '30px' : 'large'};
    font-weight: ${props => props.big ? '400' : 'inherit'};
    transition: .2s;
    i:hover {
      transition: .2s !important;
    }
    i {
      transition: padding .2s;
    }
    &:hover {
      color: #007feb;
      i {
        padding-left: 5px;
      }
    }
  }
`

export default props => (
  <Wrapper {...props}>
    {
      props.to ?
        <Link className='fjk3' to={ props.to }>{ props.title }<Icon size='small' name='chevron right'/></Link>
      :
        <h3 className='fjk3'>{ props.title }</h3>
    }
  </Wrapper>
)
