import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { List } from 'semantic-ui-react'

import { getChannelSongs } from '../actions/channelsActions'
import Loader from '../components/Loader'
import ListItem from '../components/ListItem'

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
        <Loader/>
      )
    }
    return (
      <List selection>
        {
          songs &&
          songs.map(song =>
            <ListItem song={song}/>
          )
        }
      </List>
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
