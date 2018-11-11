import { actionTypes } from '../actions/channelsActions'

const initialState = {
  data: [],
  songs: {}
}

export const channelsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_CHANNELS:
      return {
        ...state,
        data: action.channels
      }
    case actionTypes.GET_CHANNEL_SONGS:
      return {
        ...state,
        songs: {
          ...state.songs,
          ...action.songs
        }
      }
    default:
      return state
  }
}
