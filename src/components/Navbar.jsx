import { useState } from 'react';
import { Container, Nav, Navbar as NavbarBS} from "react-bootstrap";
import { CartWidget } from './CartWidget';


export const Navbar = () => {

  const [cartQuantity, setCartQuantity] = useState(1);

  return (

    <NavbarBS bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarBS.Brand href="#home">Pokelan</NavbarBS.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" >
            Home
          </Nav.Link>
          <Nav.Link href="/store" >
            Store
          </Nav.Link>
          <Nav.Link href="/about" >
            About
          </Nav.Link>
        </Nav>
        <CartWidget cartQuantity = { cartQuantity }/>
      </Container>
    </NavbarBS>
   
  )
}
