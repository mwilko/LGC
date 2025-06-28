import { useEffect } from 'react';
import './Sponsors.css';
import sponsor1 from 'assets/images/s_lgc_logo.png';
import sponsor2 from 'assets/images/showcase_game_fair.jpg';
import sponsor3 from 'assets/images/sim_t_game_fair.jpg';

export const Sponsors = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="sponsorships-page">
      <header className="sponsorships-hero">
        <h1>Who We Sponsor</h1>
        <p>
          Lincolnshire Game is proud to sponsor local organisations, conservation groups, and causes that share our values.
          From food education to wildlife protection, we believe in giving back.
        </p>
      </header>

      <section className="sponsor-logos">
        <img src={sponsor1} alt="Sponsored Group 1" />
        <img src={sponsor2} alt="Sponsored Group 2" />
        <img src={sponsor3} alt="Sponsored Group 3" />
        {/* Add more sponsor logos */}
      </section>

      <section className="sponsor-values">
        <div className="value-item">
          <h3>Education</h3>
          <p>We support programs that teach sustainable food sourcing and ethical game handling.</p>
        </div>
        <div className="value-item">
          <h3>Conservation</h3>
          <p>Partnering with wildlife trusts and conservation bodies to protect natural habitats.</p>
        </div>
        <div className="value-item">
          <h3>Community</h3>
          <p>Backing local events, rural charities, and youth development through sport and fieldcraft.</p>
        </div>
      </section>

      <div className="sponsorships-cta">
        <a href="/contact" className="button">Request Sponsorship</a>
      </div>
    </div>
  );
};
