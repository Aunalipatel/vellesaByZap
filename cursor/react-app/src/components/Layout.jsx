import { Link, NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo-link">
            <img src="/logo.png" alt="Vellesa By ZAP" className="logo-img" />
            <span className="logo-brand">Vellesa By ZAP</span>
          </Link>
          <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/logo.png" alt="Vellesa By ZAP" className="footer-logo-img" />
            <span className="footer-brand">Vellesa By ZAP</span>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Vellesa By ZAP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
