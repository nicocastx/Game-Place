import React from 'react';
import "./App.css";
import Nav from "./navBar/Nav";
import ItemListContainer from './itemListContainer/ItemListContainer';
import Card from './cards/Card';

function App() {
  const juego1 = {nombre: 'Minecraft', descripcion: 'Hola xd lorem ipsum', stock: 8}
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer mensaje="Bienvenido a Game Place"/>
      <Card juego={juego1}/>
    </div>
  );
}

export default App;
