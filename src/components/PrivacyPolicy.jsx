import { useEffect } from 'react';
import Navbar from './Navbar';
import { translations } from '../translations';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ language, toggleLanguage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = translations[language];

  return (
    <div className="privacy-policy-page">
      <Navbar translations={t} language={language} toggleLanguage={toggleLanguage} />
      <div className="privacy-container">
        <h1 className="privacy-title">
          {language === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
        </h1>
        <div className="pdf-viewer-container">
          <iframe
            src="/privacy-policy.pdf#toolbar=1"
            title="Privacy Policy"
            className="pdf-viewer"
            type="application/pdf"
          />
        </div>
        <div className="pdf-download-link">
          <a 
            href="/privacy-policy.pdf" 
            download
            className="download-button"
          >
            {language === 'ko' ? 'PDF 다운로드' : 'Download PDF'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

