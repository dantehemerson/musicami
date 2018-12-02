export const actionTypes = {
  ADD_SONGS: 'PUSH_SONGS_TO_QUEUE',
  SET_SONGS: 'SET_SONGS_TO_QUEUE',
  REMOVE_SONGS: 'REMOVE_SONGS_FROM_QUEUE'
}


export const addSongs = (songs) => {
  return dispatch => dispatch({
    type: actionTypes.ADD_SONGS,
    songs
  })
}

export const setSongs = (songs) => {
  return dispatch => dispatch({
    type: actionTypes.SET_SONGS,
    songs
  })
}

export const removeSongs = (songs) => {
  return dispatch => dispatch({
    type: actionTypes.PUSH_SONGS,
    songs
  })
}
