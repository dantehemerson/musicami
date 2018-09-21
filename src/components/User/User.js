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
		const nameRef = firebase.database().ref().child('object').child('name')
		nameRef.on('value', (snapshot) => {
			this.setState({
				name: snapshot.val()
			})
		})
	}

	render() {
		return <h3>{ this.state.name }</h3>
	}
}

export default User