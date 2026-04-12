import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import contactHeroImg from '../../assets/images/showcase_game_fair.jpg';
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

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: 'orders@lincolnshiregame.co.uk',
          from_name: formData.get('name'),
          reply_to: formData.get('email'),
          message: formData.get('message'),
          subject: `Website Enquiry`,
        }
      );

      setSubmitMessage('Thank you for your enquiry. We aim to respond within one working day.');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('Unable to send message. Please call us on (+44) 1205 822882.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero"
       style={{ backgroundImage: `url(${contactHeroImg})` }}
       >
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Trade enquiries, orders, and general questions</p>
        </div>
      </section>

      {/* Content */}
      <section className="contact-content">
        <div className="corporate-container">
          <div className="contact-grid">

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="corporate-divider"></div>

              <p>
                For trade enquiries, product information, or general questions,
                please use the form or contact us directly.
              </p>

              <ul className="contact-details">
                <li><strong>Phone:</strong> (+44) 1205 822882</li>
                <li><strong>Email:</strong> orders@lincolnshiregame.co.uk</li>
                <li><strong>Response time:</strong> Phone response is immediate - email response within 2 working days</li>
              </ul>
            </div>

            {/* Form */}
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required disabled={isSubmitting} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required disabled={isSubmitting} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required disabled={isSubmitting} />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send Enquiry'}
              </button>

              {submitMessage && (
                <p className={`submit-message ${submitMessage.includes('Thank') ? 'success' : 'error'}`}>
                  {submitMessage}
                </p>
              )}
            </form>

          </div>
        </div>
      </section>
    </div>
  );
};