import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'

// const products = [{

//   title: "Hair dryer",
//   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQknoLyOgLR_nXRr4QdHX_fPav6TALbY0LWg&usqp=CAU",
//   price: 35.97,
//   category: "Beauty",
//   description: "Need something that will get rid of frizz, soften your hair, and won't break the budget? This hair dryer checks all your boxes with its negative ionic function, meaning your hair won't attract static, and nozzle and diffuser attachment for styling — all that for less than €40"
// },{
//   title: "Comb",
//   image: "data:image/jpeg;base64,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",
//   price: 34.52,
//   category: "Beauty",
//   description: "Need something that will get rid of frizz, soften your hair, and won't break the budget? This hair dryer checks all your boxes with its negative ionic function, meaning your hair won't attract static, and nozzle and diffuser attachment for styling — all that for less than €40"
// },{
//   title: "Mirror",
//   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjbmiWRMFsWY6dkFBp05_WbFSqmpWJ_fuA0Q&usqp=CAU",
//   price: 97.50,
//   category: "Beauty",
//   description: "Need something that will get rid of frizz, soften your hair, and won't break the budget? This hair dryer checks all your boxes with its negative ionic function, meaning your hair won't attract static, and nozzle and diffuser attachment for styling — all that for less than €40"
// },{
//   title: "Make-up stand",
//   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw9JBd6iV0-yP7EZH2OSD9uXVecfZtz3ANSg&usqp=CAU",
//   price: 88.98,
//   category: "Beauty",
//   description: "Need something that will get rid of frizz, soften your hair, and won't break the budget? This hair dryer checks all your boxes with its negative ionic function, meaning your hair won't attract static, and nozzle and diffuser attachment for styling — all that for less than €40"
// }]



export default class ProductList extends Component {
  state = {
    products: [],
    productSearchValue: "",
  }

  fetchProducts = () =>(
    axios.get("https://fakestoreapi.com/products")
    .then(response => this.setState({products: response.data}))
  )

  searchProductHandler = (event) => (
    this.setState({productSearchValue: event.target.value.toLowerCase()})
  )

  componentDidMount() {
    this.fetchProducts()
  }

  render() {
    return (
      <div>
      <form>
        <label htmlFor = "searchbar"><h3>Find your product...</h3></label> 
        <input id= "searchbar" onChange={this.searchProductHandler} />
      </form>
      <div className = "product-list">
        {this.state.products.filter(product => product.title.toLowerCase().includes(this.state.productSearchValue)).map(product => (
          <Product {...product}/>
        ))}
      </div>
      </div>
    )
  }
}
