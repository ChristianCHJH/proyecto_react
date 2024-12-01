import React from 'react';
import { Link } from 'react-router-dom';  // Importa Link de React Router

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Proyecto</Link>  {/* Redirige a la página de inicio */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>  {/* Redirige a la página de inicio */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/acerca">Acerca de</Link>  {/* Redirige a la página Acerca de */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>  {/* Redirige a la página Contacto */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
