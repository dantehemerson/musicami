import React from 'react'
import api from '../../utils/api'

export default class Player extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			streamURL: null
		}
	}

	componentWillReceiveProps(newProps) {
		console.log(newProps.currentSong.stream_url)
		api.fetchStreamURL(newProps.currentSong.stream_url)
			.then(url => this.setState({...this.state, streamURL: url}))
	}

	render() {
		return (
			<div>
				Playing { this.props.currentSong && this.props.currentSong.title }...
				<div>
					<audio 
						id='audio-player' 
						src={this.state.streamURL} 
						autoPlay={true}
						controls={true}
						preload='metadata'>
						Audio not supported!!
					</audio>
				</div>
			</div>
		)
	}
}