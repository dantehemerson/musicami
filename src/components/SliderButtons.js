import React from 'react'
import styled from 'react-emotion'
import { Icon } from 'semantic-ui-react'

const Wrapper = styled('div')`
  display: flex;
`
const Button = styled('div')`
  border: 1px solid #dedee3;
  border-radius: ${props => props.right ? '0 3rem 3rem 0' : '3rem 0 0 3rem' };
  background: white;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    margin:  0 !important;
    line-height: 1;
  }
  &:hover {
    i:before {
      color: #007feb;
    }
  }
`

export default props => (
  <Wrapper>
    <Button onClick={ () => props.previous(props.id)}>
      <Icon name='chevron left'/>
    </Button>
    <Button right onClick={ () => props.next(props.id)}>
      <Icon name='chevron right' />
    </Button>
  </Wrapper>
)
