const  { normalize, schema } = require('normalizr')

const host = 'https://api.anyaudio.in'


const getPlaylists = () => {
  return new Promise((resolve, reject) => {
    fetch(host + '/api/v1/playlists')
          .then(response => response.json().then(data => resolve(data.results)))
  })
}

getPlaylists()
  .then(res => console.log(res))
