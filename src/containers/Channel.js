import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Loader } from 'semantic-ui-react'

class Channel extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.channelId)
  }

  render() {
    return (
      <div>
        Instagram
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   channels: state.channels
// })

// const mapDispatchToProps = {
//   getChannels
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Explore)
export default Channel
