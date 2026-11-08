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
      <header className="partnerships-hero">
        <div className="partnerships-hero-content">
          <h1>Our Partnerships</h1>
          <p>Building strong relationships with industry leaders and community organisations to advance sustainable practices.</p>
          <span className="partnerships-hero-subtitle">COLLABORATION & GROWTH</span>
        </div>
      </header>

      <section className="partnerships-section" aria-label="Our partners">
        <article className="partnership-card" aria-labelledby="partner-souto">
          <div className="partnership-card__media">
            <img
              src={partner1}
              alt="Jose Luis Souto preparing game at a cooking demonstration"
              className="partnership-card__image"
              loading="lazy"
            />
          </div>
          <div className="partnership-card__content">
            <p className="partnership-card__eyebrow">Culinary expertise</p>
            <h2 id="partner-souto">Jose Luis Souto</h2>
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
              className="site-button site-button--secondary"
            >
              The Game Larder Book →
            </a>
          </div>
        </article>

        <article className="partnership-card" aria-labelledby="partner-quintas">
          <div className="partnership-card__media partnership-card__media--logo">
            <img
              src={partner2}
              alt="Atlas Quintas - Finest Portuguese Wines"
              className="partnership-card__image"
              loading="lazy"
            />
          </div>
          <div className="partnership-card__content">
            <p className="partnership-card__eyebrow">Food & wine</p>
            <h2 id="partner-quintas">Atlas Quintas</h2>
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
              className="site-button site-button--secondary"
            >
              Visit Site →
            </a>
          </div>
        </article>
      </section>

      <div className="partnerships-cta">
        <h2>Interested in working together?</h2>
        <p>Speak to our team about partnership opportunities.</p>
        <Link to="/contact" className="site-button">Become a Partner</Link>
      </div>
    </div>
  );
};
