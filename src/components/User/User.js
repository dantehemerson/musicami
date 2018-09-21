import React from 'react'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import styled from 'styled-components'

import 'firebaseui/dist/firebaseui.css'

var config = {
  apiKey: 'AIzaSyCA53LFVi5H5l7sy9DWbSJ4F_zBvhih3JQ',
	authDomain: 'musicami-player.firebaseapp.com',
  databaseURL: 'https://musicami-player.firebaseio.com',
  projectId: 'musicami-player',
  storageBucket: 'musicami-player.appspot.com',
  messagingSenderId: '28229822913'
}
firebase.initializeApp(config)

let ui = new firebaseui.auth.AuthUI(firebase.auth())

var uiConfig = {
	signInSuccessUrl: 'http://localhost:3000/',
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		//firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		//firebase.auth.TwitterAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID,
		//firebase.auth.EmailAuthProvider.PROVIDER_ID,
		//firebase.auth.PhoneAuthProvider.PROVIDER_ID,
		//firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
	]
}


ui.start('#firebase-auth-container', uiConfig)

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

const FirebaseUI = styled.div`
	position: fixed;
	right: 0;
	bottom: 0;
	width: 600px;
	height: 500px;
	background: white;
	box-shadow: 0 0 4px gray;
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
				<FirebaseUI id="firebase-auth-container"></FirebaseUI>
				<Avatar/>
				<Username>{ this.state.name }</Username>
			</Container>
		)
	}
}

export default User