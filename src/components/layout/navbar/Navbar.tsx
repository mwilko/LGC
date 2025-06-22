import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import lgcLogo from 'assets/images/lgc_logo_new_trans.png';
import { ReactComponent as HamburguerIcon } from 'assets/icons/hamburguer-menu.svg';
import { ReactComponent as DropdownItemIcon } from 'assets/icons/arrow-right-circle.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/x.svg';
import { HamburguerMenuCanvas } from './components/HamburguerMenuCanvas/HamburguerMenuCanvas';
import { LSModalContext } from 'contexts/LSModalContext';
import './NavBar.css';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { openModal } = useContext(LSModalContext);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  
  // Close menu when route changes
  useEffect(() => {
    closeMenu();
    setDropdownOpen(false);
  }, [location]);

  return (
    <>
      <HamburguerMenuCanvas 
        hamburguerMenuOpen={isMenuOpen} 
        closeHamburguerMenu={closeMenu} 
      />
      
      <header className="navbar">
        <div className="navbar-container">
          <div className="nc-left">
            <Link to='/' onClick={closeMenu}>
              <img src={lgcLogo} alt="Lincolnshire Game Company Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link className="navbar-link" to='/'>Home</Link>
            <Link className="navbar-link" to='/shop/all'>Shop</Link>
            <Link className="navbar-link" to='/about-us'>About</Link>

            <div 
              className="dropdown-container"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="navbar-link dropdown-trigger">
                More
              </button>

              <div 
                className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}
              >
                <Link to='/awards' className="dropdown-item">
                  <DropdownItemIcon className="dropdown-icon" />
                  Awards & Recognition
                </Link>
                <Link to='/partnerships' className="dropdown-item">
                  <DropdownItemIcon className="dropdown-icon" />
                  Partnerships
                </Link>
                <Link to='/blogs' className="dropdown-item">
                  <DropdownItemIcon className="dropdown-icon" />
                  Blogs
                </Link>
                <Link to='/Sponsors' className="dropdown-item">
                  <DropdownItemIcon className="dropdown-icon" />
                  Sponsors
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <CloseIcon className="hamburger-icon" />
            ) : (
              <HamburguerIcon className="hamburger-icon" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link className="mobile-nav-link" to='/' onClick={closeMenu}>Home</Link>
            <Link className="mobile-nav-link" to='/shop/all' onClick={closeMenu}>Shop</Link>
            <Link className="mobile-nav-link" to='/about-us' onClick={closeMenu}>About</Link>
            
            <div className="mobile-dropdown">
              <button 
                className="mobile-nav-link dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                More
              </button>
              
              <div className={`mobile-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <Link to='/awards' className="mobile-dropdown-item" onClick={closeMenu}>
                  Awards & Recognition
                </Link>
                <Link to='/partnerships' className="mobile-dropdown-item" onClick={closeMenu}>
                  Partnerships
                </Link>
                <Link to='/blogs' className="mobile-dropdown-item" onClick={closeMenu}>
                  Blogs
                </Link>
                <Link to='/Sponsors' className="mobile-dropdown-item" onClick={closeMenu}>
                  Sponsors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}