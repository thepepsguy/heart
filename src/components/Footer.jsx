import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {


  return (
    <main className="mjo-container">

      {/* LEFT + RIGHT SECTION */}
      <div className="mjo-header-content">

        {/* LEFT SECTION */}
        <div className="mjo-left-side">



          {/* Menu Columns */}
          <div className="mjo-menu-cols">

            {/* Column 1 */}
            <div className="mjo-menu-col">
              <ul className="mjo-list-unstyled">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/about">Learn</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="mjo-menu-col">
              <ul className="mjo-list-unstyled">
                <li className="mjo-policy-links">
                  <a href="#">Terms & Services</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="mjo-heading-section">
          <h1>
            <span className="mjo-highlight">
              Peptide made simple.
            </span>
          </h1>

          <Link to="/contact" className="mjo-cta-button">Let's Connect</Link>
        </div>

      </div>

      {/* Divider Line */}
      <div className="mjo-separator"></div>

      {/* Footer Bottom */}
      <div className="mjo-footer-grid">
        <div className="mjo-footer-left-group">
          <div className="mjo-copyright-links">
            © HEART 2026. All rights reserved
            <a href="https://www.linkedin.com/in/abhiboostin/" target="_blank" rel="noopener noreferrer" className="mjo-hidden-link">
              Mouse&Cheese
            </a>
          </div>
        </div>

        <div className="mjo-social-links" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ padding: '6px 12px', background: '#f4f4f5', color: '#52525b', borderRadius: '6px', border: '1px solid #e4e4e7', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            100% Privacy Respected
          </span>
          <span style={{ color: '#aaa', cursor: 'not-allowed', fontSize: '14px' }} title="Working on it">
            Reddit (Soon)
          </span>
          <a href="https://discord.gg/MAMWGg2rS" target="_blank" rel="noopener noreferrer" aria-label="Discord" style={{ fontWeight: 600, color: '#111' }}>
            <span>Discord</span>
          </a>
          <span style={{ color: '#aaa', cursor: 'not-allowed', fontSize: '14px' }} title="Working on it">
            Telegram (Soon)
          </span>
        </div>
      </div>

      {/* Giant Logo */}
      <div className="mjo-giant-logo" style={{ textAlign: 'center', opacity: 0.1, pointerEvents: 'none' }}>
        <h2 style={{ fontSize: '20vw', margin: 0, padding: 0, fontWeight: 900 }}>
          HEART
        </h2>
      </div>

    </main>
  );
}
