import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Loader } from 'semantic-ui-react'

import { getChannelSongs } from '../actions/channelsActions'

class Channel extends React.Component {
  componentDidMount() {
    //console.log(this.props.match.params.channelId)
  }

  render() {
    return (
      <div>
        Instagram
        <span onClick={ () => this.props.getChannelSongs(this.props.match.params.channelId)}>Get songs</span>
        {
          console.log(this.props)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs
})

export default connect(
  mapStateToProps,
  {
    getChannelSongs
  }
)(Channel)
