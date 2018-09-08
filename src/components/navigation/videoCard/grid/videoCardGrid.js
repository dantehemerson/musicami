import React from 'react'
import FontAwesome from 'react-fontawesome'

import './static/css/videoCardGrid.css'

export default class videoCardGrid extends React.Component {
	playSong() {
		this.props.playSong(this.props.video)
	}

	addToNowPlaying() {
		this.props.addToNowPlaying(this.props.video)
	}

	render() {
		return (
			<div className='col-xs-5 col-sm-5 col-md-2 col-lg-2 video-grid-card'>
			  	<img 
			  		className='img-responsive' 
			  		src={this.props.video.thumb} 
			  		alt='Loading...'
			      onClick={this.playSong.bind(this)}/>
			  	<div className='video-grid-details'>
			    	<div className='video-grid-title'>
			    		 <span className='video-grid-title-title'>{this.props.video.title}</span>
			    		 <FontAwesome 
			    		 	name='plus' 
			    		 	className='video-grid-title-add'
			    		 	onClick={this.addToNowPlaying.bind(this)} />
			    	</div>
			    	<div className='video-grid-uploader'>{this.props.video.uploader}</div>
			    	<div className='video-grid-views'>{this.props.video.views}</div>
			  	</div>
			</div>

		)
	}
}