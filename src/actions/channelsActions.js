import api from '../utils/api'

export const actionTypes = {
  GET_CHANNELS: 'GET_CHANNELS',
  GET_CHANNEL_SONGS: 'GET_CHANNEL_SONGS'
}

export const getChannels = () => {
  return dispatch => api.getPlaylists()
    .then(channels =>
      dispatch({
        type: actionTypes.GET_CHANNELS,
        channels
      })
    )
}

export const getChannelSongs = (channel) => {
  return dispatch => api.getChannelSongs(channel, 200)
    .then(songs =>
      dispatch({
        type: actionTypes.GET_CHANNEL_SONGS,
        songs
      })
    )
}
