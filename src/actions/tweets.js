import {saveLikeToggle} from '../utils/api'

export const RECEIVE_TWEETS = "RECEIVE_TWEETS"
export const TOGGLE_TWEET = "TOGGLE_TWEET"

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

function toggleTweet({id, hasLiked, authedUser}) {
  return {
    type: TOGGLE_TWEET,
    id,
    hasLiked,
    authedUser,
  }
}

export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));

    return saveLikeToggle(info)
      .catch((error) => {
        console.warn("Error in handleToggleTweet: ", error);
        dispatch(toggleTweet(info));
        alert("There was an error liking the tweet. Try again!")
      })
  }
}

// export function _saveLikeToggle ({ id, hasLiked, authedUser }) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       tweets = {
//         ...tweets,
//         [id]: {
//           ...tweets[id],
//           likes: hasLiked === true
//             ? tweets[id].likes.filter((uid) => uid !== authedUser)
//             : tweets[id].likes.concat([authedUser])
//         }
//       }

//       res()
//     }, 500)
//   })
// }