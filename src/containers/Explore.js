import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { getChannels } from '../actions/channelsActions'
import ExploreItem from '../components/ExploreItem'
import Loader from '../components/Loader'
import Wrapper from '../components/Wrapper'

class Explore extends React.Component {
  componentDidMount() {
    this.props.getChannels()
  }

  render() {
    const { channels } = this.props
    if(_.isEmpty(channels)) {
      return (
        <Loader/>
      )
    }
    return (
      <Wrapper>
        {
          channels.map(channel =>
            <ExploreItem
              key={channel.playlist}
              title={channel.playlist}/>
          )
        }
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  channels: state.channels.data
})

const mapDispatchToProps = {
  getChannels
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore)
