import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>Fake Shop</h1>
        <ul className= "nav-list">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}
