import {getInitialData} from '../utils/api'
import {receiveUsers} from './users'
import {receiveTweets} from './tweets'
import {setAuthedUser} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = "tylermcginnis";

export function handleInitinalData() {
  return (dispatch) => {
    dispatch(showLoading())
    //recap: 需要return吗
    return getInitialData()
      .then(({users, tweets}) => {
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading())
      })
  }
}