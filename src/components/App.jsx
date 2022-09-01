import React from 'react';
import "./App.css";
import Nav from "./navBar/Nav";
import ItemListContainer from './itemListContainer/ItemListContainer';
import JuegoList from './juegos/juegoListContainer/JuegoListContainer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer mensaje="Bienvenido a Game Place"/>
      <JuegoList></JuegoList>
    </div>
  );
}

export default App;
