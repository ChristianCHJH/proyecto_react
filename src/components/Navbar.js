import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          Softherium
        </NavLink>

        {/* Iconos al lado izquierdo para dispositivos pequeños */}
        <div className="d-flex d-lg-none align-items-center me-3">
          {/* Los iconos se muestran solo en pantallas pequeñas (d-lg-none) */}
          <NavLink
            to="/carrito"
            className="text-light fs-5 d-flex align-items-center"
            title="Carrito"
          >
            <AiOutlineShoppingCart />
          </NavLink>
          <NavLink
            to="/login"
            className="text-light fs-5 d-flex align-items-center"
            title="Iniciar Sesión"
          >
            <AiOutlineUser />
          </NavLink>
        </div>

        {/* Botón toggle para dispositivos pequeños */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
                to="/servicios"
              >
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
                to="/contactanos"
              >
                Contáctanos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
                to="/equipo"
              >
                Nuestro Equipo
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Iconos al lado derecho para pantallas grandes */}
        <div className="d-none d-lg-flex align-items-center ms-auto">
          <NavLink
            to="/carrito"
            className="text-light fs-5 d-flex align-items-center me-3"
            title="Carrito"
          >
            <AiOutlineShoppingCart />
          </NavLink>
          <NavLink
            to="/login"
            className="text-light fs-5 d-flex align-items-center"
            title="Iniciar Sesión"
          >
            <AiOutlineUser />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;