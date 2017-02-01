import React, { Component } from 'react'
// import Home from './Home'
import { Link } from 'react-router'
export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <h1>Simple SPA</h1>
      <ul className='header' />
      <li><Link to='/'>Home</Link></li>
      <li>Stuff</li>
      <li>Contact</li>
      <div className='content'>
        {this.props.children}
      </div>
    </div>
  }
}
