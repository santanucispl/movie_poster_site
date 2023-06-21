import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import ProductDetails from './component/Product_Details';

import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Home from './pages/Home';



function App() {



  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Cart' element={<Cart/>}></Route>
      <Route path='Product_Details/:title' element={<ProductDetails/>}></Route>
      <Route path='Shop' element={<Shop/>}></Route>
    </Routes>
    

    

    </>
  );
}

export default App;
