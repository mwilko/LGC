import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-overlay">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>Have questions or want to work with us? Fill out the form below. <br></br>Prefer to give us a call? (+44) 01205 822882</p>
          
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={6} required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
