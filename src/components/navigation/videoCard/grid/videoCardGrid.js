import React from 'react'
import { Card, Icon, Dropdown, Reveal, Image } from 'semantic-ui-react'
import styled, { css } from 'react-emotion'

import './static/css/videoCardGrid.css'
import Button from '../../../CircleButton'

export default class videoCardGrid extends React.Component {
	constructor(props) {
    	super(props);
     	this.playSong = this.playSong.bind(this);
    	this.addToNowPlaying = this.addToNowPlaying.bind(this);
  	}

	playSong() {
		this.props.playSong(this.props.video)
	}

	addToNowPlaying() {
		this.props.addToNowPlaying(this.props.video)
	}

	render() {
		const MAX_TITLE_LENGTH = 33
		let videoTitle = this.props.video.title

		if(videoTitle.length > MAX_TITLE_LENGTH) {
		 	videoTitle =  videoTitle.substring(0, MAX_TITLE_LENGTH)+'... '
		}

		return (
			<div className="uk-width-1-4@l uk-width-1-3@m uk-width-1-3@s uk-width-1-2 video-card-grid uk-margin-small-bottom">

			  <Card
          className={css`

          `}>
          <div
            className={css`
              position: relative;
              &:hover {
                div {
                  opacity: 1;
                }
              }
            `}>
            <Image
            className={css`
              object-fit: none !important;
            `}
            src={this.props.video.thumb}
            alt={videoTitle}/>
            <div
              className={css`
                position: absolute;
                background: rgba(218, 218, 218, 0.32);
                opacity: 1;
                transition: .2s;
                display: flex;
                align-items: flex-end;
                padding: 14px 8px;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
              `}>
              <Button size='small'/>
              <Button size='small' name='heart'/>
              <Dropdown icon='heart' text=''  pointing className='icon'>
                    <Dropdown.Menu>
                      <Dropdown.Header>Categories</Dropdown.Header>
                      <Dropdown.Item>Home Goods</Dropdown.Item>
                      <Dropdown.Item>Add to Queue</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Add to My Music</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
            </div>
          </div>
          <Card.Content>
			      <Card.Header
              as='span'
              className={css`
                font-size: 14px !important;
                white-space: nowrap !important;
                text-overflow: ellipsis !important;
                overflow: hidden !important;
              `}
              title={videoTitle}
              onClick={this.playSong}>{videoTitle}</Card.Header>
			      <Card.Meta
              className={css`
                font-size: 12px !important;
                color: #72727d !important;
              `}>by {this.props.video.uploader}</Card.Meta>
			      <Card.Description
              className={css`
                margin-top: 0 !important;
                font-size: 11px !important;
                color: #72727d !important;
              `}>{this.props.video.views} listens</Card.Description>
            {/*
			      <div className="more-option uk-inline">
			        <button
			          className="uk-icon-link"
			          uk-icon="icon:plus; ratio:0.8"
			          onClick={this.addToNowPlaying}
			        />
			      </div>
          */}
			    </Card.Content>
			  </Card>

			</div>
		)
	}
}
