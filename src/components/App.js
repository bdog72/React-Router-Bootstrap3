import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './Layout'
import Home from './Home'
import Stuff from './Stuff'
import Contact from './Contact'
export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/stuff' component={Stuff} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>
  }
}
