import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Awards.css';
import awardsImg from 'assets/images/awards_and_approved.png';

export const Awards = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="awards-page">
      {/* Hero Section */}
      <header className="awards-hero">
        <div className="awards-hero-content">
          <span className="awards-hero-subtitle">RECOGNITION & EXCELLENCE</span>
          <h1>Our Achievements</h1>
          <p>Award-winning excellence in quality, sustainability, and ethical sourcing</p>
        </div>
      </header>

      {/* Achievements Content Section */}
      <section className="achievements-section">
        <div className="achievements-container">
          <div className="achievements-card-wrapper">
            <div className="achievements-card">
              <div className="achievements-image-wrapper">
                <img
                  src={awardsImg}
                  alt="Our awards and certifications"
                  className="awards-image"
                />
              </div>
              <div className="achievements-text-wrapper">
                <h2>Recognised for Excellence</h2>
                <div className="card-divider"></div>
                <p>
                  The Lincolnshire Game Company has received multiple awards and accreditations for quality, sustainability, and ethical sourcing.
                </p>
                <p>
                  From regional recognitions to national accolades, we're proud to be at the forefront of the wild game industry, delivering consistently exceptional products and service.
                </p>
                <Link to="/shop/all" className="cta-link">
                  Explore Our Produce →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
