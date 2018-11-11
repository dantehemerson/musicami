import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Grid } from 'semantic-ui-react'

import { getChannels } from '../actions/channelsActions'
import ExploreItem from '../components/ExploreItem'
import Loader from '../components/Loader'
import Wrapper from '../components/Wrapper'
import Title from '../components/TitleSection'

class Explore extends React.Component {
  componentDidMount() {
    this.props.getChannels()
  }

  render() {
    const { channels } = this.props
    if(_.isEmpty(channels)) {
      return (
        <Wrapper>
          <Loader/>
        </Wrapper>
      )
    }
    return (
      <Wrapper>
        <Title title='All Channels' big/>
        <Grid>
          {
            channels.map(channel =>
              <Grid.Column
                key={channel.playlist}
                mobile={16}
                tablet={8}
                computer={4}>
                <ExploreItem
                  title={channel.playlist}/>
              </Grid.Column>
            )
          }
        </Grid>
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
