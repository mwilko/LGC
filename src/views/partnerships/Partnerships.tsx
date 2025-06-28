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

      <section className="partners-logos">
        <img src={partner1} alt="Partner 1" />
        <img src={partner2} alt="Partner 2" />
        <img src={partner3} alt="Partner 3" />
        {/* Add more as needed */}
      </section>

      <section className="partnership-benefits">
        <div className="benefit-item">
          <h3>Trusted Quality</h3>
          <p>Our partners know they can rely on our commitment to excellence in every product.</p>
        </div>
        <div className="benefit-item">
          <h3>Ethical Sourcing</h3>
          <p>We uphold the highest standards in traceability and sustainable hunting practices.</p>
        </div>
        <div className="benefit-item">
          <h3>National Reach</h3>
          <p>From local butchers to national retailers, we deliver across the UK with care and speed.</p>
        </div>
      </section>

      <div className="partnerships-cta">
        <a href="/contact" className="button">Become a Partner</a>
      </div>
    </div>
  );
};
