import { useEffect } from 'react';
import './Contact.css';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="contact-overlay">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>
            Have questions or want to work with us? Fill out the form below. <br />
            Prefer to give us a call? (+44) 1205 822882
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-group">
              <input 
                type="text" 
                id="name"
                placeholder="Your Name" 
                required 
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="contact-form-group">
              <input 
                type="email" 
                id="email"
                placeholder="Your Email" 
                required 
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="contact-form-group">
              <textarea 
                id="message"
                placeholder="Your Message" 
                rows={6} 
                required 
              />
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="contact-submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
