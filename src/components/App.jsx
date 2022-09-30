import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Nav from "./navBar/Nav";
import JuegoListContainer from './juegos/juegoListContainer/JuegoListContainer';
import JuegoDetailContainer from './juegoDetailContainer/ItemDetailContainer'
import CartProvider from '../context/CartContext';
import Cart from './Cart/Cart';
import Checkout from './checkout/Checkout';
import Home from './Home/Home';

function App() {
  return (
    <CartProvider className="App">
      <Nav />
      <Routes>
        <Route path="/" element={
          <Home/>} />
        <Route path='/juegos' element={
          <JuegoListContainer />
        } />
        <Route path='/item/:id' element={
          <JuegoDetailContainer />
        } />
        <Route path='juegos/:idcat' element={
          <JuegoListContainer />
        } />
        <Route path='/cart' element={
          <Cart/>
        } />
        <Route path='/checkout' element={
          <Checkout/>
        } />
        <Route path="*" element={<h1>ERROR! verifique la URL</h1>} />
      </Routes>
    </CartProvider>
  );
}

export default App;
