import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Card, Button, Pagination, Modal } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai'; // Icono de ojo

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

    const handlePageChange = (pageNumber) => {
        setPaginaActual(pageNumber);
    };

    const handleShowModal = (producto) => {
        setProductoSeleccionado(producto);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setProductoSeleccionado(null);
    };

    // Paginación
    const totalPages = Math.ceil(productos.length / productosPorPagina);
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
            <Pagination.Item key={i} active={i === paginaActual} onClick={() => handlePageChange(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return (
        <Container className="my-5">
            {/* Sección de bienvenida con el carrusel */}
            <Row>
                <Col md={12}>
                    <div className="bg-primary text-white p-5 rounded">
                        <h1>Bienvenido a la tienda de productos con licencia</h1>
                        <p>Explora nuestra selección de productos exclusivos y con licencia oficial.</p>
                    </div>
                    {/* Carrusel de imágenes */}
                    <Carousel fade className="mt-5">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src="https://via.placeholder.com/1200x400"
                                alt="Imagen 1"
                            />
                            <Carousel.Caption>
                                <h3>Imagen 1</h3>
                                <p>Descripción de la imagen 1.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src="https://via.placeholder.com/1200x400"
                                alt="Imagen 2"
                            />
                            <Carousel.Caption>
                                <h3>Imagen 2</h3>
                                <p>Descripción de la imagen 2.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src="https://via.placeholder.com/1200x400"
                                alt="Imagen 3"
                            />
                            <Carousel.Caption>
                                <h3>Imagen 3</h3>
                                <p>Descripción de la imagen 3.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            {/* Sección de productos en oferta */}
            <Row className="my-5">
                <Col md={12}>
                    <h2 className="text-center">Productos en Oferta</h2>
                </Col>
            </Row>

            <Row>
                {productosActuales.map((producto) => (
                    <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={producto.imagen} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>{producto.descripcion.slice(0, 50)}...</Card.Text>
                                <h5>{producto.precio}</h5>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <Button variant="primary">Ver Producto</Button>
                                    <Button
                                        variant="outline-info"
                                        onClick={() => handleShowModal(producto)}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                    >
                                        <AiOutlineEye style={{ marginRight: '8px' }} /> Ver Detalles
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
                    <Pagination>{paginationItems}</Pagination>
                </Col>
            </Row>

            {/* Modal para mostrar descripción completa */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{productoSeleccionado?.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{productoSeleccionado?.descripcion}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Home;
