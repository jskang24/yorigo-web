import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Support from './components/Support';
import { useState, useEffect } from 'react';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('en');

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

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route 
        path="/privacy" 
        element={<PrivacyPolicy language={language} toggleLanguage={toggleLanguage} />} 
      />
      <Route
        path="/support"
        element={<Support language={language} toggleLanguage={toggleLanguage} />}
      />
    </Routes>
  );
}

export default App;
