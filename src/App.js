import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import Home from './components/Home';  // Componente de la página de inicio
import NuestroEquipo from "./components/NuestroEquipo";
import Contactanos from "./components/contactanos";

const App = () => {
  return (
    <Router>
      <NavbarComponent />  {/* Barra de navegación */}
      
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página de inicio */}
        <Route path="/contactanos" element={<Contactanos />} /> {/* Página de Contactanos */}
        <Route path="/equipo" element={<NuestroEquipo />} /> {/* Página de Nuestro Equipo */}
      </Routes>

      <FooterComponent />  {/* Pie de página */}
    </Router>
  );
};

export default App;
