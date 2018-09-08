import getQueryString from './paramParser'

const host = 'https://api.anyaudio.in'

export default {
	search: (query) => {
		return new Promise((resolve, reject) => {
			fetch(host + '/api/v1/search?' + getQueryString({q: query}))
				.then(response => response.json().then(videos => resolve(videos)))
		})
	},
	fetchStreamURL: (streamURL) => {
		return new Promise((resolve, reject) => {			
			fetch(host + streamURL)
				.then(response => 
					response.json().then(data => resolve(host + data.url)))
		})
	},
	getSuggestions: (suggestUrl) => {
		return new Promise((resolve, reject) => {
			fetch(host + suggestUrl)
				.then(response => response.json().then(data => resolve(data.results)))
		})
	},
	getPlaylists: () => {
		return new Promise((resolve, reject) => {
			fetch(host + '/api/v1/playlists')
				.then(response => response.json().then(data => resolve(data.results)))
		})
	},
	getPlaylistsSong: (playlists, count) => {
		let commaSeparatedPlaylists = playlists.map(a => a.playlist).join()
		return new Promise((resolve, reject) => {
			fetch(host + '/api/v1/trending?' + getQueryString({ type: commaSeparatedPlaylists, number: count }))
				.then(response => response.json().then(data => resolve(data.results)))
		})
	}
}