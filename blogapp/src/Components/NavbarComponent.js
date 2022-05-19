import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Form,Nav,FormControl,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';



export const NavbarComponent = () => {
    return ( 
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><span>Blog</span> <code>App</code></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link style={linkStyle} to="/">Home</Link>
            <Link  style={linkStyle} to="about">About</Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Link  style={linkStyle} to="articles-list">
              Articles
            </Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
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

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'green'
};

export default NavbarComponent;