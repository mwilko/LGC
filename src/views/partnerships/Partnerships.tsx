import { useEffect } from 'react';
import './Partnerships.css';
import partner1 from 'assets/images/avacado_dish.jpg';
import partner2 from 'assets/images/pheasant_dish.png';
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

      <section className="partners-list">
        <div className="partner-item">
          <img src={partner1} alt="Jose Soto" />
          <div className="partner-content">
            <h3>Jose Luis Souto</h3>
            <p>As Senior Chef Lecturer of Westminister Kingsway College, we work closly with Jose and he is a proud promoter of our produce at Lincolnshire Game.</p>
            <a href="https://www.waterstones.com/author/jose-souto/3973804" target="_blank" rel="noopener noreferrer" className="button-link">The Game Larder Book</a>
          </div>
        </div>

        <div className="partner-item">
          <img src={partner2} alt="Partner Two" />
          <div className="partner-content">
            <h3>Partner Two</h3>
            <p>Partner Two supports local communities by promoting traditional game hunting and responsible fieldcraft.</p>
            <a href="https://example.com/partner2" target="_blank" rel="noopener noreferrer" className="button-link">Visit Site</a>
          </div>
        </div>

        <div className="partner-item">
          <img src={partner3} alt="Partner Three" />
          <div className="partner-content">
            <h3>Partner Three</h3>
            <p>Partner Three provides nationwide distribution ensuring fresh, traceable products reach customers fast.</p>
            <a href="https://example.com/partner3" target="_blank" rel="noopener noreferrer" className="button-link">Visit Site</a>
          </div>
        </div>
      </section>

      <div className="partnerships-cta">
        <a href="/contact" className="button">Become a Partner</a>
      </div>
    </div>
  );
};
