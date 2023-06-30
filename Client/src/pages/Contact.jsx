import React from 'react';
import '../Styles/Contact.css'


function Contact() {
  return (
    
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please fill out the form below:</p>
  
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
  
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to us using the following details:</p>
          <ul>
            <li>Email: example@example.com</li>
            <li>Phone: +1 123-456-7890</li>
            <li>Address: 123 ABC Street, XYZ City</li>
          </ul>
        </div>
  
        <div className="contact-image">
          <img src="https://www.ceylonassetmanagement.com/wp-content/uploads/2022/04/contact-us.jpg" alt="Contact" />
        </div>
      </div>
    );
  
}

export default Contact;
