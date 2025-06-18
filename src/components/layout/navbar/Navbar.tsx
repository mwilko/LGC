import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import lgcLogo from 'assets/images/lgc_logo_new_trans.png';
import { ReactComponent as HamburguerIcon } from 'assets/icons/hamburguer-menu.svg';
import { ReactComponent as DropdownItemIcon } from 'assets/icons/arrow-right-circle.svg';
import { HamburguerMenuCanvas } from './components/HamburguerMenuCanvas/HamburguerMenuCanvas';
import { LSModalContext } from 'contexts/LSModalContext';
import './NavBar.css';

export const NavBar = () => {
  const [hamburguerMenuOpen, setHamburguerMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { openModal } = useContext(LSModalContext);

  const toggleHamburguerMenu = () => setHamburguerMenuOpen(prev => !prev);
  const openDropdown = () => setDropdownOpen(true);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <>
      <HamburguerMenuCanvas 
        hamburguerMenuOpen={hamburguerMenuOpen} 
        closeHamburguerMenu={() => setHamburguerMenuOpen(false)} 
      />
      <header className="navbar">
        <div className="navbar-container">
          <div className="nc-left">
            <Link to='/'>
              <img src={lgcLogo} alt="Lincolnshire Game Company Logo" />
            </Link>
          </div>

          <nav className={`nc-right ${hamburguerMenuOpen ? 'open' : ''}`}>
            <Link className="navbar-link nbl-section" to='/'>Home</Link>

            <div 
              onMouseEnter={openDropdown} 
              onMouseLeave={closeDropdown}
            >
              <button className="navbar-link nbl-section nbl-cat">
                Categories
              </button>

              <div className="transparent-div"></div>

              <div 
                className="cat-dropdown-menu" 
                style={dropdownOpen ? { opacity: '1', pointerEvents: 'all' } : {}}
              >
                <ul>
                  <li className="cdm-item" onClick={closeDropdown}>
                    <Link to='/shop/venison' className="cdm-item-link">
                      <DropdownItemIcon className="dd-item-icon" />
                      Venison
                    </Link>
                  </li>
                  <li className="cdm-item" onClick={closeDropdown}>
                    <Link to='/shop/poultry' className="cdm-item-link">
                      <DropdownItemIcon className="dd-item-icon" />
                      Poultry
                    </Link>
                  </li>
                  <li className="cdm-item" onClick={closeDropdown}>
                    <Link to='/shop/game-birds' className="cdm-item-link">
                      <DropdownItemIcon className="dd-item-icon" />
                      Game Birds
                    </Link>
                  </li>
                  <li className="cdm-item" onClick={closeDropdown}>
                    <Link to='/shop/specialty' className="cdm-item-link">
                      <DropdownItemIcon className="dd-item-icon" />
                      Specialty Items
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link className="navbar-link nbl-section" to='/shop/all'>Shop</Link>
            <Link className="navbar-link nbl-section" to='/about'>About</Link>

            <button className="navbar-link hamburguer-menu" onClick={toggleHamburguerMenu}>
              <HamburguerIcon className="hamburguer-icon" />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
