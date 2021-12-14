import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './component/Product'; 
import './App.css';

function App() {
  const [product, setProduct] = useState([]);
  const [item, setItem] = useState('');
  useEffect(() => {
    axios
      .get("https://streamr.network/api/v1/products?publicAccess=true")
      .then (response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  var selectProduct = product.sort((a,b) => {
      return a.name.localeCompare(b.name)}).map(item => {
      return (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>)
    })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        <select onChange={({target}) => setItem(target.value)}>
          {selectProduct}
        </select>
        <Product item={item} product={product}/>
      </header>
    </div>
  );
}

export default App;
