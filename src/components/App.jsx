import React from 'react';
import "./App.css";
import Nav from "./navBar/Nav";
import ItemListContainer from './itemListContainer/ItemListContainer';
import Juego from './juegos/juegoContainer/JuegoContainer.jsx';

function App() {
  const juego1 = {nombre: 'Minecraft', descripcion: 'Minecraft, como su nombre indica, es una combinación entre ir creando minas y picando en ellas para conseguir los elementos necesarios para mejorar tu equipo y posibilidades. El modo creativo es radicalmente diferente, si bien la base del juego sigue siendo la misma.',url: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg", stock: 8}
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer mensaje="Bienvenido a Game Place"/>
      <Juego/>
    </div>
  );
}

export default App;
