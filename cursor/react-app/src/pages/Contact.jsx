import './Pages.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">
            Reach out to us for inquiries, support, or partnership opportunities.
          </p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <strong>Email</strong>
              <p><a href="mailto:info@vellesa.com">info@vellesa.com</a></p>
            </div>
            <div className="contact-item">
              <strong>Phone</strong>
              <p>+1 (000) 000-0000</p>
            </div>
            <div className="contact-item">
              <strong>Address</strong>
              <p>
                123 Business Avenue<br />
                Suite 100<br />
                City, State 00000
              </p>
            </div>
          </div>
          <div className="contact-form-wrap">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
