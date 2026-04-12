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
      <section className="awards-hero">
        <div className="container">
          <h1>Award Winning Excellence</h1>
          <p>Recognised for quality, sustainability, and ethical practice</p>
        </div>
      </section>

      {/* Featured Image & Content */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-layout">
            <div className="featured-image">
              <img src={awardsImg} alt="Awards and certifications" />
            </div>
            <div className="featured-text">
              <h2>Our Recognition</h2>
              <p>
                The Lincolnshire Game Company has earned recognition from industry leaders and culinary experts for our unwavering commitment to quality, taste, and ethical sourcing practices.
              </p>
              <p>
                Every award reflects our dedication to sustainable wildlife management, rigorous quality standards, and exceptional customer service. We're proud to represent the highest standards in the game industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="awards-grid-section">
        <div className="container">
          <div className="awards-cards">
            <div className="award-card">
              <h3>Award-Winning Produce</h3>
              <p>Recognised by industry bodies for consistently exceptional quality, taste, and ethical sourcing practices.</p>
            </div>
            <div className="award-card">
              <h3>100% Ethical Sourcing</h3>
              <p>Every product fully traceable from field to table with transparent supply chains and sustainable wildlife management.</p>
            </div>
            <div className="award-card">
              <h3>Premium Quality Assured</h3>
              <p>Rigorous quality standards and expert processes ensure consistently exceptional flavour and texture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <div className="container">
          <h2>Our Certifications</h2>
          <div className="certifications-list">
            <div className="cert">
              <h4>Red Tractor</h4>
              <span>Food Assurance & Quality</span>
            </div>
            <div className="cert">
              <h4>RSPB Partner</h4>
              <span>Wildlife Conservation</span>
            </div>
            <div className="cert">
              <h4>Soil Association</h4>
              <span>Organic & Sustainable</span>
            </div>
            <div className="cert">
              <h4>ISO 9001</h4>
              <span>Quality Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience Premium Quality</h2>
          <p>Discover award-winning game products sourced with integrity</p>
          <Link to="/shop/all" className="btn btn-gold">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};
