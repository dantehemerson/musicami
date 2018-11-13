const  { normalize, schema } = require('normalizr')
const fetch = require('node-fetch')

const host = 'https://api.anyaudio.in'

const getQueryString = (params) => {
  return Object
    .keys(params)
    .map(k => {
      if(Array.isArray(params[k])) {
        return params[k]
          .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
          .join('&')
      }
      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
    })
    .join('&')
}

const getPlaylists = () => {
  return new Promise((resolve, reject) => {
    fetch(host + '/api/v1/playlists')
          .then(response => response.json().then(data => resolve(data.results)))
  })
}

const getPlaylistSongs = (playlists, count) => {
  if(Array.isArray(playlists)) {
    playlists = playlists.join()
  }
  return new Promise((resolve, reject) => {
    fetch(host + '/api/v1/trending?' + getQueryString({
      type: playlists,
      number: count
    })).then(response => response.json().then(data => resolve(data.results)))
  })
}

getPlaylistSongs('Popular', 3)
.then(data => {



})
