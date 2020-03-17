import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import { NavigationSpan } from '../../styles/styledComponents/Navigation/NavigationSpan';

const Navigation = props => {
  const { pathname } = props.location;
  return (
    <Navbar bg='dark' variant='dark'>
      <Nav.Link as='span'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <NavigationSpan isActive={pathname === '/'}>Home</NavigationSpan>
        </Link>
      </Nav.Link>
      <Nav className='mr-auto'>
        <Nav.Link as='span'>
          <Link to='/locations' style={{ textDecoration: 'none' }}>
            <NavigationSpan isActive={pathname === '/locations'}>
              Categories
            </NavigationSpan>
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default withRouter(Navigation);
