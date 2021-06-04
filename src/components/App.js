import React, { Component } from 'react'
import {handleInitinalData} from '../actions/shared'
import {connect}  from 'react-redux'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitinalData())
  }
  render() {
    return (
      <div>
        {
          this.props.loading === true
            ? "loading"
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