import { useEffect, useRef, useState } from 'react';
// Logo
import Logo from 'assets/images/lgc_logo_new_trans.png';
// Router
import { Link, useLocation } from 'react-router-dom';
// Icons
import { ReactComponent as AwardIcon } from 'assets/icons/award.svg';
// Images
import aboutUsImg from 'assets/images/sim_and_t.jpg';
import awardsAndApprovedImg from 'assets/images/awards_and_approved.png';
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
      const maxOpacity = 1;
      const minOpacity = 0.3;

      let progress = (windowHeight - rect.bottom) / (windowHeight * 0.8);
      progress = Math.min(Math.max(progress, 0), 1);
      const newOpacity = minOpacity + (maxOpacity - minOpacity) * progress;
      setOverlayOpacity(newOpacity);
    }

    window.addEventListener('scroll', onScroll);
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
            <h1>Lincolnshire's Finest Wild Game</h1>
            <Link className="button hsg-search-meats-btn" to='/shop/all'>Explore Our Produce</Link>
          </div>
        </section>

        {/* About Us Section */}
        <section ref={aboutUs} className="about-us-section">
          <div className="section-grid">
            <img src={aboutUsImg} alt="Our Owners in Lincolnshire" />
            <div className="section-info">
              <h2>Our Heritage</h2>
              <p>At The Lincolnshire Game Company, we are passionate about bringing the finest wild game and poultry from the heart of Lincolnshire. We value sustainability, traceability, and tradition in every cut we offer.</p>
              <p>Since 2013, we've been a trusted name for chefs, restaurants, and families across the UK and Europe, delivering exceptional quality and service.</p>
              <Link className="button" to='/about-us'>Discover Our Story</Link>
            </div>
          </div>
        </section>

        {/* Awards and Accreditations */}
        <section className="achievements-section">
          <div className="section-grid">
            <div className="section-info">
              <h2>Recognised for Excellence</h2>
              <p>
                We make sure to deliver exceptional taste, ethical sourcing, and unwavering quality with our products. These aren't just promises—they're commitments validated by the best in the business.
              </p>
              <p>
                Explore the recognitions that set our game apart and give you complete confidence in every purchase.
              </p>
              <Link to='/about-us' className="button achievements-btn">View Achievements</Link>
            </div>
            <div className="awards-image-container">
              <img 
                src={awardsAndApprovedImg} 
                alt="Our awards and certifications" 
                className="awards-image"
              />
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