import React from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import './css/Contactanos.css';

const Contactanos = () => {
  return (
    <Container fluid className="contactanos-bg py-5">
      <Row className="text-center mb-4">
        <Col>
          <h2 className="text-white mb-3">Contáctanos</h2>
          <p className="text-white mb-4">Estamos aquí para ayudarte. Si tienes alguna pregunta o sugerencia, por favor, no dudes en enviarnos un mensaje.</p>
        </Col>
      </Row>

      <Row>
        <Col md={8} lg={6} className="mx-auto">
          <div className="contact-form-card">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" required />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4 w-100">
                Enviar
              </Button>
            </Form>
          </div>

          {/* Optional success message */}
          <Alert variant="success" className="mt-4" style={{ display: 'none' }}>
            ¡Tu mensaje ha sido enviado exitosamente!
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactanos;
