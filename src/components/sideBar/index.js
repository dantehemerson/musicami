import React from 'react'

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
					{
						this.props.prevSongs.map(video => {
							if(this.props.currentSong && this.props.currentSong.id === video.id) {
								return <li key={video.id}><b>{ video.title }</b></li>
							}
							return <li key={video.id}>{ video.title }</li>
						})
					}
				</div>
				<hr/>
				<div>
					<b>Upcoming songs:</b>
					{ this.props.nextSongs.map(video => 
						<li key={ video.id }>{ video.title }</li>) }
				</div>
				<div style={{ marginTop: '10px'}}>
					<b>Suggestions:</b>
					{ this.props.suggestedSongs.map(video => 
							<li key={ video.id }>{ video.title }</li>)}
				</div>				
			</div>
		)
	}
}