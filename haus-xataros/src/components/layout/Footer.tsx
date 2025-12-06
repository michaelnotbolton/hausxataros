import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Haus Xataros</h3>
            <p>Theatrical elegance meets editorial precision</p>
          </div>

          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a
                href="https://substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Substack
              </a>
              <a
                href="https://bluesky.app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Bluesky
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Haus Xataros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
