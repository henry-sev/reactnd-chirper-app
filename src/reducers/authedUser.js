import {SET_AUTHED_USER} from '../actions/authedUser'

//recap: 这里state设为null的意义
export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.id
    default :
      return state
  }
}