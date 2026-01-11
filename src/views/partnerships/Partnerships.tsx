import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Partnerships.css';
import partner1 from 'assets/images/jose_pfp.jpeg';
import partner2 from 'assets/images/altas_quintas_pfp.jpg';

export const Partnerships = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="partnerships-page">
      {/* Hero Section */}
      <header className="partnerships-hero">
        <div className="partnerships-hero-content">
          <span className="partnerships-hero-subtitle">COLLABORATION & GROWTH</span>
          <h1>Our Partnerships</h1>
          <p>Building strong relationships with industry leaders and community organisations to advance sustainable practices.</p>
        </div>
      </header>

      {/* Partnership Content Section */}
      <section className="partnerships-section">
        <div className="corporate-container">
          <div className="corporate-content-wrapper">
            <div className="corporate-image-block">
              <img
                src={partner1}
                alt="Jose Soto - Senior Chef Lecturer at Westminster Kingsway College"
                className="corporate-image"
              />
            </div>
            <div className="corporate-text-block">
              <h2>Jose Luis Souto</h2>
              <div className="corporate-divider"></div>
              <p>
                As Senior Chef Lecturer of Westminster Kingsway College, we work closely with Jose and he is a proud promoter of our produce at Lincolnshire Game.
              </p>
              <p>
                Jose is also the author of The Game Larder Books in collaboration with us, which showcases everything game.
              </p>
              <a
                href="https://www.waterstones.com/author/jose-souto/3973804"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-link"
              >
                The Game Larder Book →
              </a>
            </div>
          </div>
        </div>

        <div className="corporate-container">
          <div className="corporate-content-wrapper reverse">
            <div className="corporate-image-block">
              <img
                src={partner2}
                alt="Atlas Quintas - Finest Portuguese Wines"
                className="corporate-image"
              />
            </div>
            <div className="corporate-text-block">
              <h2>Atlas Quintas</h2>
              <div className="corporate-divider"></div>
              <p>
                Atlas Quintas crafts high-altitude wines from Portugal’s Serra de São Mamede, bringing refined structure and bold character to the table—qualities that align perfectly with our game at Lincolnshire Game.
              </p>
              <p>
                Our partnership celebrates the harmony between wild-sourced British produce and sustainably made Portuguese wine, regularly featured in our tastings and chef collaborations.
              </p>
              <a
                href="https://altasquintas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-link"
              >
                Visit Site →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="partnerships-cta">
        <Link to="/contact" className="hero-cta-link button-inline">
          Become a Partner
        </Link>
      </div>
    </div>
  );
};
