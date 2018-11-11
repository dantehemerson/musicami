import api from '../utils/api'

export const actionTypes = {
  GET_CHANNELS: 'GET_CHANNELS'
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
