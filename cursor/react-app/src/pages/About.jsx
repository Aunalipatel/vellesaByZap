import './Pages.css';

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p className="lead">
            Vellesa By ZAP is committed to delivering excellence and building lasting relationships with our customers.
          </p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            We have built our reputation on quality, reliability, and a customer-first approach.
            Our team brings together expertise and innovation to meet the evolving needs of our clients
            across different industries.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Integrity</strong> — We conduct business with transparency and honesty.</li>
            <li><strong>Quality</strong> — We never compromise on the standards of our products and services.</li>
            <li><strong>Innovation</strong> — We continuously improve and adapt to serve you better.</li>
            <li><strong>Partnership</strong> — We work alongside our customers to achieve shared success.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
