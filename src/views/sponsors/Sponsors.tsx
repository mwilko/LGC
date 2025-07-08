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
          Lincolnshire Game proudly supports events and organisations that share our values — 
          including sustainable field sports, education, and community heritage.
        </p>
      </header>

      <section className="sponsor-grid">
        <div className="sponsor-card">
          <img src={sponsor1} alt="The Game Fair" />
          <h3>The Game Fair</h3>
          <p>We regularly support the anual Game Fair event. </p>
          <a href="https://thegamefair.org/" target="_blank" rel="noopener noreferrer">
            Visit Site →
          </a>
        </div>

        <div className="sponsor-card">
          <img src={sponsor2} alt="Showcase Game Fair" />
          <h3>Showcase Game Fair</h3>
          <p>Our sponsorship helps inspire younger audiences through wild game demos and education.</p>
          <a href="https://example.com/showcase-fair" target="_blank" rel="noopener noreferrer">
            Visit Site →
          </a>
        </div>

        <div className="sponsor-card">
          <img src={sponsor3} alt="Simulated Training Days" />
          <h3>Simulated Shoot Days</h3>
          <p>We fund responsible fieldcraft training through simulated shoots across the region.</p>
          <a href="https://example.com/simulated-training" target="_blank" rel="noopener noreferrer">
            Visit Site →
          </a>
        </div>
      </section>
    </div>
  );
};
