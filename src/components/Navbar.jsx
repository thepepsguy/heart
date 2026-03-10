import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const SCROLL_THRESHOLD = 100;

    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleProductsClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      const showcase = document.getElementById("product-showcase");
      if (showcase) {
        showcase.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const showcase = document.getElementById("product-showcase");
        if (showcase) {
          showcase.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // small delay to allow page render
    }
  };

  return (
    <header
      className={`site-header ${scrolled ? "header-scrolled" : "header-transparent"
        } ${isOpen ? "menu-open" : ""}`}
    >
      <div className="logo-container-header">
        <Link to="/" className="logo-text-header" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.svg" alt="Heart Peptides" style={{ height: '32px' }} />
        </Link>
      </div>

      <button
        className={`hamburger-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        <span className="bar top-bar"></span>
        <span className="bar middle-bar"></span>
        <span className="bar bottom-bar"></span>
      </button>

      <nav className={`nav-main ${isOpen ? 'nav-open' : ''}`}>
        <ul className="nav-menu">
          <li>
            <a href="/" className="nav-link" onClick={handleProductsClick}>Products</a>
          </li>
          <li><Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link className="nav-link" to="/about" onClick={closeMenu}>Learn</Link></li>
        </ul>
      </nav>
    </header>
  );
}