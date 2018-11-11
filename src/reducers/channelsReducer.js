import { actionTypes } from '../actions/channelsActions'

const initialState = {
  data: [],
  songs: {}
}
export const channelsReducer = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.GET_CHANNELS:
      return {
        ...state,
        data: action.channels
      }
    case actionTypes.GET_CHANNEL_SONGS:
      console.log(action.songs)

      return state
    default:
      return state
  }
}
