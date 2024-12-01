import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Card, Button, Pagination, Modal } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai'; // Icono de ojo
import './css/home.css';

const productos = [
    { id: 1, nombre: 'Producto Licenciado 1', precio: '$25.00', descripcion: 'Descripción detallada del producto 1. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 2, nombre: 'Producto Licenciado 2', precio: '$35.00', descripcion: 'Descripción detallada del producto 2. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 3, nombre: 'Producto Licenciado 3', precio: '$20.00', descripcion: 'Descripción detallada del producto 3. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 4, nombre: 'Producto Licenciado 4', precio: '$40.00', descripcion: 'Descripción detallada del producto 4. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 5, nombre: 'Producto Licenciado 5', precio: '$30.00', descripcion: 'Descripción detallada del producto 5. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 6, nombre: 'Producto Licenciado 6', precio: '$28.00', descripcion: 'Descripción detallada del producto 6. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 7, nombre: 'Producto Licenciado 7', precio: '$50.00', descripcion: 'Descripción detallada del producto 7. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 8, nombre: 'Producto Licenciado 8', precio: '$18.00', descripcion: 'Descripción detallada del producto 8. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 9, nombre: 'Producto Licenciado 9', precio: '$22.00', descripcion: 'Descripción detallada del producto 9. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 10, nombre: 'Producto Licenciado 10', precio: '$15.00', descripcion: 'Descripción detallada del producto 10. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 11, nombre: 'Producto Licenciado 11', precio: '$38.00', descripcion: 'Descripción detallada del producto 11. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 12, nombre: 'Producto Licenciado 12', precio: '$45.00', descripcion: 'Descripción detallada del producto 12. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 13, nombre: 'Producto Licenciado 13', precio: '$60.00', descripcion: 'Descripción detallada del producto 13. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 14, nombre: 'Producto Licenciado 14', precio: '$20.00', descripcion: 'Descripción detallada del producto 14. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' },
    { id: 15, nombre: 'Producto Licenciado 15', precio: '$55.00', descripcion: 'Descripción detallada del producto 15. Este producto tiene características únicas que lo hacen perfecto para...', imagen: 'https://via.placeholder.com/150' }
];

const Home = () => {
    const [paginaActual, setPaginaActual] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  
    const productosPorPagina = 4;
  
    const indexOfLastProducto = paginaActual * productosPorPagina;
    const indexOfFirstProducto = indexOfLastProducto - productosPorPagina;
    const productosActuales = productos.slice(indexOfFirstProducto, indexOfLastProducto);
  
    const handlePageChange = (pageNumber) => setPaginaActual(pageNumber);
  
    const handleShowModal = (producto) => {
      setProductoSeleccionado(producto);
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      setProductoSeleccionado(null);
    };
  
    const totalPages = Math.ceil(productos.length / productosPorPagina);
    const paginationItems = Array.from({ length: totalPages }, (_, i) => (
      <Pagination.Item
        key={i + 1}
        active={i + 1 === paginaActual}
        onClick={() => handlePageChange(i + 1)}
      >
        {i + 1}
      </Pagination.Item>
    ));
  
    return (
        <Container className="home-container my-5">
          {/* Sección de bienvenida */}
          <Row>
            <Col md={12}>
              <div className="welcome-section bg-gradient-primary text-white p-5 rounded shadow">
                <h1 className="text-center">Bienvenido a Softherium</h1>
                <p className="text-center">
                  Explora nuestra selección de productos exclusivos y con licencia
                  oficial.
                </p>
              </div>
              <Carousel fade className="mt-4 shadow custom-carousel">
                {[...Array(3)].map((_, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 custom-carousel-img"
                      src={`https://via.placeholder.com/1200x400?text=Imagen+${index + 1}`}
                      alt={`Imagen ${index + 1}`}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded">
                      <h3>Promoción {index + 1}</h3>
                      <p>Detalles de la promoción.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
    
          {/* Sección de productos */}
          <Row className="my-5">
            <Col md={12}>
              <h2 className="text-center mb-4">Productos en Oferta</h2>
            </Col>
          </Row>
    
          <Row>
            {productosActuales.map((producto) => (
              <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="shadow-sm border-0 h-100 product-card">
                  <Card.Img
                    variant="top"
                    src={producto.imagen}
                    className="rounded-top custom-card-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-truncate">{producto.nombre}</Card.Title>
                    <Card.Text className="text-muted">{producto.descripcion.slice(0, 50)}...</Card.Text>
                    <h5 className="text-primary">{producto.precio}</h5>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <Button variant="primary" className="btn-sm">
                        Comprar
                      </Button>
                      <Button
                        variant="outline-info"
                        className="btn-sm"
                        onClick={() => handleShowModal(producto)}
                      >
                        <AiOutlineEye /> Detalles
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
    
          {/* Paginación */}
          <Row className="my-4">
            <Col md={12}>
              <Pagination className="justify-content-center shadow-sm">{paginationItems}</Pagination>
            </Col>
          </Row>
    
          {/* Modal de detalles */}
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>{productoSeleccionado?.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={productoSeleccionado?.imagen}
                alt={productoSeleccionado?.nombre}
                className="img-fluid mb-3"
              />
              <p>{productoSeleccionado?.descripcion}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
              </Button>
              <Button variant="primary">Añadir al Carrito</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      );
  };
  
  export default Home;