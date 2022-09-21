import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Nav from "./navBar/Nav";
import JuegoListContainer from './juegos/juegoListContainer/JuegoListContainer';
import JuegoDetailContainer from './juegoDetailContainer/ItemDetailContainer'
import About from './about/About'
import Contact from './contact/Contact'
import CartProvider from '../context/CartContext';
import Cart from './Cart/Cart';

function App() {
  return (
    <CartProvider className="App">
      <Nav />
      <Routes>
        <Route path="/" element={
          <div className='welcomeContainer'>
            <h1 className="main-title">Bienvenido a Game Place</h1>
            <img src="https://i.pinimg.com/originals/99/cd/09/99cd0925c516b5d0a740dffd03c3e0df.gif" alt="inicio" />
          </div>} />
        <Route path='/juegos' element={
          <JuegoListContainer />
        } />
        <Route path='/about' element={
          <About />
        } />
        <Route path='/contact' element={
          <Contact />
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
        <Route path="*" element={<h1>ERROR! verifique la URL</h1>} />
      </Routes>
    </CartProvider>
  );
}

export default App;
