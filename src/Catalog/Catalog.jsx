import * as React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import api from '../utils/api';
import Categories from '../Categories/Categories';

class Catalog extends React.Component {

  constructor(props){
    super(props);

    console.log(this.props.match)

    this.state = {
      products: [],
      categories: [],
    };

    api.getProducts(this.props.match.params.catId)
      .then(res => {
        this.setState({
          products: res.body
        });
      });

    api.getCategories()
      .then(res => {
        this.setState({
          categories: res.body
        });
      });

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(event){
    console.log(event.target.value);
    api.getSearchProducts(event.target.value)
      .then(res => {
        this.setState({
          products: res.body
        });
      });
  }

  shouldComponentUpdate(nextProps){
    if(this.props.match.params.catId !== nextProps.match.params.catId){
      api.getProducts(nextProps.match.params.catId)
        .then(res => {
          this.setState({
            products: res.body
          });
        });
    }

    return true;
  }
  
  render(){
    return <div className="container mt-4">

      {this.props.children}

      <Categories list={this.state.categories} handleClick={this.handleCategoryClick} />

      <input type="text" className="form-control mb-4" 
        placeholder="Buscar productos..." 
        onInput={this.handleSearchInput} />

      <div className="row">
        {this.state.products.map(({ id, name, price, images }) => {
          return <div className="col-4" key={id}>
            <ProductCard name={name} price={price} images={images} />
          </div>;
        })}
      </div>
      
    </div>;
  }
}

export default Catalog;