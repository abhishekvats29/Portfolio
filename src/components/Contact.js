import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h3>Contact Me</h3>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Phone Number" />
        <input type="email" placeholder="Address" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>

      <div className='info'><p>Have questions, feedback, or just want to say hello? Fill out the form below, and we'll get back to you as soon as possible!
      </p>
      <p>Your information is safe with us. We respect your privacy and will not share your details with third parties.
      </p></div>
    </section>
  );
};

export default Contact;
