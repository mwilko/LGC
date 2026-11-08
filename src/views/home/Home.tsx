import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroImg from 'assets/images/Venison Kofta - Garlic Paprika.jpg';
import produceImg from 'assets/images/Venison Skewers - Garlic Paprika.jpg';
import aboutUsImg from 'assets/images/sim_t_game_fair.jpg';
import './Home.css';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about-us') {
      document.getElementById('about-us')?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="home">
      <section className="home__hero" aria-labelledby="home-heading">
        <img className="home__hero-image" src={heroImg} alt="" />
        <div className="home__container home__hero-content">
          <p className="home__eyebrow">From field to table</p>
          <h1 id="home-heading">The Lincolnshire<br />Game Company</h1>
          <p className="home__intro">
            Discover our game and produce, meet the people behind it,
            and speak to us about your requirements.
          </p>
          <div className="home__actions">
            <Link to="/shop/all" className="site-button">Explore Our Produce</Link>
            <Link to="/contact" className="site-button site-button--secondary">Make an Enquiry</Link>
          </div>
        </div>
      </section>

      <section className="home__section" aria-labelledby="produce-heading">
        <div className="home__container home__split">
          <div>
            <p className="home__eyebrow">Our produce</p>
            <h2 id="produce-heading">Good food starts with<br />knowing your producer.</h2>
            <p>
              Explore our selection of game and other produce. For available cuts,
              pack sizes and current pricing, our team is here to help.
            </p>
            <div className="home__categories" aria-label="Explore produce categories">
              <Link to="/shop/venison">Venison <span aria-hidden="true">&rarr;</span></Link>
              <Link to="/shop/poultry">Poultry <span aria-hidden="true">&rarr;</span></Link>
              <Link to="/shop/standard">Other Meats <span aria-hidden="true">&rarr;</span></Link>
              <Link to="/shop/other">Accompaniments <span aria-hidden="true">&rarr;</span></Link>
            </div>
            <Link to="/shop/all" className="home__text-link">View All Produce <span aria-hidden="true">&rarr;</span></Link>
          </div>
          <img
            className="home__section-image"
            src={produceImg}
            alt="Prepared venison skewers with garlic and paprika"
            loading="lazy"
          />
        </div>
      </section>

      <section className="home__section home__section--muted" id="about-us" aria-labelledby="heritage-heading">
        <div className="home__container home__split">
          <img
            className="home__section-image"
            src={aboutUsImg}
            alt="The Lincolnshire Game Company team at a game fair"
            loading="lazy"
          />
          <div>
            <p className="home__eyebrow">Our story</p>
            <h2 id="heritage-heading">People, produce<br />and provenance.</h2>
            <p>
              Based in Lincolnshire, we bring together experience in sourcing,
              processing and supplying game. Get to know our company and
              the approach behind our produce.
            </p>
            <Link to="/about-us" className="home__text-link">Meet Lincolnshire Game <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </section>

      <section className="home__section home__enquiry" aria-labelledby="enquiry-heading">
        <div className="home__container">
          <p className="home__eyebrow">Let's talk</p>
          <h2 id="enquiry-heading">Looking for something specific?</h2>
          <p>Speak to our team about product availability, trade enquiries or your next order.</p>
          <Link to="/contact" className="site-button">Contact Our Team</Link>
        </div>
      </section>
    </div>
  );
};
