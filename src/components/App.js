import React, { Component } from 'react'
import {handleInitinalData} from '../actions/shared'
import {connect}  from 'react-redux'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitinalData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {
          this.props.loading === true
            ? null
            : <Dashboard />
        }
      </div>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)