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
            Welcome to T-Blog, the digital sanctuary where stories unfold. Immerse yourself in a world of captivating narratives, insightful articles, and thought-provoking
             discussions. From technology to arts, culture to personal growth, T-Blog offers a diverse tapestry of content to satisfy your curiosity. Join our vibrant community, where your voice matters 
            and your ideas find a home. Discover inspiration, broaden your horizons, and embark on a journey of knowledge and connection at T-Blog.
            </p>
            <a href="https://www.fiverr.com/webdoctor_labs" className="btn btn-warning btn-lg">Learn More</a>
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
