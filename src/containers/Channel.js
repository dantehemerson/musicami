import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Loader } from 'semantic-ui-react'

import { getChannelSongs } from '../actions/channelsActions'

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
    console.log(this.props)
    let songs = []
    if(this.state.name && this.props.songs) {
      songs = this.props.songs[this.state.name]
    }
    if(_.isEmpty(songs)) {
      return (
        <Loader active inline='centered'>Loading...</Loader>
      )
    }
    return (
      <div>
        {
          songs &&
          songs.map(song => <li>{ song.title }</li>)
        }
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
