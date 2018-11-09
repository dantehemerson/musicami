import React from 'react'

import MiniCardList from './miniCard/miniCardList'
import './static/css/index.css'

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
			<div className="sidebar" style={{ display: this.props.playlistActive ? 'block' : 'none' }}>
			  	<div>
			    {/*Related Song*/}
			   	<div className="related-song-list-container">
				      <div className="sidebar-title uk-text-uppercase font-size-14">Related Songs</div>
				      <div className="sidebar-item-container related-songs-list uk-margin-small-top">
				      	<MiniCardList 
				      		name="related" 
				      		songs={this.props.suggestedSongs} 
				      		playSong={this.props.playSong} 
				      		addToNowPlaying={this.props.addToNowPlaying}/>
				      </div>
			   	</div>
				   <div className="upnext-song-list-container uk-margin-medium-top">
				      <div className="sidebar-title uk-text-uppercase font-size-14">Coming Up Next</div>
				      <div className="sidebar-item-container related-songs-list uk-margin-small-top">
				      	<MiniCardList 
				      		name="queue" 
				      		songs={this.props.nextSongs} 
				      		playSong={this.props.playSong} 
				      		addToNowPlaying={this.props.addToNowPlaying}/>
				      </div>
				   </div>
			  	</div>
			</div>
		)
	}
}