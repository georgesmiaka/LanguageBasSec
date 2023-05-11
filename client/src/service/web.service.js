import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const userSession = require("../controller/session.controller");

function WebService() {
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
            {user ? <NavDropdown title="Admin" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/info">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/addmovie">
                Add movie
              </NavDropdown.Item>
              <NavDropdown.Item href="/delmovie">
                Delete movie
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signout">
                Signout
              </NavDropdown.Item>
            </NavDropdown> : <div></div>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebService;