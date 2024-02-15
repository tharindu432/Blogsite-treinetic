import React from 'react';
//import AboutUs from '../assets/about.png';

//for the svg animation
import Lottie from 'react-lottie';

//import team member card
import TeamMemberCard from '../components/TeamMemberCard';
 

const About = () => {
  const animationData = require('../assets/about.json'); 
  return (
    <div className="container-fluid px-5 pt-5 pb-3 bg-dark text-white">
      <div className="row row-cols-1 row-cols-md-2 g-4 align-items-center min-vh-100">
        <div className="col">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor magna. Suspendisse potenti. Praesent sapien massa, convallis a pharetra at, molestie nec lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor magna. Suspendisse potenti. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent sapien massa, convallis a pharetra at, molestie nec lacus. Duis mollis, est quis tristique posuere, tortor dolor tempor magna, eget eleifend dui nunc laoreet metus. Phasellus egestas tellus semper laoreet mattis.
          </p>
          <div>

          </div>
          <a href="#" className="btn btn-warning btn-lg mt-4 shadow-lg">Learn More</a>
        </div>
        <div className="col d-none d-md-block">
          {/* <img src={AboutUs} alt="About Us Image" className="img-fluid rounded-start shadow-lg" /> */}
          <Lottie options={{ animationData, loop: true }} style={{ width: '45vw' }} />
          
        </div>

          <h1 className="display-4 fw-bold">Our Team</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <TeamMemberCard
              name="John Doe"
              title="CEO"
              image="https://randomuser.me/api/portraits"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor."
            />
            <TeamMemberCard
              name="Jane Doe"
              title="CTO"
              image="https://randomuser.me/api/portraits"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor."
            />
            <TeamMemberCard
              name="John Smith"
              title="COO"
              image="https://randomuser.me/api/portraits"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor."
            />

      
        </div>
       
      
    </div>
  </div>
  );
};

export default About;