import getQueryString from './paramParser'

const host = 'https://api.anyaudio.in'

export default {
	search: (query) => {
		return new Promise((resolve, reject) => {
			fetch(host + '/api/v1/search?' + getQueryString({q: query}))
				.then(response => response.json().then(videos => resolve(videos)))
		})
	},
	fetchStreamURL(streamURL) {
		return new Promise((resolve, reject) => {			
			fetch(host + streamURL)
				.then(response => 
					response.json().then(data => resolve(host + data.url)))
		})
	}
}