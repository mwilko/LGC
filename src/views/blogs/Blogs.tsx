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
        <h1>From the Field: Stories & Insights</h1>
        <p>Discover our thoughts on sustainable hunting, wild food, and behind-the-scenes stories from Lincolnshire Game.</p>
      </header>

      <section className="blog-list">
        <div className="blog-card">
          <img src={blogImg1} alt="Sustainability in Wild Game" />
          <div className="blog-card-content">
            <h3>Sustainability in Wild Game</h3>
            <p>How we ensure every product we offer is responsibly sourced and environmentally conscious...</p>
            <Link to="/blog/sustainability-in-wild-game">Read More →</Link>
          </div>
        </div>

        <div className="blog-card">
          <img src={blogImg2} alt="A Day in the Life of a Gamekeeper" />
          <div className="blog-card-content">
            <h3>A Day in the Life of a Gamekeeper</h3>
            <p>Follow along with our team in the field as we trace the path from land to table...</p>
            <Link to="/blog/day-in-the-life">Read More →</Link>
          </div>
        </div>

        <div className="blog-card">
          <img src={blogImg3} alt="Our Guide to Cooking Wild Meat" />
          <div className="blog-card-content">
            <h3>Cooking Wild: Our Recipe Guide</h3>
            <p>Explore our favourite ways to prepare venison, pheasant, and more with simple, delicious recipes...</p>
            <Link to="/blog/cooking-wild-guide">Read More →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
