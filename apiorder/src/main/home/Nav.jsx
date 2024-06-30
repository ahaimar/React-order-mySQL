import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

export default function Navigation() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [customerId, setCustomerId] = useState(null);

  const handleLoginModalShow = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="#">Ruse</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="#">About</Nav.Link>
              <Nav.Link as={Link} to="#">Projects</Nav.Link>
              <Nav.Link as={Link} to="#">Contact</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Button variant="primary" onClick={handleLoginModalShow}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <LoginModal show={showLoginModal} handleClose={handleLoginModalClose} setCustomerId={setCustomerId} />
    </div>
  );
}
