import React from 'react';
//import AboutUs from '../assets/about.png';

//for the svg animation
import Lottie from 'react-lottie';

//import team member card
import TeamMemberCard from '../components/TeamMemberCard';

//teame member images
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg'
import member3 from '../assets/member3.jpg'
import member4 from '../assets/member4.jpg'
import member5 from '../assets/member5.jpg'
 

const About = () => {
  const animationData = require('../assets/about.json'); 
  return (
    <div className="container-fluid px-5 pt-3 pb-1  text-dark">
      <br></br>
      <div className="row row-cols-1 row-cols-md-2 g-4 align-items-center min-vh-100">
        <div className="col">
          <h1 className="display-4 fw-bold text-muted">About Us</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor magna. Suspendisse potenti. Praesent sapien massa, convallis a pharetra at, molestie nec lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor magna. Suspendisse potenti. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent sapien massa, convallis a pharetra at, molestie nec lacus. Duis mollis, est quis tristique posuere, tortor dolor tempor magna, eget eleifend dui nunc laoreet metus. Phasellus egestas tellus semper laoreet mattis.
          </p>
          <div>

          </div>
          <a href="https://chathurangarp.tech/" className="btn btn-warning btn-lg mt-4 shadow-lg">Learn More</a>
        </div>
        <div className="col d-none d-md-block">
          {/* <img src={AboutUs} alt="About Us Image" className="img-fluid rounded-start shadow-lg" /> */}
          <Lottie options={{ animationData, loop: true }} style={{ width: '45vw' }} />
          
        </div>
        </div>
        <div>
        <h1 className="display-4 fw-bold text-muted">Our Team</h1>
        </div>

        
          <div className="row row-cols-2 row-cols-md-5 g-4">
            <TeamMemberCard
              name="John Doe"
              title="CEO"
              image={member1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor."
            />
            <TeamMemberCard
              name="Jane Doe"
              title="CTO"
              image={member2}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor."
            />

          
            <TeamMemberCard
              name="John Smith"
              title="COO"
              image={member3}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor."
            />
            <TeamMemberCard
              name="Jane Smith"
              title="CFO"
              image={member4}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor."
            />
            <TeamMemberCard
              name="Jane Smith"
              title="CFO"
              image={member5}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Integer nec odio praesent libero mollis interdum blandit eget dolor."
            />



      
        </div>
       
      
    </div>
  
  );
};

export default About;