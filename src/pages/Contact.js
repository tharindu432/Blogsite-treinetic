import React, { useState } from 'react';
 //import the lottie animation
 import Lottie from 'react-lottie';

const Contact = () => {

  const animationData = require('../assets/contact.json'); 


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false); 

 

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation 
    if (!name || !email || !message) {
      setShowAlert('error'); // Show the alert
      return;
    }

    

    console.log('User input:', { name, email, message }); // Log user input

    setName('');
    setEmail('');
    setMessage('');
    setShowAlert('success');
  };

  const handleAlertClose = () => {
    setShowAlert(''); // Hide the alert
  };

  return (
  
    <div className="container mt-5  ">
      <br></br>
      <br>
      </br>
      <br></br>
       
      <div className="row align-items-center">
        <div className="col-md-6 order-1 order-md-2">
         
          <Lottie options={{ animationData, loop: true }} style={{ width: '45vw' }} />

          </div>

        <div className="col-md-6 order-2 order-md-1">
          <h2 className="text-center mb-5 ">Get in Touch</h2>

          {showAlert && (
            <div
              className={`alert alert-${showAlert === 'success' ? 'success' : 'danger'} alert-dismissible fade show`}
              role="alert"
            >
              <strong>
                {showAlert === 'success' ? 'Success!' : 'Oops!'}
              </strong>
              {showAlert === 'success' ? 'Your message has been sent.' : 'Fill all the fields.'}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={handleAlertClose}
              ></button>
            </div>
          )}


          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-warning">
              Send Message
            </button>
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;
