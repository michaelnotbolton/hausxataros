import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <h1 className="header-title">Haus Xataros</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
