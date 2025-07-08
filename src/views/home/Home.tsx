import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ItemListContainer } from 'components/common/itemListContainer/ItemListContainer';
import Logo from 'assets/images/lgc_logo_new_trans.png';
import heroImg1 from 'assets/images/Venison Kofta - Garlic Paprika.jpg';
import heroImg2 from 'assets/images/Venison Skewers - Garlic Paprika.jpg';
import heroImg3 from 'assets/images/avacado_dish.jpg';
import aboutUsImg from 'assets/images/sim_t_game_fair.jpg';
import awardsAndApprovedImg from 'assets/images/awards_and_approved.png';
import './Home.css';

const testimonials = [
  { text: 'Absolutely the best game meat I’ve ever tasted!', author: 'Chef Gordon' },
  { text: 'Unbeatable quality and service.', author: 'Restaurant Owner, London' },
  { text: 'Fast delivery, delicious products!', author: 'Home Cook, York' },
];

const heroSlides = [
  {
    title: "Lincolnshire Game",
    cta: { text: 'Explore Our Produce', link: '/shop/all' },
    image: heroImg1
  },
  {
    title: 'Sustainably Sourced & Traceable',
    cta: { text: 'Learn More', link: '/about-us' },
    image: heroImg2
  },
  {
    title: 'Award-Winning Excellence',
    cta: { text: 'View Achievements', link: '/awards' },
    image: heroImg3
  }
];

export const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0.6);
  const [isPaused, setIsPaused] = useState(false);
  const [sectionOpacity, setSectionOpacity] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [achievementsVisible, setAchievementsVisible] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutUs = useRef<HTMLElement>(null);
  const location = useLocation();
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const sectionWrapperRef = useRef<HTMLDivElement>(null);
  const aboutGridRef = useRef<HTMLDivElement>(null);
  const achievementsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#about-us') {
      aboutUs.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    function startInterval() {
      intervalId.current = setInterval(() => {
        setSlideIndex(i => (i + 1) % heroSlides.length);
      }, 12000);
    }
    if (!isPaused) startInterval();
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [isPaused]);

  useEffect(() => {
    const hero = heroRef.current;
    const onScroll = () => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const winH = window.innerHeight;
      let prog = (winH - rect.bottom) / (winH * 0.8);
      prog = Math.min(Math.max(prog, 0), 1);
      setOverlayOpacity(0.3 + 0.7 * prog);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // === Fade in/out entire wrapper ===
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionWrapperRef.current) return;

      const rect = sectionWrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startFade = windowHeight * 0.3;
      const endFade = windowHeight * 0.2;

      const fadeInDistance = rect.top;
      const fadeOutDistance = rect.bottom;

      let opacity = 0;

      if (fadeInDistance < windowHeight && fadeOutDistance > endFade) {
        const visibleAmount = 1 - fadeInDistance / windowHeight;
        opacity = Math.min(Math.max(visibleAmount, 0), 1);
      }

      setSectionOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // === Slide in .section-grid elements ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === aboutGridRef.current) setAboutVisible(true);
            if (entry.target === achievementsGridRef.current) setAchievementsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutGridRef.current) observer.observe(aboutGridRef.current);
    if (achievementsGridRef.current) observer.observe(achievementsGridRef.current);

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocus = () => setIsPaused(true);
  const handleBlur = () => setIsPaused(false);

  const current = heroSlides[slideIndex];

  return (
    <div className="home">
      <section
        ref={heroRef}
        className="hero-section"
        role="banner"
        aria-label={current.title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={-1}
      >
        {heroSlides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt=""
            className={`hero-bg-img${idx === slideIndex ? ' active' : ''}`}
            aria-hidden="true"
          />
        ))}
        <div
          className="hero-overlay"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, ${Math.min(overlayOpacity + 0.3, 1)}) 0%,
              rgba(0, 0, 0, ${overlayOpacity}) 50%,
              rgba(0, 0, 0, ${Math.max(overlayOpacity - 0.2, 0)}) 100%
            )`
          }}
        />
        <div className="hs-greeting" aria-live="polite">
          <h1>{current.title}</h1>
          <Link to={current.cta.link} className="button hsg-search-meats-btn">
            {current.cta.text}
          </Link>
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot${idx === slideIndex ? ' active' : ''}`}
              onClick={() => setSlideIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          className="hero-arrow left"
          onClick={() => setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Previous Slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          className="hero-arrow right"
          onClick={() => setSlideIndex((prev) => (prev + 1) % heroSlides.length)}
          aria-label="Next Slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </section>

      <section
        className="about-achievements-wrapper"
        ref={sectionWrapperRef}
        style={{ opacity: sectionOpacity, transition: 'opacity 0.6s ease' }}
      >
        <div className='grey-overlay'></div>
        <section
          ref={aboutUs}
          className="about-us-section"
          aria-labelledby="heritage-heading"
        >
          <div className={`section-grid-box slide-in-left ${aboutVisible ? 'visible' : ''}`}>
            <div
              ref={aboutGridRef}
              className={`section-grid slide-in-left ${aboutVisible ? 'visible' : ''}`}
            >
              <img
                src={aboutUsImg}
                alt="Our Owners in Lincolnshire"
                loading="lazy"
                className="section-image"
              />
              <div className="section-info">
                <h2 id="heritage-heading">Our Heritage</h2>
                <p>
                  At The Lincolnshire Game Company, we are passionate about delivering
                  sustainably sourced, wild game of the highest quality.
                </p>
                <p>
                  Since 2013, we've been a trusted name providing game meat that is
                  both delicious and ethically sourced.
                </p>
                <Link to="/about-us" className="button">
                  Discover Our Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="achievements-section"
          id="achievements"
          aria-labelledby="achievements-heading"
        >
          <div className={`section-grid-box slide-in-left ${achievementsVisible ? 'visible' : ''}`}>
            <div
              ref={achievementsGridRef}
              className={`section-grid slide-in-left ${achievementsVisible ? 'visible' : ''}`}
            >
              <div className="section-info">
                <h2>Recognised for Excellence</h2>
                <p>
                  We ensure exceptional taste and quality in every product we offer,
                  recognised by top industry awards.
                </p>
                <Link to="/awards" className="button achievements-btn">
                  View Achievements
                </Link>
              </div>
              <div className="awards-image-container">
                <img
                  src={awardsAndApprovedImg}
                  alt="Our awards"
                  loading="lazy"
                  className="awards-image"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="bestsellers-section">
        <div className="bs-title">
          <h2>Our Signature Meats</h2>
        </div>
        <ItemListContainer category="venison" limit />
        <div className="bs-cta">
          <Link to="/shop/all" className="button bs-btn">View All Meats</Link>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-heading">
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <blockquote key={i}>
              &ldquo;{t.text}&rdquo;
              <cite>- {t.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
};
