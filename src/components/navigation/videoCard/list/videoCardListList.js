import React from 'react'
import VideoCardList from './videoCardList'

import './static/css/videoCardList.css';

export default class VideoCardListList extends React.Component {
  	render() {
    	return (
      	<div className='video-card-list-list'>
        		{this.props.videos && this.props.videos.map(video => <VideoCardList video={video} key={video.id} />)}
      	</div>
    	)
  	}
}