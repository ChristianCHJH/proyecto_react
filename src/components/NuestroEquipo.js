import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './css/NuestroEquipo.css';

const NuestroEquipo = () => {
  const teamMembers = [
    {
      name: "Jhoy Navarro",
      role: "CEO",
      image: "https://via.placeholder.com/150",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Jonathan Soto",
      role: "Desarrolladora Frontend",
      image: "https://via.placeholder.com/150",
      linkedin: "#",
      github: "https://github.com/Jhon3125",
    },
    {
      name: "Christian Jara",
      role: "Desarrollador Backend",
      image: "https://via.placeholder.com/150",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <Container className="my-8">
      <Row className="text-center mb-4">
        <Col>
          <h2>Nuestro Equipo</h2>
          <p>Conoce a las personas que hacen posible nuestro proyecto.</p>
        </Col>
      </Row>

      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="team-card shadow-lg">
              <Card.Img variant="top" src={member.image} className="team-img" />
              <Card.Body className="text-center">
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                <div className="d-flex justify-content-center mt-3 social-icons">
                  <Button
                    variant="link"
                    href={member.linkedin}
                    className="me-3 text-primary"
                  >
                    <FaLinkedin size={30} />
                  </Button>
                  <Button
                    variant="link"
                    href={member.github}
                    className="text-dark"
                  >
                    <FaGithub size={30} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NuestroEquipo;