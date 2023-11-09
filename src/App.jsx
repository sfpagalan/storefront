import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';

import store from './store';
import './App.css'
import {Provider} from 'react-redux';

function App() {
  const storeName = 'Ryomazen';
  return (
  
    <Provider store ={store}>
      <Header storeName={storeName}/>
      <Categories />
      <Products />
      <Footer />
    </Provider>
  )
}

export default App