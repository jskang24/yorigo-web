import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/Yorigo_icon_dark.png';
import './Navbar.css';

const Navbar = ({ translations, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageToggle = () => {
    toggleLanguage();
    setIsMobileMenuOpen(false);
  };

  const goToSupport = () => {
    navigate('/support');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Yorigo Logo" className="navbar-logo" />
            <span className="navbar-title">{translations.nav.title}</span>
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <button onClick={() => scrollToSection('discover')} className="nav-link">
              {translations.nav.discover}
            </button>
            <button onClick={() => scrollToSection('benefits')} className="nav-link">
              {translations.nav.benefits}
            </button>
            <button onClick={() => scrollToSection('our-value')} className="nav-link">
              {translations.nav.story}
            </button>
            <button onClick={() => scrollToSection('faq')} className="nav-link">
              {translations.nav.faq}
            </button>
            <button type="button" onClick={goToSupport} className="nav-link">
              {translations.nav.support}
            </button>
            <button onClick={handleLanguageToggle} className="language-toggle">
              {language === 'en' ? '한국어' : 'English'}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;

