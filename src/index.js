import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // Componente principal
import 'bootstrap/dist/css/bootstrap.min.css';  // Importación de Bootstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Se inyecta en el div con id="root" en index.html
);
