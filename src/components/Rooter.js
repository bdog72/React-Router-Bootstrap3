import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import App from './App'
export default class Rooter extends Component {
  render () {
    return <Router>
      <Route path='/' component={App} />
    </Router>
  }
}
