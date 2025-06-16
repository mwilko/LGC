// Router
import { Link } from 'react-router-dom';
// Icons
import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';
// Logo
import lgcTrans from 'assets/images/lgc_logo_new_trans.png';
// Icons
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as LinkedIn } from 'assets/icons/linkedin.svg';
// Styles
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Footer Header */}
                <header className="footer-header">
                    <div className="fh-line"></div>
                    <div className="fh-logo">
                        <img src={lgcTrans} alt="Lincolnshire Game Company Logo" />
                    </div>
                    <div className="fh-line"></div>
                </header>

                {/* Footer Legend */}
                <p className="footer-legend">
                    “At Lincolnshire Game we ensure our produce is of the highest qualities to satisfy our customers. We produce the best game and related products in the East-Middlelands.”
                </p>

                {/* Footer Navigation */}
                <nav className="footer-nav">
                    <Link className="footer-link navbar-link" to='/'> Home </Link>
                    <Link className="footer-link navbar-link" to="/contact"> Contact Us </Link>
                    <Link className="footer-link navbar-link" to='/shop/all'> Shop </Link>
                </nav>

                {/* Footer Developed By */}
                <div className="footer-developed-by">
                    <p>© 2025 Lincolnshire Game Company — Established 2013</p>
                </div>

                {/* Footer Socials */}
                <div className="footer-socials">
                    <Facebook className="facebook-icon" /> 
                    
                </div>
            </div>
        </footer>
    )
}
