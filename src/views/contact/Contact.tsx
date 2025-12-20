import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Initialize EmailJS with your public key
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '');

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: 'orders@lincolnshiregame.co.uk',
          // to_email: 'mjswilkinson@outlook.com',
          subject: `LGC-Web: ${name}`,
          message: message,
          reply_to: email,
          from_name: name,
        }
      );

      setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage('Failed to send message. Please try again or call us at (+44) 1205 822882.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-overlay">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>
            Have questions or want to work with us? Fill out the form below. <br />
            Prefer to give us a call? (+44) 1205 822882
          </p>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder="Your Name" 
                required 
                disabled={isSubmitting}
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="contact-form-group">
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="Your Email" 
                required 
                disabled={isSubmitting}
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="contact-form-group">
              <textarea 
                id="message"
                name="message"
                placeholder="Your Message" 
                rows={6} 
                required 
                disabled={isSubmitting}
              />
              <label htmlFor="message">Your Message</label>
            </div>

            <button 
              type="submit" 
              className="contact-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <p className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
