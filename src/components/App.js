import React, { Component } from 'react'

export default class App extends Component {

  render () {
    return <div>
      <h1>Simple SPA</h1>
      <ul className='header' />
      <li>Home</li>
      <li>Stuff</li>
      <li>Contact</li>
      <div className='content' />
    </div>
  }
}
