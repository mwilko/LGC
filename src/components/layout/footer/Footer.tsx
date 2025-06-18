import { Link } from 'react-router-dom';
import lgcTrans from 'assets/images/lgc_logo_new_trans.png';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as LinkedIn } from 'assets/icons/linkedin.svg';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={lgcTrans} alt="Lincolnshire Game Company Logo" className="footer-logo" />
            <p className="footer-mission">
              Delivering premium game products from the heart of Lincolnshire to customers across the UK and Europe.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <nav className="footer-nav">
              <Link className="footer-link" to='/'>Home</Link>
              <Link className="footer-link" to="/shop/all">Shop</Link>
              <Link className="footer-link" to="/about">About</Link>
              <Link className="footer-link" to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <p>Steyning Farm, Steyning Lane, Boston PE20 3NQ</p>
            <p>orders@lincolnshiregame.co.uk</p>
            <p>(+44) 01205 822882</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
            <a href="https://www.facebook.com/lincolnshiregameco/" target="_blank" rel="noopener noreferrer">
              <Facebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/thelincolnshiregamecompany/" target="_blank" rel="noopener noreferrer">
              <Instagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/tristan-kirk-ba44612/" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="social-icon" />
            </a>
          </div>
          
          <p className="copyright">© {new Date().getFullYear()} Lincolnshire Game Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}