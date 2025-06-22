import { Link } from 'react-router-dom';
import './Awards.css';
import awardsImg from 'assets/images/awards_and_approved.png';
import {
  GlobeEuropeAfricaIcon,
  BoltIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export const Awards = () => {
  return (
    <div className="awards-page">
      <header className="awards-hero">
        <div className="features-grid">
          <div className="feature-item">
            <GlobeEuropeAfricaIcon className="feature-icon" />
            <h3>Sustainable</h3>
          </div>
          <div className="feature-item">
            <MapPinIcon className="feature-icon" />
            <h3>Traceable</h3>
          </div>
          <div className="feature-item">
            <BoltIcon className="feature-icon" />
            <h3>Quality</h3>
          </div>
        </div>
      </header>

      <section className="awards-content">
        <div className="awards-text">
          <h2>Our Achievements</h2>
          <p>
            Since our founding, The Lincolnshire Game Company has been honoured with multiple awards and
            accreditations for our dedication to quality, sustainability, and ethical sourcing. From regional
            food awards to national recognitions, we are proud to set the standard in wild game meat.
          </p>
          <p>
            Our products have been approved by leading industry bodies, and our processes meet the highest standards
            for traceability and environmental responsibility.
          </p>
          <Link to="/shop/all" className="button awards-cta">
            Explore Our Produce
          </Link>
        </div>
        <div className="awards-image">
          <img src={awardsImg} alt="Our awards and certifications" />
        </div>
      </section>

    </div>
  );
};
