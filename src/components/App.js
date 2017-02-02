import React, { Component } from 'react'
import { Link } from 'react-router'
export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <nav>
        <h1>Single Page App</h1>
        <ul className='header'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/stuff'>Stuff</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <main className='content'>
        {this.props.children}
      </main>
    </div>
  }
}
