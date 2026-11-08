import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import lgcLogo from 'assets/images/lgc_logo_new_trans.png';
import { ReactComponent as HamburguerIcon } from 'assets/icons/hamburguer-menu.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/x.svg';
import './NavBar.css';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const moreRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    if (moreRef.current) moreRef.current.open = false;
  }, [location]);

  return (
    <header
      className="navbar"
      onKeyDown={(event) => {
        if (event.key !== 'Escape') return;
        if (moreRef.current?.open) {
          moreRef.current.open = false;
          summaryRef.current?.focus();
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" aria-label="The Lincolnshire Game Company home">
          <img src={lgcLogo} alt="" />
          <span>Lincolnshire<span>Game Company</span></span>
        </Link>

        <button
          ref={menuButtonRef}
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(open => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          {isMenuOpen ? <CloseIcon aria-hidden="true" /> : <HamburguerIcon aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`navbar-nav${isMenuOpen ? ' navbar-nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <NavLink className="navbar-link" to="/" end>Home</NavLink>
          <NavLink className="navbar-link" to="/shop/all">Our Produce</NavLink>
          <NavLink className="navbar-link" to="/about-us">Our Story</NavLink>
          <details
            ref={moreRef}
            className="navbar-more"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                event.currentTarget.open = false;
              }
            }}
          >
            <summary ref={summaryRef} className="navbar-link">More</summary>
            <div className="navbar-dropdown">
              <Link to="/awards">Awards & Recognition</Link>
              <Link to="/partnerships">Partnerships</Link>
              <Link to="/blogs">Stories & Insights</Link>
              <Link to="/sponsors">Sponsors</Link>
            </div>
          </details>
          <NavLink className="navbar-link navbar-link--contact" to="/contact">Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
};
