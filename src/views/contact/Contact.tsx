import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { products } from 'data/products';
import './Contact.css';
import contactHeroImg from '../../assets/images/showcase_game_fair.jpg';
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '');

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
  const [searchParams] = useSearchParams();
  const enquiryProduct = products.find(product => product.id === searchParams.get('product'));
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(enquiryProduct ? `Hello, I'd like to enquire about ${enquiryProduct.name}.\n\n` : '');
    setSubmitMessage('');
    setSubmitStatus('');
  }, [enquiryProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: 'orders@lincolnshiregame.co.uk',
          from_name: formData.get('name'),
          reply_to: formData.get('email'),
          message: formData.get('message'),
          subject: enquiryProduct ? `Website Enquiry: ${enquiryProduct.name}` : 'Website Enquiry',
        }
      );

      setSubmitMessage('Thank you for your enquiry. Our team will be in touch.');
      setSubmitStatus('success');
      formRef.current.reset();
      setMessage('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('Unable to send message. Please call us on (+44) 1205 822882.');
      setSubmitStatus('error');
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
        <div className="contact-container">
          <div className="contact-grid">

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>

              <p>
                For trade enquiries, product information, or general questions,
                please use the form or contact us directly.
              </p>

              <ul className="contact-details">
                <li><strong>Phone:</strong> <a href="tel:+441205822882">(+44) 1205 822882</a></li>
                <li><strong>Email:</strong> <a href="mailto:orders@lincolnshiregame.co.uk">orders@lincolnshiregame.co.uk</a></li>
                <li>For time-sensitive enquiries, please call our team.</li>
              </ul>
            </div>

            {/* Form */}
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit} aria-label="Enquiry form">
              {enquiryProduct && <p className="contact-product">Enquiring about <strong>{enquiryProduct.name}</strong></p>}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required disabled={isSubmitting} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required disabled={isSubmitting} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} value={message} onChange={event => setMessage(event.target.value)} required disabled={isSubmitting} />
              </div>

              <button type="submit" className="site-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send Enquiry'}
              </button>

              {submitMessage && (
                <p className={`submit-message ${submitStatus}`} role={submitStatus === 'error' ? 'alert' : 'status'}>
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