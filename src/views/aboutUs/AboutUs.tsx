import { useEffect } from 'react';
// Images
import aboutUsImg from '../../assets/images/showcase_game_fair.jpg';
import './AboutUs.css';

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="about-banner"></div>

      <section className="about-main">
        <div className="about-header">
          <div className="about-line"></div>
          <h1>About Us</h1>
          <div className="about-line"></div>
        </div>

        <div className="about-intro">
          <div className="about-intro-text">
            <p>
              Our company has a proud tradition of delivering the finest quality meats,
              responsibly sourced from trusted farms and suppliers. Established with a passion
              for excellence, we are dedicated to upholding the highest standards of food safety,
              sustainability, and customer satisfaction.
            </p>
            <p>
              Our team is composed of experienced professionals who care deeply about animal welfare,
              the environment, and the communities we serve. We strictly adhere to UK and EU food regulations,
              ensuring compliance with industry certifications and best practices at every stage.
            </p>
          </div>

          <div className="about-image-container">
            <img
              src={aboutUsImg}
              alt="Our team at work"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
