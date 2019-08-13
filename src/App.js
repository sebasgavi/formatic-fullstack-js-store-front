import React, { useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import Catalog from './Catalog/Catalog';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProductDetails from './ProductDetails/ProductDetails';
import { urlBase } from './config.json';
import Register from './Register/Register';
import api from './utils/api';
import Login from './Login/Login';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

function App() {

  const [cartList, setCartList] = useState([]);

  return (
    <Router basename={urlBase}>
      <div className="App">

      <Route path="/" render={({ location, history }) => {
          return api.user.username ? 
            <p>Hola <strong>{api.user.username}</strong></p> :
            <nav>
          <Link to="?register">
            Regístrate
          </Link>
          <Link to="?login">
            Inicia sesión
          </Link>
        </nav>
        }} />

        <Cart list={cartList} setList={setCartList} />
        

        <Route path={['/', '/categoria/:catId', '/producto/:productId']} exact 
          render={({ match }) => <Catalog setCartList={setCartList} match={match} />} />

        <Route path="/producto/:productId" component={ProductDetails} />

        <Route path="/checkout" render={() => 
          <Checkout cartList={cartList} />} />

        <Route path="/" render={({ location, history }) => {
          if(/register/.test(location.search)){
            return <Register location={location} history={history} />;
          } else if(/login/.test(location.search)) {
            return <Login location={location} history={history} />;
          } else {
            return null;
          }
        }} />
      </div>
    </Router>
  );
}

export default App;
