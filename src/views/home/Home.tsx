import { useEffect, useRef, useState } from 'react';
// Logo
import Logo from 'assets/images/lgc_transparent.png';
// Router
import { Link, useLocation } from 'react-router-dom';
// Icons
import { ReactComponent as AwardIcon } from 'assets/icons/award.svg';
import { ReactComponent as AddCartIcon } from 'assets/icons/add-cart.svg';
// Images
import aboutUsImg from 'assets/images/sim_and_t.jpg';
// Components
import { ItemListContainer } from 'components/common/itemListContainer/ItemListContainer';
// Utils
import { isIOS } from 'utils/isIOS';
// Styles
import './Home.css';

export const Home = () => {
  const [loadingScreen, setLoadingScreen] = useState({
    loading: true,
    percentage: 0
  });

  const aboutUs = useRef<HTMLElement>(null);
  const location = useLocation();

  const scrollToAboutUs = () => aboutUs?.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    location.hash === '#about-us'
      ? scrollToAboutUs()
      : window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let loadingInterval = setInterval(() => {
      setLoadingScreen(prev => {
        const nextPercentage = prev.percentage + 1;
        if (nextPercentage >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
            setLoadingScreen({
              loading: false,
              percentage: 100
            });
          }, 750);
        }
        return { ...prev, percentage: nextPercentage };
      });
    }, 20);
    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div style={loadingScreen.loading ? {} : { opacity: '0', pointerEvents: 'none' }} className="home-loading">
        <div className="home-loading-content">
          <img src={Logo} alt="The Lincolnshire Game Company" />
          <span>{loadingScreen.percentage}%</span>
        </div>
      </div>

      {/* Home */}
      <div className="home">

        {/* Hero Section */}
        <section 
          style={isIOS() ? { backgroundAttachment: 'initial' } : {}}
          className="hero-section"
        >
          <div className="hs-greeting">
            <h1>Lincolnshire’s Finest Wild Game</h1>
            <Link className="button hsg-search-meats-btn" to='/shop/all'>Explore Our Produce</Link>
          </div>
        </section>

        {/* About Us Section */}
        <section ref={aboutUs} className="about-us-section">
          <div className="aus-grid">
            <img src={aboutUsImg} alt="Our Team in Lincolnshire" />
            <div className="aus-info">
              <h2>Our Heritage</h2>
              <p>At The Lincolnshire Game Company, we are passionate about bringing the finest wild game and poultry from the heart of Lincolnshire. We value sustainability, traceability, and tradition in every cut we offer.</p>
              <p>Since 2013, we’ve been a trusted name for chefs, restaurants, and families across the UK and Europe, delivering exceptional quality and service.</p>
              <Link className="button aus-btn" to='/about-us'>Discover Our Story</Link>
            </div>
          </div>
        </section>

        {/* Product Selections */}
        <section className="bestsellers-section">
          <div className="bs-title">
            <AwardIcon className="award-icon" />
            <h2>Our Signature Meats</h2>
          </div>
          <ItemListContainer category={'venison'} limit={true} />
          <Link className="button bs-btn" to='/shop/all'>View All Meats</Link>
        </section>
      </div>
    </>
  );
};
