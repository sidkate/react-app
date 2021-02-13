import React from 'react';
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import ProductList from './components/product-list/product-list.component';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div>
        <hr />
        <ProductList></ProductList>
        <hr />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
