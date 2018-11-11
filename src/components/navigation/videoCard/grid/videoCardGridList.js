import React from 'react'
import { Grid } from 'semantic-ui-react'

import VideoCardGrid from './videoCardGrid'
import './static/css/videoCardGrid.css'
import Loader from '../../../Loader'

export default class VideoCardGridList extends React.Component {
	getPlaylist(name, videos) {
		return (
			<div className='playlist-complete uk-margin-medium-bottom' key={name}>
			  <div className='playlist-title title-deco title-deco-sm'>{name}</div>
			  <Grid centered>
			   	{
            videos.map(video =>
              <Grid.Column
                key={video.id}
                mobile={13}
                tablet={8}
                computer={4}>
    			   		<VideoCardGrid
    			   			video={video}
    			   			playSong={this.props.playSong}
    			   			addToNowPlaying={this.props.addToNowPlaying}/>
              </Grid.Column>
            )
          }
				</Grid>
			</div>
		)
	}

	getPlaylists() {
		let keys = Object.keys(this.props.playlists)
		return keys.map(key => {
			return this.getPlaylist(key, this.props.playlists[key])
		})
	}

	render() {
		if(Object.keys(this.props.playlists).length === 0) {
			return (
				<Loader/>
			)
		}
		return (
			<div>
				{ this.getPlaylists() }
			</div>
		)
	}
}
