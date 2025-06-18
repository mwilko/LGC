import { useEffect, useRef, useState } from 'react';
// Logo
import Logo from 'assets/images/lgc_logo_new_trans.png';
// Router
import { Link, useLocation } from 'react-router-dom';
// Icons
import { ReactComponent as AwardIcon } from 'assets/icons/award.svg';
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

  const [overlayOpacity, setOverlayOpacity] = useState(0.3);

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

  useEffect(() => {
    const hero = document.querySelector('.hero-section');

  function onScroll() {
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const maxOpacity = 1;  // full black
    const minOpacity = 0.3; // light black overlay

    // Map rect.bottom from [windowHeight, windowHeight * 0.2] to [0, 1]
    let progress = (windowHeight - rect.bottom) / (windowHeight * 0.8);

    // Clamp between 0 and 1
    progress = Math.min(Math.max(progress, 0), 1);

    // Calculate new opacity based on progress
    const newOpacity = minOpacity + (maxOpacity - minOpacity) * progress;
    setOverlayOpacity(newOpacity);
  }

    window.addEventListener('scroll', onScroll);
    // Set initial opacity
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
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
          <div
            className="hero-overlay"
            style={{ background: `rgba(0, 0, 0, ${overlayOpacity})` }}
          />
          <div className="hs-greeting">
            <h1>Lincolnshire’s Finest Wild Game</h1>
            <Link className="button hsg-search-meats-btn" to='/shop/all'>Explore Our Produce</Link>
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

      </div>
    </>
  );
};
