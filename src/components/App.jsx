import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Nav from "./navBar/Nav";
import JuegoListContainer from './juegos/juegoListContainer/JuegoListContainer';
import JuegoDetailContainer from './juegoDetailContainer/ItemDetailContainer'
import About from './about/About'
import Contact from './contact/Contact'


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={
          <div className='welcomeContainer'>
            <h1 className="main-title">Bienvenido a Game Place</h1>
            <img src="https://i.pinimg.com/originals/99/cd/09/99cd0925c516b5d0a740dffd03c3e0df.gif" alt="inicio" />
          </div>} />
          <Route path='/category/juegos' element={
            <JuegoListContainer/>
          }/>
                    <Route path='/category/about' element={
            <About/>
          }/>
                    <Route path='/category/contact' element={
            <Contact/>
          }/>
          <Route path='/item/:id' element={
            <JuegoDetailContainer/>
          }/>
          <Route path="*" element={<h1>ERROR! verifique la URL</h1>} />
      </Routes>
    </div>
  );
}

export default App;
