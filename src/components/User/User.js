import React from 'react'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCA53LFVi5H5l7sy9DWbSJ4F_zBvhih3JQ',
	authDomain: 'musicami-player.firebaseapp.com',
  databaseURL: 'https://musicami-player.firebaseio.com',
  projectId: 'musicami-player',
  storageBucket: 'musicami-player.appspot.com',
  messagingSenderId: '28229822913'
}

firebase.initializeApp(config)

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
			<div>
				<h3>{ this.state.name }</h3>
			</div>
		)
	}
}

export default User