import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from './Home'
import App from './App'
import Stuff from './Stuff'
import Contact from './Contact'
export default class Rooter extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/stuff' component={Stuff} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>
  }
}
