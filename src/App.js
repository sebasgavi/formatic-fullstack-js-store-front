import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import Catalog from './Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Catalog>
          <div className="alert alert-success">
            <img src="" alt=""/>
            Lorem ipsum dolor sit amet consectetur.
            <a href="/hjkl">Compra ya!!!</a>
          </div>
        </Catalog>
      </header>
    </div>
  );
}

export default App;
