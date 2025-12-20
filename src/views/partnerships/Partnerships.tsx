import { useEffect } from 'react';
import './Partnerships.css';
import partner1 from 'assets/images/jose_pfp.jpeg';
import partner2 from 'assets/images/altas_quintas_pfp.jpg';
import partner3 from 'assets/images/sim_t_game_fair.jpg';

export const Partnerships = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="partnerships-page">
      <header className="partnerships-hero">
        <h1>Our Partnerships</h1>
        <p>
          At Lincolnshire Game, we’re proud to work with a range of trusted partners across retail, hospitality,
          and sustainability. Together, we’re raising the standard of ethical and traceable game meat in the UK.
        </p>
      </header>

      <section className="partners-list" aria-label="Featured partnerships">
        <article className="partner-item">
          <img src={partner1} alt="Jose Soto - Senior Chef Lecturer at Westminster Kingsway College" loading="lazy" />
          <div className="partner-content">
            <h3>Jose Luis Souto</h3>
            <p>As Senior Chef Lecturer of Westminister Kingsway College, we work closly with Jose and he is a proud promoter of our produce at Lincolnshire Game.
              <br/><br/>Jose is also the author of The Game Larder Books in collaboration with us, which showcases everything game.</p>
            <a href="https://www.waterstones.com/author/jose-souto/3973804" target="_blank" rel="noopener noreferrer" className="button-link">The Game Larder Book</a>
          </div>
        </article>

        <article className="partner-item">
          <img src={partner2} alt="Atlas Quintas - Finest Portuguese Wines" loading="lazy" />
          <div className="partner-content">
            <h3>Atlas Quintas</h3>
            <p>Altas Quintas crafts high-altitude wines from Portugal’s Serra de São Mamede, bringing refined structure and bold character to the table—qualities that align perfectly with our game at Lincolnshire Game.
              <br/><br/>Our partnership celebrates the harmony between wild-sourced British produce and sustainably made Portuguese wine, regularly featured in our tastings and chef collaborations.</p>
            <a href="https://altasquintas.com/" target="_blank" rel="noopener noreferrer" className="button-link">Visit Site</a>
          </div>
        </article>

        {/* <article className="partner-item">
          <img src={partner3} alt="Partner Three - National distribution of traceable products" loading="lazy" />
          <div className="partner-content">
            <h3>Partner Three</h3>
            <p>Partner Three provides nationwide distribution ensuring fresh, traceable products reach customers fast.</p>
            <a href="https://example.com/partner3" target="_blank" rel="noopener noreferrer" className="button-link">Visit Site</a>
          </div>
        </article> */}
      </section>

      <div className="partnerships-cta">
        <a href="/contact" className="button">Become a Partner</a>
      </div>
    </div>
  );
};
