import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
  return (

    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link className='text-decoration-none text-dark' to='/'>Master Chef USA</Link>
        </Navbar.Brand>
        <Nav className="d-flex justify-content-between">
          <Nav.Link>
            <Link className='text-decoration-none text-dark' to='/'>Home</Link>
          </Nav.Link>
          <Nav.Link>
            
            <Link className='text-decoration-none text-dark' to='/blog'>Blog</Link>
          </Nav.Link>

          <Nav.Link>
         
            {
                    user? <span className='text-primary'>
                      <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 inline-block w-12 h-12 ">
  <img title={user.displayName}
                    src={user?.photoURL}
                    alt=""
                  /> 
  </div>
</div>
                       <button onClick={handleLogout}> Log out</button></span>: <Link className='text-decoration-none text-dark' to='#'>Profile</Link>
                }

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