import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import blogImg1 from 'assets/images/game_resturant.png';
import blogImg2 from 'assets/images/gun_salute.png';
import blogImg3 from 'assets/images/showcase_game_fair.jpg';

export const Blogs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="blogs-page">
      <header className="blogs-hero">
        <div className="blogs-hero-content">
          <h1>From the Field to Your Table</h1>
          <p>Discover our thoughts on sustainable hunting, wild food, and behind-the-scenes stories from Lincolnshire Game.</p>
          <span className="blogs-hero-subtitle">STORIES & INSIGHTS</span>
        </div>
      </header>

      <section className="blog-container">
        <div className="blog-list">
          <div className="blog-card blog-card-featured">
            <div className="blog-card-image-wrapper">
              <img src={blogImg1} alt="Sustainability in Wild Game" />
              <span className="blog-badge">Featured</span>
            </div>
            <div className="blog-card-content">
              <span className="blog-category">Sustainability</span>
              <h3>Sustainability in Wild Game</h3>
              <p>How we ensure every product we offer is responsibly sourced and environmentally conscious. Learn about our commitment to preserving ecosystems...</p>
              <Link to="/blog/sustainability-in-wild-game" className="blog-read-more">
                <span>Read Story</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12l6-6-6-6"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-card-image-wrapper">
              <img src={blogImg2} alt="A Day in the Life of a Gamekeeper" />
            </div>
            <div className="blog-card-content">
              <span className="blog-category">Behind the Scenes</span>
              <h3>A Day in the Life of a Gamekeeper</h3>
              <p>Follow along with our team in the field as we trace the path from land to table...</p>
              <Link to="/blog/day-in-the-life" className="blog-read-more">
                <span>Read Story</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12l6-6-6-6"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-card-image-wrapper">
              <img src={blogImg3} alt="Our Guide to Cooking Wild Meat" />
            </div>
            <div className="blog-card-content">
              <span className="blog-category">Recipes & Tips</span>
              <h3>Cooking Wild: Our Recipe Guide</h3>
              <p>Explore our favourite ways to prepare venison, pheasant, and more with simple, delicious recipes...</p>
              <Link to="/blog/cooking-wild-guide" className="blog-read-more">
                <span>Read Story</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12l6-6-6-6"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
