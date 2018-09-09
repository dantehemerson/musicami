import React from 'react'

import MiniCardList from './miniCard/miniCardList'

export default class SideBar extends React.Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.dispatchNext) {
			if(nextProps.nextSongs.length > 0) {
				let song = nextProps.nextSongs[0]
				this.props.removeSong(song)
				this.playSong(song)
			} else if(nextProps.suggestedSongs.length > 0) {
				let song = nextProps.suggestedSongs[0]
				this.playSong(song)
			}
		}
	}

	playSong(song) {
		this.props.playSong(song)
		this.props.playedNext(song)
	}

	render() {
		return (
			<div>
				<div>
					<b>Previous Songs:</b>
					<MiniCardList 
						songs={this.props.prevSongs}
						currentSong={this.props.currentSong}
						playSong={this.props.playSong}
						addToNowPlaying={this.props.addToNowPlaying} />
				</div>
				<hr/>
				<div>
					<b>Upcoming songs:</b>
					<MiniCardList
						songs={this.props.nextSongs}
						playSong={this.props.playSong}
						addToNowPlaying={this.props.addToNowPlaying} />
				</div>
				<div style={{ marginTop: '10px'}}>
					<b>Suggestions:</b>
					<MiniCardList
						songs={this.props.suggestedSongs}
						playSong={this.props.playSong}
						addToNowPlaying={this.props.addToNowPlaying} />
				</div>				
			</div>
		)
	}
}