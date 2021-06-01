import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation'
import Search from './Search'
import ProductImage from './ProductImage'
import ProductDetails from './ProductDetails'


 class Product extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      productItems: [],
      activeProductId:[]
    };
  }

  componentDidMount() {
    fetch("https://api.jsonbin.io/b/60b5c741b104de5acddb7fcf/2")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            productItems: result,
            activeProductId:result[0]
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  sendImageData = (e) => {
    this.setState({
      isLoaded: true
    });
    this.state.productItems.filter((element,index) => {
        if (element.img === e.id) {
            this.setState({
              activeProductId:element,
              isLoaded: false
            });
          
        }
    });
  }
    render() {
     var selectedData = this.state.activeProductId;
      return (
        <div>
          {this.state.isLoaded && <isLoaded enabled={this.state.isLoaded }/> }
          <Header/>
          <Navigation/>
          <Search/>
          <ProductImage productImage={selectedData}/>
          <ProductDetails productImage={selectedData} sendImageData={this.sendImageData}/>
        </div>
      );
    }
  }

export default Product;