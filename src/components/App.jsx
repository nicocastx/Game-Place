import React from 'react';
import "./App.css";
import Nav from "./Nav";
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer mensaje="Bienvenido a Game Place"/>
    </div>
  );
}

export default App;
