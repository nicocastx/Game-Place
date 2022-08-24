import React from 'react';
import "./App.css";
import Nav from "./Nav";
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
