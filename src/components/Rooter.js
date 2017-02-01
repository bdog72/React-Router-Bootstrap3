import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Home from './Home'
import App from './App'
export default class Rooter extends Component {
  render () {
    return <Router>
      <Route path='/' component={App} />
      <IndexRoute component={Home} />
    </Router>
  }
}
