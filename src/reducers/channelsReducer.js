import { actionTypes } from '../actions/channelsActions'

export const channelsReducer = (state = [], action) => {
  switch(action.type) {
    case actionTypes.GET_CHANNELS:
      return action.channels
    default:
      return state
  }
}
