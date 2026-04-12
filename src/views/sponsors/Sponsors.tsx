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
        <div className="sponsorships-hero-content">
          <h1>Strategic Partnerships & Sponsorships</h1>
          <p>Lincolnshire Game proudly partners with events and organisations that share our core values—sustainable field sports, heritage conservation, and community education.</p>
          <span className="sponsorships-hero-subtitle">COMMUNITY & IMPACT</span>
        </div>
      </header>

      <section className="sponsor-grid">
        <div className="sponsor-card">
          <div className="sponsor-badge">Annual Partner</div>
          <div className="sponsor-image-wrapper">
            <img src={sponsor1} alt="The Game Fair" />
          </div>
          <h3>The Game Fair</h3>
          <p className="sponsor-description">
            Britain's premier field sports event, bringing together enthusiasts, professionals, and families to celebrate country life and sustainable land management.
          </p>
          <ul className="sponsor-highlights">
            <li>Annual sponsorship</li>
            <li>Product showcase</li>
            <li>Community engagement</li>
          </ul>
          <a href="https://thegamefair.org/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            Learn More →
          </a>
        </div>

        <div className="sponsor-card">
          <div className="sponsor-badge">Educational Initiative</div>
          <div className="sponsor-image-wrapper">
            <img src={sponsor2} alt="Showcase Game Fair" />
          </div>
          <h3>Showcase Game Fair</h3>
          <p className="sponsor-description">
            An innovative platform inspiring younger audiences through interactive wild game demonstrations, culinary workshops, and field sports education.
          </p>
          <ul className="sponsor-highlights">
            <li>Youth engagement</li>
            <li>Educational demos</li>
            <li>Culinary showcases</li>
          </ul>
          <a href="https://example.com/showcase-fair" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            Learn More →
          </a>
        </div>

        <div className="sponsor-card">
          <div className="sponsor-badge">Training Support</div>
          <div className="sponsor-image-wrapper">
            <img src={sponsor3} alt="Simulated Training Days" />
          </div>
          <h3>Simulated Shoot Days</h3>
          <p className="sponsor-description">
            Funding responsible fieldcraft training and professional development through premier simulated shooting experiences across the East Midlands.
          </p>
          <ul className="sponsor-highlights">
            <li>Fieldcraft training</li>
            <li>Professional development</li>
            <li>Regional outreach</li>
          </ul>
          <a href="https://example.com/simulated-training" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            Learn More →
          </a>
        </div>
      </section>

      <section className="sponsorship-cta">
        <div className="cta-content">
          <h2>Interested in Partnering With Us?</h2>
          <p>We're always looking for like-minded organisations to collaborate with. Get in touch to discuss sponsorship opportunities.</p>
          <a href="/contact" className="cta-button">Get In Touch</a>
        </div>
      </section>
    </div>
  );
};
