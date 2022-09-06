import React from 'react';
import "./App.css";
import Nav from "./navBar/Nav";
import JuegoList from './juegos/juegoListContainer/JuegoListContainer';
import JuegoDetailContainer from './juegoDetailContainer/JuegoDetailContainer'


function App() {
  return (
    <div className="App">
      <Nav/>
      <h1 className = "main-title">Bienvenido a Game Place</h1>
      <JuegoList/>
      <JuegoDetailContainer/>
    </div>
  );
}

export default App;
