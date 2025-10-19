import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { translations } from './translations';
import yorigoHome from './assets/Yorigo_home.png';
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
            <button className="cta-button">{t.hero.cta}</button>
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
          <div className="card">
            <div className="card-image-placeholder">
              <span>Screen recording<br />of gathering link<br />from tiktok</span>
            </div>
            <h3 className="card-title">{t.discover.card1Title}</h3>
            <p className="card-text">{t.discover.card1Text}</p>
          </div>
          <div className="card">
            <div className="card-image-placeholder">
              <span>loading analyzing<br />animation of stuff</span>
            </div>
            <h3 className="card-title">{t.discover.card2Title}</h3>
            <p className="card-text">{t.discover.card2Text}</p>
      </div>
      <div className="card">
            <div className="card-image-placeholder">
              <span>list of recipe and<br />the shopping cart</span>
            </div>
            <h3 className="card-title">{t.discover.card3Title}</h3>
            <p className="card-text">{t.discover.card3Text}</p>
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
                <div className="recipe-content">
                  <div className="recipe-header">레시피</div>
                  <div className="recipe-steps-list">
                    <div className="step-item">
                      <span className="step-number">1</span>
                      <span className="step-text">냄비에 물과 200g의 대구살을 넣어 끓여서 삶아요.</span>
                    </div>
                    <div className="step-item">
                      <span className="step-number">2</span>
                      <span className="step-text">물 2컵을 부은 끓입니다.</span>
                    </div>
                    <div className="step-item">
                      <span className="step-number">3</span>
                      <span className="step-text">무를 1인분 넣고 보글더 삶립니다.</span>
                    </div>
                    <div className="step-item">
                      <span className="step-number">4</span>
                      <span className="step-text">다진, 고추가루, 간장, 산장 마요네즈를 고고 간을 합니다.</span>
                    </div>
                    <div className="step-item">
                      <span className="step-number">5</span>
                      <span className="step-text">수시로 다 끓은 후 물을 봅니다.</span>
                    </div>
                  </div>
                  <div className="nutrition-info">
                    <div className="nutrition-title">영양분석 (1인분)</div>
                    <div className="nutrition-grid">
                      <div className="nutrition-item">
                        <div className="nutrition-value">320</div>
                        <div className="nutrition-label">칼로리 (kcal)</div>
                      </div>
                      <div className="nutrition-item">
                        <div className="nutrition-value">25g</div>
                        <div className="nutrition-label">단백질</div>
                      </div>
                      <div className="nutrition-item">
                        <div className="nutrition-value">15g</div>
                        <div className="nutrition-label">탄수화물</div>
                      </div>
                      <div className="nutrition-item">
                        <div className="nutrition-value">18g</div>
                        <div className="nutrition-label">지방</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="recipe-detail-content">
                  <div className="recipe-detail-header">
                    <span className="back-btn">← 요리고</span>
                    <button className="save-btn">플레이보</button>
                  </div>
                  <div className="recipe-detail-title">김치째개</div>
                  <div className="recipe-detail-meta">320 kcal • 인분 불분: ▲</div>
                  <div className="video-placeholder">
                    <div className="play-button">▶</div>
                    <div className="video-text">영상 시작하기</div>
                  </div>
                  <div className="serving-control">
                    <span>몇 프로 (인분)</span>
                    <div className="counter">
                      <button>-</button>
                      <span>2</span>
                      <button>+</button>
                    </div>
                  </div>
                  <div className="ingredients-list">
                    <div className="ingredients-title">재료</div>
                    <div className="ingredient-item">
                      <span className="ingredient-icon">🥩</span>
                      <span className="ingredient-name">돼지</span>
                      <span className="ingredient-amount">300g/g</span>
                    </div>
                    <div className="ingredient-item">
                      <span className="ingredient-icon">🥬</span>
                      <span className="ingredient-name">배추김치</span>
                      <span className="ingredient-amount">150g/g</span>
                    </div>
                    <div className="ingredient-item">
                      <span className="ingredient-icon">🧄</span>
                      <span className="ingredient-name">무우</span>
                      <span className="ingredient-amount">반모</span>
                    </div>
                  </div>
                </div>
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
                <div className="placeholder-content">
                  <span>PLACEHOLDER</span>
                  <p>Shopping List & Meal Planning Interface</p>
                </div>
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
            <div className="value-icon">🎯</div>
            <h3 className="value-title">{t.ourValue.value1Title}</h3>
            <p className="value-text">{t.ourValue.value1Text}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">✨</div>
            <h3 className="value-title">{t.ourValue.value2Title}</h3>
            <p className="value-text">{t.ourValue.value2Text}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💚</div>
            <h3 className="value-title">{t.ourValue.value3Title}</h3>
            <p className="value-text">{t.ourValue.value3Text}</p>
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
