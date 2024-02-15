import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

//social media icons
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer bg-dark py-4 text-white text-center text-md-left">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="text-white mb-3"><span className='text-warning'>T</span>-Blog</h3>
            <p className="text-white">
            Unleash your voice at T-Blog, where inspiration takes form.
            </p>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              
            </ul>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="text-white mb-3">Navigation</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
                <li>
                    <Link to="/blogs" className="text-white text-decoration-none">
                    Blogs
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white text-decoration-none">
                    Contact
                    </Link>
                </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="text-white mb-3">Connect with Us</h3>
            <div className="d-flex justify-content-center">
            <a href="https://web.facebook.com/profile.php?id=61556539462073&mibextid=ZbWKwL&_rdc=1&_rdr" className="me-3 text-white">
            <FaFacebook className="custom-hover text-light" />
              </a>
              <a href="https://www.github.com/tharindu432" className="me-3 text-white">
            <FaGithub className="custom-hover text-light" />
              </a>
              <a href="https://www.instagram.com/webdoctor_labs" className="me-3 text-white">
            <FaInstagram className="custom-hover text-light" />
              </a>
              <a href="https://www.linkedin.com/in/tharindu-chathuranga-ruwanpathirana-5917a520a/" className="me-3 text-white">
            <FaLinkedin className="custom-hover text-light" />
              </a>
                <a href="https://chathurangarp.tech" className="me-3 text-white">
            <FaDribbble className="custom-hover text-light" />
                </a>



            
            </div>
            <br></br>
            <p className="mb-0">
              © {new Date().getFullYear()} Tharindu Ruwanpathirana. All rights reserved.
            </p>
            </Col>
        </Row>
        </Container>
    </footer>
    );
}

export default Footer;
