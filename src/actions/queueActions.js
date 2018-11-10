export const actionTypes = {
  ADD: 'ADD_TO_QUEUE',
  REMOVE: 'REMOVE_FROM_QUEUE'
}


export const addToQueue = (songs) => {
  return dispatch => dispatch({
    type: actionTypes.ADD,
    songs
  })
}
