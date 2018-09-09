import React from 'react'

import api from '../../utils/api'
import notify from '../../utils/notification'

export default class Player extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			streamURL: null
		}
		this.props.playNext()
	}

	componentDidMount() {
		let audioElement = document.getElementById('audio-player')
		if(audioElement) {
			audioElement.addEventListener('ended', e => {
				this.props.playNext()
			})
		}

		window.addEventListener('keydown', (e) => {
		      if (e.target === document.body) {
		        	switch (e.keyCode) {
		          	case 32:  // Space
		            	if (audioElement.paused === false) {
		              		audioElement.pause();
		            	} else {
		              		audioElement.play();
		            	}
		            	e.preventDefault()
		            	break;
		          	case 39:  // Right arrow
		            	audioElement.currentTime += 10;
		            	e.preventDefault()
		            	break;
		          	case 37:  // Left arrow
		            	audioElement.currentTime -= 10;
		            	e.preventDefault()
		            	break;
		          	case 38:  // Up arrow
		            	audioElement.volume = audioElement.volume <= 0.9 ? audioElement.volume + 0.1 : 1;
		            	e.preventDefault()
		            	break;
		          	case 40:  // Down arrow
		            	audioElement.volume = audioElement.volume >= 0.1 ? audioElement.volume - 0.1 : 0;
		            	e.preventDefault()
		            	break;
		          	case 78:
		            	this.props.playNext();
		            	e.preventDefault()
		            	break;
		          	default:		            
		        	}
		     	}
		   })
	}
	componentWillReceiveProps(newProps) {		
		api.fetchStreamURL(newProps.currentSong.stream_url)
			.then(url => {
				this.setState({...this.state, streamURL: url})
				notify('Playing now...' + newProps.currentSong.title)
			})
		this.props.getSuggestions(newProps.currentSong.suggest_url)
		this.props.playedNext(newProps.currentSong)
	}

	render() {
		return (
			<div>				
				<div>
					<audio 
						id='audio-player' 
						src={this.state.streamURL} 
						autoPlay={true}
						controls={true}
						preload='auto'>
						Audio not supported!!
					</audio>
					{ this.props.currentSong && this.props.currentSong.title }
					<button onClick={this.props.playNext}>Next</button>
				</div>
			</div>
		)
	}
}