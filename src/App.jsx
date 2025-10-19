import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { translations } from './translations';
import yorigoHome from './assets/Yorigo_home.png';
import yorigoRecipes from './assets/Yorigo_recipes.png';
import yorigoCart from './assets/Yorigo_cart.png';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ko')) {
      setLanguage('ko');
    } else {
      setLanguage('en');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ko' : 'en');
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const t = translations[language];

  return (
    <div className="app">
      <Navbar translations={t} language={language} toggleLanguage={toggleLanguage} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <div className="hero-buttons">
              <a href="https://www.youtube.com/watch?v=FEcT02I3IYA" target="_blank" rel="noopener noreferrer" className="cta-button">{t.hero.cta}</a>
              <a href="https://drive.google.com/file/d/1l1c7_TnGwY9iymKBisZzrdoaOz-5uOmL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary">{t.hero.pitchDeck}</a>
            </div>
            <div className="hero-buttons-second-row">
              <a href="https://getwaitlist.com/waitlist/31599" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary">{t.hero.waitlist}</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="mute-switch"></div>
              <div className="volume-up"></div>
              <div className="volume-down"></div>
              <div className="phone-screen">
                <img src={yorigoHome} alt="Yorigo App Home Screen" className="phone-screenshot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="section discover-section">
        <h2 className="section-title">{t.discover.title}</h2>
        <p className="section-subtitle">{t.discover.subtitle}</p>
        <div className="cards-container">
          <div className="problem-solution-card">
            <div className="card-problem">
              <h3 className="card-title">{t.discover.card1Title}</h3>
              <p className="problem-text">{t.discover.card1Problem}</p>
            </div>
            <div className="arrow-divider">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#FF861C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="card-solution">
              <span className="solution-label">Yorigo Solution</span>
              <p className="solution-text">{t.discover.card1Solution}</p>
            </div>
          </div>
          
          <div className="problem-solution-card">
            <div className="card-problem">
              <h3 className="card-title">{t.discover.card2Title}</h3>
              <p className="problem-text">{t.discover.card2Problem}</p>
            </div>
            <div className="arrow-divider">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#FF861C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="card-solution">
              <span className="solution-label">Yorigo Solution</span>
              <p className="solution-text">{t.discover.card2Solution}</p>
            </div>
          </div>
          
          <div className="problem-solution-card">
            <div className="card-problem">
              <h3 className="card-title">{t.discover.card3Title}</h3>
              <p className="problem-text">{t.discover.card3Problem}</p>
            </div>
            <div className="arrow-divider">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#FF861C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="card-solution">
              <span className="solution-label">Yorigo Solution</span>
              <p className="solution-text">{t.discover.card3Solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section benefits-section">
        {/* Benefit 1 - Nutritional Grading */}
        <div className="benefit-item">
          <div className="benefit-text">
            <span className="benefit-label">{t.benefits.label}</span>
            <h2 className="benefit-title">{t.benefits.benefit1Title}</h2>
            <p className="benefit-description">{t.benefits.benefit1Description}</p>
          </div>
          <div className="benefit-image">
            <div className="phone-mockup">
              <div className="mute-switch"></div>
              <div className="volume-up"></div>
              <div className="volume-down"></div>
              <div className="phone-screen">
                <img src={yorigoHome} alt="Yorigo Home Screen" className="phone-screenshot" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefit 2 - Easy to Read */}
        <div className="benefit-item benefit-item-reverse">
          <div className="benefit-text">
            <span className="benefit-label">{t.benefits.label}</span>
            <h2 className="benefit-title">{t.benefits.benefit2Title}</h2>
            <p className="benefit-description">{t.benefits.benefit2Description}</p>
          </div>
          <div className="benefit-image">
            <div className="phone-mockup">
              <div className="mute-switch"></div>
              <div className="volume-up"></div>
              <div className="volume-down"></div>
              <div className="phone-screen">
                <img src={yorigoRecipes} alt="Yorigo Recipes Screen" className="phone-screenshot" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefit 3 - Smart Planning */}
        <div className="benefit-item">
          <div className="benefit-text">
            <span className="benefit-label">{t.benefits.label}</span>
            <h2 className="benefit-title">{t.benefits.benefit3Title}</h2>
            <p className="benefit-description">{t.benefits.benefit3Description}</p>
          </div>
          <div className="benefit-image">
            <div className="phone-mockup">
              <div className="mute-switch"></div>
              <div className="volume-up"></div>
              <div className="volume-down"></div>
              <div className="phone-screen">
                <img src={yorigoCart} alt="Yorigo Shopping Cart Screen" className="phone-screenshot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Value Section */}
      <section id="our-value" className="section our-value-section">
        <h2 className="section-title">{t.ourValue.title}</h2>
        <p className="section-subtitle">{t.ourValue.subtitle}</p>
        <div className="values-container">
          <div className="value-card">
            <div className="value-icon">📱</div>
            <h3 className="value-title">{t.ourValue.value1Title}</h3>
            <p className="value-text">{t.ourValue.value1Text}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤖</div>
            <h3 className="value-title">{t.ourValue.value2Title}</h3>
            <p className="value-text">{t.ourValue.value2Text}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">📋</div>
            <h3 className="value-title">{t.ourValue.value3Title}</h3>
            <p className="value-text">{t.ourValue.value3Text}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🛒</div>
            <h3 className="value-title">{t.ourValue.value4Title}</h3>
            <p className="value-text">{t.ourValue.value4Text}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section faq-section">
        <h2 className="section-title">{t.faq.title}</h2>
        <div className="faq-container">
          {t.faq.items.map((item, index) => (
            <div key={index} className={`faq-item ${openFAQ === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className={`faq-icon ${openFAQ === index ? 'open' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
        </button>
              <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Yorigo. All rights reserved.</p>
        </div>
      </footer>
      </div>
  );
}

export default App;
