import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div className = "product-card">
        <h2>{this.props.title}</h2>
        <img src = {this.props.image} alt = {this.props.title} />
        <p><b>{this.props.category}</b></p>
        <em>€{this.props.price}</em>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
