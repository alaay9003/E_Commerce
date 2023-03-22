import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from "../../images/logo.png"
import { Nav } from 'react-bootstrap';
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import NavbarSearchHook from '../../hook/search/navbar-search-hook';

const NavbarLogin = () => {
          let word = ''
        if (localStorage.getItem('searchWord') != null)
            word = localStorage.getItem('searchWord')
  const [searchWord,onChangeSearch] = NavbarSearchHook()
  
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt ="" className='logo'/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
              <Form.Control
              value={word}
              onChange={onChangeSearch}
              type="search"
              placeholder="Search"
              className="me-2 text-center"
              aria-label="Search"
            />
            <Nav className="me-auto">
            <Nav.Link
              href="/login"
              className="nav-text d-flex mt-3 justify-content-center">
              <img src={login} className="login-img" alt="sfvs" />
              
              <p style={{ color: "white" }}>دخول</p>  
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}>
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarLogin