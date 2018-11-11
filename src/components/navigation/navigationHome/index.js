import React from 'react'
import VideoCardGridList from '../videoCard/grid/videoCardGridList'
import Wrapper from '../../Wrapper'

export default class NavigationHome extends React.Component {
	componentDidMount() {
		this.props.getPlaylists(10)
	}

	render() {
		return (
			<Wrapper>
				<VideoCardGridList
					playlists={this.props.playlists}
					playSong={this.props.playSong}
					addToNowPlaying={this.props.addToNowPlaying}/>
			</Wrapper>
		)
	}
}
