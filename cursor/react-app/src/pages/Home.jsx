import { Link } from 'react-router-dom';
import './Pages.css';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Welcome to Vellesa By ZAP</h1>
          <p className="hero-subtitle">
            Your trusted partner for quality products and solutions
          </p>
          <Link to="/products" className="btn btn-primary">Explore Our Products</Link>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Quality Assured</h3>
              <p>We maintain the highest standards in all our products and services.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Trusted Experience</h3>
              <p>Years of expertise serving customers across the globe.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Customer First</h3>
              <p>Dedicated support and tailored solutions for your needs.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Get in Touch</h2>
          <p className="section-lead">
            Have questions or need a quote? We'd love to hear from you.
          </p>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
