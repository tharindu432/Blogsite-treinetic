import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

//social media icons
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaDribbble } from 'react-icons/fa';


import { RiSearchLine } from 'react-icons/ri'; 

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
       
        <Navbar.Brand as={Link} to="/">
          <span className="text-warning ms-md-3 fs-3">T-Blog</span>
        </Navbar.Brand>

     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

          {/* Navigation links */}
          <Nav>
            
            <Nav.Link as={Link} to="/" eventKey="1">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="2">
              About
            </Nav.Link>
           
            <Nav.Link as={Link} to="/blogs" eventKey="3">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey="4">
              Contact
            </Nav.Link>
            
          </Nav>

         
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">
              <RiSearchLine />
            </Button>
          </Form>

          {/* Social media icons */}
          <Nav className="ms-auto me-md-3 fs-4 ">
            <Nav.Link href="https://web.facebook.com/profile.php?id=61556539462073&mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank">
              <FaFacebook className="custom-hover text-light" />
            </Nav.Link>
            <Nav.Link href="https://www.github.com/tharindu432" target="_blank">
              <FaGithub className="custom-hover text-light" />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/webdoctor_labs" target="_blank">
              <FaInstagram className="custom-hover text-light" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/tharindu-chathuranga-ruwanpathirana-5917a520a/" target="_blank">
              <FaLinkedin className="custom-hover text-light" />
            </Nav.Link>
            <Nav.Link href="https://chathurangarp.tech" target="_blank">
              <FaDribbble className="custom-hover text-light" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;