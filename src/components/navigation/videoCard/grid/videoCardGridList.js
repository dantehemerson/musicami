import React from 'react'
import { css } from 'react-emotion'
import Slider from 'react-slick'

import VideoCardGrid from './videoCardGrid'
import './static/css/videoCardGrid.css'
import Loader from '../../../Loader'
import Title from '../../../TitleSection'
import SliderButtons from '../../../SliderButtons'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false
}

export default class VideoCardGridList extends React.Component {
  handleNext = () => {
    console.log('Next')
    this.slider.slickNext()
  }

  handlePrevious = () => {
    console.log('Previous')
    this.slider.slickPrev()
  }

	getPlaylist = (name, videos) => {
    console.log(this.slider)
		return (
			<div
        className={css`
          padding-bottom: 35px;
        `}
        key={name}>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            padding: 30px 0;
            align-items: center;
          `}>
			    <Title title={name} to={`/explore/${name}`}/>
          <SliderButtons
            next={this.handleNext}
            previous={this.handlePrevious}/>
        </div>
			  <Slider ref={c => (this.slider = c)} {...settings}>
			   	{
            videos.map(video =>
    			   	<VideoCardGrid
                key={video.id}
    			   		video={video}
    			   		playSong={this.props.playSong}
    			   		addToNowPlaying={this.props.addToNowPlaying}/>
            )
          }
				</Slider>
			</div>
		)
	}

	getPlaylists = () => {
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
