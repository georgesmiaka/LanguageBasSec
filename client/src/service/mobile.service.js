import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const userSession = require("../controller/session.controller");

function MobileService() {
    const [user, setUser] = useState(false);
    useEffect(() => {
        let userLogged = userSession.getSession();
        if (userLogged) {
            setUser(userLogged);
        }
    }, []);
    return (

        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img alt="logo" src="/assets/logo2.PNG" width="30" height="30"
            className="d-inline-block align-top"
          />{' '}
          Group46-project
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            {user ? <div></div> : <Nav.Link href="/Login">Login</Nav.Link>}
            {user ? <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/info">Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Timelinne
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Payment
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signout">
                Signout
              </NavDropdown.Item>
            </NavDropdown> : <div></div>}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}

export default MobileService;