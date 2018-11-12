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
  arrows: false,
  responsive: [
    {
      breakpoint: 1176,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export default class VideoCardGridList extends React.Component {
  handleNext = (id) => {
    this[`slider${id}`].slickNext()
  }

  handlePrevious = (id) => {
    this[`slider${id}`].slickPrev()
  }

	getPlaylist = (name, videos, id) => {
		return (
			<div
        key={name}>
        <div
          className={css`
            display: flex;
            justify-content: center;
            padding: 30px 0;
            position: relative;
            align-items: center;
          `}>
			    <Title title={name} to={`/explore/${name}`}/>
          <div
            className={css`
               position: absolute;
               top: 22px;
               right: 0;
            `}>
            <SliderButtons
              next={this.handleNext}
              previous={this.handlePrevious}
              id={id}/>
          </div>
        </div>
			  <Slider
          className={css`
            overflow: hidden;
            .slick-list {
              width: calc(100% + 24px);
              left: -12px;
            }
          `}
          ref={s => (this[`slider${id}`] = s)}
          {...settings}>
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
		return keys.map((key, id) => {
			return this.getPlaylist(key, this.props.playlists[key], id)
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
