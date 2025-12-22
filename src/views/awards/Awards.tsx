import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Awards.css';
import awardsImg from 'assets/images/awards_and_approved.png';
import {
  GlobeEuropeAfricaIcon,
  BoltIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export const Awards = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="awards-page">
      {/* Hero Section */}
      <header className="awards-hero">
        <h1>Our Achievements</h1>
        <div className="corporate-divider"></div>
      </header>

      {/* Features / Icons Section */}
      <section className="awards-features">
        <div className="features-grid">
          <div className="feature-item">
            <GlobeEuropeAfricaIcon className="feature-icon" />
            <h3>Sustainable</h3>
            <p>Ethically sourced, environmentally responsible.</p>
          </div>
          <div className="feature-item">
            <MapPinIcon className="feature-icon" />
            <h3>Traceable</h3>
            <p>Full traceability from field to table.</p>
          </div>
          <div className="feature-item">
            <BoltIcon className="feature-icon" />
            <h3>Quality</h3>
            <p>Consistently award-winning taste and excellence.</p>
          </div>
        </div>
      </section>

      {/* Awards Content Section (Styled like Home page Heritage section) */}
      <section className="achievements-section">
        <div className="corporate-container">
          <div className="corporate-content-wrapper reverse">
            <div className="corporate-image-block">
              <img
                src={awardsImg}
                alt="Our awards and certifications"
                className="corporate-image"
              />
            </div>
            <div className="corporate-text-block">
              <h2>Recognised for Excellence</h2>
              <div className="corporate-divider"></div>
              <p>
                Recognised and trusted for excellence in wild game meat.
              </p>
              <p>
                Since our founding, The Lincolnshire Game Company has received multiple awards and
                accreditations for quality, sustainability, and ethical sourcing. From regional
                recognitions to national awards, we are proud to lead the industry.
              </p>
              <Link to="/shop/all" className="corporate-link">
                Explore Our Produce →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
