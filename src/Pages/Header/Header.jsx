import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand>Master Chef USA</Navbar.Brand>
            <Nav className="d-flex justify-content-between">
              <Nav.Link>
                <Link className='text-decoration-none text-dark' to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link>
              <Link className='text-decoration-none text-dark' to='/blog'>Blog</Link>
              </Nav.Link>
              <Nav.Link>
              <Link className='text-decoration-none text-dark' to='/profile'>Profile</Link>
              </Nav.Link>
              <Nav.Link>
              <button class="btn btn-outline-warning">
              <Link className='text-decoration-none text-dark' to='/login'>Login</Link>
              </button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    );
};

export default Header;