import React, { Component } from 'react'
import {handleInitinalData} from '../actions/shared'
import {connect}  from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitinalData())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)