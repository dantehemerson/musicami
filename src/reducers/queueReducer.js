import { actionTypes } from '../actions/queueActions'

const initialState = {
  songs: []
}

export const queueReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_SONGS:
      return {
        ...state,
        songs: [
          ...songs,
          ...action.songs
        ]
      }
    case actionTypes.REMOVE:
  }
}
