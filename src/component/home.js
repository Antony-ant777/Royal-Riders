import React from 'react';
import '../css/home.css';
const Home = () => {
  return (
    <div className='insidehome'>
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Unleash the Rider in You</h1>
          <p className="hero-description">Explore the world of Royal Enfield - Iconic motorcycles, stunning design, and unmatched power.</p>
          <a href="/motorbike" className="hero-explore-btn">Explore Our Motorcycles</a>
        </div>
      </section>

      
      {/* Featured Motorcycles */}
      <section className="featured-motorcycles">
        <h2 className="section-title">Featured Motorcycles</h2>
        <div className="motorcycle-cards">
          <div className="motorcycle-card">
            <img src="classic 350.jpg" alt="Classic 350" />
            <h3 className="card-title">Classic 350</h3>
            <p className="card-description">The all-new Classic 350, combining vintage design with modern features.</p>
            <a href="/classic350.js" className="card-explore-btn">Explore</a>
          </div>
          <div className="motorcycle-card">
            <img src="Interceptor.jpg" alt="Interceptor 650" />
            <h3 className="card-title">Interceptor 650</h3>
            <p className="card-description">Built for riders who crave performance and style.</p>
            <a href="/int650.js" className="card-explore-btn">Explore</a>
          </div>
          <div className="motorcycle-card">
            <img src="Himalaiyan.webp" alt="Himalayan" />
            <h3 className="card-title">Himalayan</h3>
            <p className="card-description">Conquer new terrains with the rugged and versatile Himalayan.</p>
            <a href="/Himalayan450.js" className="card-explore-btn">Explore</a>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="latest-news">
        <h2 className="section-title">Latest News</h2>
        <div className="news-cards">
          <div className="news-card">
            <h3 className="news-title">Royal Enfield Launches the New Meteor 350</h3>
            <p className="news-description">The Meteor 350 has arrived! Discover its new features and design upgrades.</p>
            <a href="/blog/meteor-350-launch" className="news-read-more-btn">Read More</a>
          </div>
          <div className="news-card">
            <h3 className="news-title">Royal Enfield's Expansion in Global Markets</h3>
            <p className="news-description">Royal Enfield takes over global markets with new showrooms and models.</p>
            <a href="/blog/global-expansion" className="news-read-more-btn">Read More</a>
          </div>
        </div>
      </section>

      {/* Top Reviews */}
      <section className="top-reviews">
        <h2 className="section-title">Top Reviews</h2>
        <div className="review-cards">
          <div className="review-card">
            <h3 className="review-title">Classic 350: The Iconic Royal Enfield</h3>
            <p className="review-description">A deep dive into the features, performance, and design of the Classic 350.</p>
            <a href="/blog/classic-350-review" className="review-read-more-btn">Read Review</a>
          </div>
          <div className="review-card">
            <h3 className="review-title">Interceptor 650: Riding in Style</h3>
            <p className="review-description">Is the Interceptor 650 the perfect motorcycle for long-distance touring?</p>
            <a href="/blog/interceptor-650-review" className="review-read-more-btn">Read Review</a>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="user-testimonials">
        <h2 className="section-title">What Riders Are Saying</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p className="testimonial-description">"The Royal Enfield Classic 350 is a dream to ride! It's the perfect combination of old-school charm and modern features."</p>
            <h4 className="testimonial-author">- John D.</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-description">"The Interceptor 650 offers fantastic performance. It's comfortable for long rides and has all the power I need!"</p>
            <h4 className="testimonial-author">- Sarah L.</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-description">"Riding the Himalayan has been an adventure of a lifetime. It’s the ideal motorcycle for off-road journeys!"</p>
            <h4 className="testimonial-author">- Mark P.</h4>
          </div>
        </div>
      </section>
      </div>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Ride?</h2>
        <p className="cta-description">Get behind the wheel of a Royal Enfield motorcycle today and feel the difference.</p>
        <a href="/Findus" className="cta-explore-btn">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
