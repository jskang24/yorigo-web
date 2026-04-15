import { useEffect } from 'react';
import Navbar from './Navbar';
import { translations } from '../translations';
import './PrivacyPolicy.css';

const PRIVACY_POLICY_NOTION_URL =
  'https://grape-rudbeckia-e4d.notion.site/34280755109880768a20d68d3051b3ad';

const PrivacyPolicy = ({ language, toggleLanguage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = translations[language];
  const p = t.privacyPage;

  return (
    <div className="privacy-policy-page">
      <Navbar translations={t} language={language} toggleLanguage={toggleLanguage} />
      <div className="privacy-container">
        <div className="privacy-card">
          <h1 className="privacy-title">{p.title}</h1>
          <p className="privacy-intro">{p.intro}</p>
          <div className="privacy-actions">
            <a
              href={PRIVACY_POLICY_NOTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              {p.openNotion}
            </a>
          </div>
          <p className="privacy-url" translate="no">
            <a href={PRIVACY_POLICY_NOTION_URL} target="_blank" rel="noopener noreferrer">
              {PRIVACY_POLICY_NOTION_URL}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
