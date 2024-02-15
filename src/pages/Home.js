import React from 'react';
import Lottie from 'react-lottie';
import { Col, Row, Container } from 'react-bootstrap'; // Use components from react-bootstrap

// Import your Lottie animation data
import animationData from '../assets/home.json'; 

const Home = () => {
  return (
    <section className="hero d-flex align-items-center min-vh-100">
      <Container>
        <Row className="row align-items-center">
          
          <Col md={7} className="d-flex flex-column justify-content-center gap-5">
            <h1 className="display-4 fw-bold text-muted ">Welcome to the <span className='text-warning'>T</span>-Blog</h1>
            <p className="lead pb-4">
              A compelling description of your website, briefly summarizing its
              core purpose and value proposition. Use captivating language to
              capture the user's attention.
            </p>
            <a href="#learn-more" className="btn btn-warning btn-lg">Learn More</a>
          </Col>
          {/* Right column: Lottie animation */}
          <Col md={5} className="d-flex justify-content-center">
            <Lottie
              options={{
                animationData,
                loop: true,
                autoplay: true,
              }}
              style={{ height: '550px', width: '500px' }} 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
