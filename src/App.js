import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';  // Barra de navegación
import FooterComponent from './components/Footer';  // Pie de página
import Home from './components/Home';  // Componente de la página de inicio
import About from './components/About';  // Componente de la página de "Acerca de"
import Contact from './components/Contact';  // Componente de la página de "Contacto"

const App = () => {
  return (
    <Router>
      <NavbarComponent />  {/* Barra de navegación */}
      
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página de inicio */}
        <Route path="/acerca" element={<About />} />  {/* Página "Acerca de" */}
        <Route path="/contacto" element={<Contact />} />  {/* Página de "Contacto" */}
      </Routes>

      <FooterComponent />  {/* Pie de página */}
    </Router>
  );
};

export default App;
