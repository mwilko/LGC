import { useEffect } from 'react';
import aboutUsImg from '../../assets/images/showcase_game_fair.jpg';
import './AboutUs.css';

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero / Banner */}
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1 id="about-hero-heading">About Lincolnshire Game</h1>
          <p>Tradition, traceability, and uncompromising quality</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="corporate-container">

          {/* Heritage Section */}
          <div className="corporate-content-wrapper">
            <div className="corporate-text-block">
              <h2>Our Heritage</h2>
              <div className="corporate-divider"></div>
              <p>
                The Lincolnshire Game Company was founded with a clear purpose:
                to supply premium wild game that is responsibly sourced, fully traceable,
                and handled with the utmost care.
              </p>
              <p>
                Working closely with trusted estates and processors, we ensure every
                product meets rigorous standards of quality, sustainability, and food safety.
                From field to table, our processes are designed to preserve flavour,
                integrity, and provenance.
              </p>
            </div>

            <div className="corporate-image-block">
              <img
                src={aboutUsImg}
                alt="Lincolnshire Game at the Great British Game Fair"
                loading="lazy"
                className="corporate-image"
              />
            </div>
          </div>

          {/* Standards Section */}
          <div className="corporate-content-wrapper reverse">
            <div className="corporate-text-block">
              <h2>Standards & Responsibility</h2>
              <div className="corporate-divider"></div>
              <p>
                We operate in full compliance with UK and EU food regulations,
                adhering to recognised industry certifications and best practices
                at every stage of production.
              </p>
              <p>
                Animal welfare, environmental responsibility, and transparency
                are central to how we work. Our team brings extensive experience
                across sourcing, processing, and distribution to ensure
                consistent excellence.
              </p>
            </div>

            <div className="corporate-stats-card">
              <div className="stat">
                <span className="stat-value">100%</span>
                <span className="stat-label">Traceable Supply Chain</span>
              </div>
              <div className="stat">
                <span className="stat-value">UK</span>
                <span className="stat-label">Ethically Sourced</span>
              </div>
              <div className="stat">
                <span className="stat-value">10+</span>
                <span className="stat-label">Years of Expertise</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};