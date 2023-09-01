import { 
  Container, 
  Nav, 
  Navbar as NavbarBS, 
  Offcanvas
} from "react-bootstrap";

import { CartWidget } from './CartWidget';
import { MenuIcon } from "./Icons";
import '../assets/styles/main.css';
import { useState } from "react";
import { NavLink } from 'react-router-dom';


export const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <NavbarBS bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarBS.Brand href="/">4everStore</NavbarBS.Brand>
        <Nav className="me-auto vertical-menu__container">
          
          <Nav.Link to = "/" as = { NavLink }>
            ALL
          </Nav.Link>
          <Nav.Link to = "/category/women's clothing" as = { NavLink }>
            WOWEN
          </Nav.Link>
          <Nav.Link to = "/category/men's clothing" as = { NavLink }>
            MEN
          </Nav.Link>
          <Nav.Link to = "/category/electronics" as = { NavLink }>
            ELECTRONIC
          </Nav.Link>
          <Nav.Link to = "/category/jewelery" as = { NavLink }>
            JEWELERY
          </Nav.Link>
        </Nav>
        <div>
          <CartWidget />
          <button 
            className = "button menu-button"
            onClick = { handleShow }>
              <MenuIcon/>
          </button>
        </div>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <NavbarBS.Brand href = "/">4everStore</NavbarBS.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="me-auto">
          
          <Nav.Link to = "/" as = { NavLink }>
            ALL
          </Nav.Link>
          <Nav.Link to = "/category/women's clothing" as = { NavLink }>
            WOWEN
          </Nav.Link>
          <Nav.Link to = "/category/men's clothing" as = { NavLink }>
            MEN
          </Nav.Link>
          <Nav.Link to = "/category/electronics" as = { NavLink }>
            ELECTRONIC
          </Nav.Link>
          <Nav.Link to = "/category/jewelery" as = { NavLink }>
            JEWELERY
          </Nav.Link>
        </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </NavbarBS>
   
  )
}
