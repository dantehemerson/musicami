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


// Playlists
const songSchema = new schema.Entity('songs', {}, {
  processStrategy: (value, parent, key) => {
    delete value.description
    return {
      ...value,
      favorite: false
    }
  }
})

const playlistSchema = new schema.Values(songSchema)


const playlists = {
  playlists: [ playlistSchema ]
}

getPlaylistSongs('Popular', 3)
.then(res => {
  const data = {
    playlists: res
  }
  // console.log(data.playlists.Popular)
  // const normalizedData = normalize(data.playlists.Popular, [songSchema])
  // console.log(normalizedData)

  console.log(data.playlists)
  const normalizedData = normalize(data.playlists, playlistSchema)
  console.log(normalizedData)

})
