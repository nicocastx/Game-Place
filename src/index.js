import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//ordenar todo en una carpeta components
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter> 
      <App/>
    </BrowserRouter> 

);
