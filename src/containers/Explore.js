import React from 'react'
import { connect } from 'react-redux'
import { getPlaylists } from '../actions/trendingActions'
import _ from 'lodash'
import { Loader } from 'semantic-ui-react'

import ExploreItem from '../components/ExploreItem'

class Explore extends React.Component {
  componentDidMount() {
    this.props.getPlaylists(10)
  }

  render() {
    const { playlists } = this.props
    if(_.isEmpty(playlists)) {
      return (
        <Loader active inline='centered'>Loading...</Loader>
      )
    }
    return (
      <div>
        {
          Object.keys(playlists).map(playlist =>
            <ExploreItem
              title={playlist}/>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  playlists: state.trending.playlists
})

const mapDispatchToProps = {
  getPlaylists
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore)
