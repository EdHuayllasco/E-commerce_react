import '../assets/styles/components/navbar.css';
import { 
  Button,
  Container, 
  Image, 
  Nav, 
  Navbar as NavbarBS, 
  Offcanvas
} from "react-bootstrap";

import { CartWidget } from './CartWidget';
import { CustomIcon } from "./Icons";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import { useAuth } from '../context/AuthContext';
import { UserPopOver } from './UserPopOver';


export const Navbar = ({categories}) => {

  const {user, openModal } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (

    <NavbarBS className="shadow bg-white">
      <Container className="position-relative">
      <button 
            className = "menu-button p-1"
            onClick = { handleShow }>
              <CustomIcon name="menu"/>
      </button>
        <NavbarBS.Brand href="/">
          <Image src = {logo} style={{
            height: '50px'
          }}/>
        </NavbarBS.Brand>
        <Nav className="me-auto list-navlink">
          {
            categories.map(({description, id, key}) => (
              <Nav.Link key={id} to = {key == '' ? `/${key}` : `/category/${key}`} as = { NavLink }>
                {description}
              </Nav.Link>
            ))
          }
        </Nav>
        {
          user 
          ? 
            <div className="d-flex gap-2">
              <UserPopOver/>
              <CartWidget />
            </div>
          : <Button
              onClick={openModal}>
              Iniciar Sesión 
            </Button>
        } 
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <Image src = {logo} style={{
            height: '50px'
          }}/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="me-auto">
          {
            categories.map(({description, id, key}) => (
              <Nav.Link key={id} to = {key == '' ? `/${key}` : `/category/${key}`} as = { NavLink }>
                {description}
              </Nav.Link>
            ))
          }
        </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </NavbarBS>
   
  )
}
