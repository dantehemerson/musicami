import React from 'react'
import PropTypes from 'prop-types'
import { keys } from '../../constants'
import styled, { css } from 'react-emotion'
import { Input } from 'semantic-ui-react'

const Wrapper = styled('div')`
  box-shadow: 0 0 10px gray;
  display: flex !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 3;
  align-items: center;
  height: 58px;
`

class Header extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    let searchElement = document.getElementById('search-input')
    if(searchElement) {
      searchElement.addEventListener('keyup', event => {
        event.preventDefault()
        if(event.keyCode === keys.ENTER) {
          this.search()
        }
      })
    }
  }

  search = () => {
    const searchElement = document.getElementById('search-input')

    const query = searchElement.value.replace(/^\s+|\s+$/g, '') // Trailing whitespaces
    if(query.length === 0) {
      return
    }
    searchElement.blur()
    this.props.history.push('/search/' + query)
  }

  render() {
   	return (
      <Wrapper>
        <Input
          className={css`
            padding: 0 15px;
            width: 100%;
            max-width: 400px;
          `}
          id='search-input'
          size='small'
          action={{ icon: 'search' }}
          placeholder='Search...'/>
      </Wrapper>
    )
  }
}

export default Header
