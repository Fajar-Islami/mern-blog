import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CompNavbar = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <Link to='/blogs/home' className='text-white'>
            Home
          </Link>
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Link to='/blogs/addblog' className='text-white mr-3'>
            Tambah Blog
          </Link>
          <Link to='/blogs/about' className='text-white'>
            About
          </Link>
        </Nav>
        <Nav>
          <Nav.Link href='/blogs/regis' className='text-white'>
            Daftar
          </Nav.Link>
          <Nav.Link href='/blogs/login' className='text-white'>
            Login
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default CompNavbar;
