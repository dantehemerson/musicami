import React from 'react'
import firebase from 'firebase'
import styled from 'styled-components'

var config = {
  apiKey: 'AIzaSyCA53LFVi5H5l7sy9DWbSJ4F_zBvhih3JQ',
	authDomain: 'musicami-player.firebaseapp.com',
  databaseURL: 'https://musicami-player.firebaseio.com',
  projectId: 'musicami-player',
  storageBucket: 'musicami-player.appspot.com',
  messagingSenderId: '28229822913'
}

firebase.initializeApp(config)


const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Username = styled.p`
	margin: 0;
`

const Avatar = styled.img`
	background: gray;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin-right: 5px;
	margin-left: 10px;
	visibility: visible !important;
`

class User extends React.Component {
	constructor() {
		super()
		this.state = {
			name: 'Carlos'
		}
	}

	componentWillMount() {
		const rootRef = firebase.database().ref()
		const nameRef = rootRef.child('users').child('dantehemerson').child('name')
		console.log(nameRef)
		nameRef.on('value', (snapshot) => {
			this.setState({
				name: snapshot.val()
			})
		})
	}

	render() {
		return (
			<Container>
				<Avatar/>
				<Username>{ this.state.name }</Username>
			</Container>
		)
	}
}

export default User