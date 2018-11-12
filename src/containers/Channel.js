import React from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion'
import _ from 'lodash'

import { getChannelSongs } from '../actions/channelsActions'
import Loader from '../components/Loader'
import List from '../components/List'
import Wrapper from '../components/Wrapper'


const Header = styled('div')`
  background: url(${props => props.image ? props.image : 'black' });
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
  }
`

class Channel extends React.Component {
  state = {
    name: ''
  }

  componentDidMount() {
    const name = this.props.match.params.channelId
    if(!this.hasSongs(this.props.songs, name)) {
      this.props.getChannelSongs(this.props.match.params.channelId)
    }
    this.setState({
      name
    })
  }

  hasSongs = (songs, channelName) => {
    return songs && songs[channelName] && songs[channelName].length >= 1
  }

  render() {
    let songs = []
    if(this.state.name && this.props.songs) {
      songs = this.props.songs[this.state.name]
    }
    if(_.isEmpty(songs)) {
      return (
        <Wrapper>
          <Loader/>
        </Wrapper>
      )
    }
    return (
      <div>
        <Header
          image={`${process.env.PUBLIC_URL}/static/images/channels/popular.png`}>
          <h1>{ this.state.name }</h1>
        </Header>
        <Wrapper>
          <List songs={songs}/>
        </Wrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  songs: state.channels.songs
})

export default connect(
  mapStateToProps,
  {
    getChannelSongs
  }
)(Channel)
