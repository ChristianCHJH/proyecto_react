import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <Container>
        <Row>
          {/* Sección: Sobre Nosotros */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Sobre Nosotros</h5>
            <p>
              Softherium es una tienda de licencias que proporciona soluciones para
              software como Windows, Office y mucho más. Confianza y calidad son
              nuestra prioridad.
            </p>
          </Col>

          {/* Sección: Enlaces */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-white text-decoration-none">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/contactanos" className="text-white text-decoration-none">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="/equipo" className="text-white text-decoration-none">
                  Nuestro Equipo
                </a>
              </li>
            </ul>
          </Col>

          {/* Sección: Redes Sociales */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Síguenos</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <AiFillInstagram />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Derechos Reservados */}
        <Row>
          <Col className="text-center">
            <p className="mb-3">
              &copy; 2024 Softherium. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
