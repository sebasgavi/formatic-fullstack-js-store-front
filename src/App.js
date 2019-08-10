import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import Catalog from './Catalog/Catalog';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <Route path={['/', '/categoria/:catId']} exact 
            component={Catalog} />

          {/*<Catalog>
            <div className="alert alert-success">
              <img src="" alt=""/>
              Lorem ipsum dolor sit amet consectetur.
              <a href="/hjkl">Compra ya!!!</a>
            </div>
          </Catalog>*/}
        </header>
      </div>
    </Router>
  );
}

export default App;
