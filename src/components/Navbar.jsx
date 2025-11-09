import { useState, useEffect } from 'react';
import logo from '../assets/Yorigo_icon_dark.png';
import './Navbar.css';

const Navbar = ({ translations, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
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

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
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

