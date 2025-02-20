import React, {Component} from 'react'
import {connect} from 'react-redux'
import { formatDate, formatTweet } from '../utils/helpers'
import {TiArrowBackOutline} from 'react-icons/ti'
import {TiHeartOutline} from 'react-icons/ti'
import {TiHeartFullOutline} from 'react-icons/ti'
import { handleToggleTweet } from '../actions/tweets'

class Tweet extends Component {
  handleLike = (e) => {
    e.preventDefault();

    const {dispatch, tweet, authedUser} = this.props
    this.props.dispatch(handleToggleTweet({
      //recap: 这里可以直接写authedUser，但是不能直接写tweet.id
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser,
    }))
  }

  toParent = (e, id) => {
    e.preventDefault();
    //todo: redirect to parent tweet
  }

  render () {
    const {tweet}  = this.props

    if (tweet === null) {
      return <p>This tweet doesn't exist!</p>
    }

    const {
      name, timestamp, text, avatar, likes, replies, hasLiked, parent
    } = tweet

    return (
      <div className="tweet">
        <img
          src={avatar}
          alt={`avatar of ${name}`}
          className="avatar"
        />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button 
                className="replying-to" 
                onClick={(e) => this.toParent(e, parent.id)}
              >Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true
                ? <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
                : <TiHeartOutline className="tweet-icon" />
              }
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({tweets, users, authedUser}, {id}) {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet)