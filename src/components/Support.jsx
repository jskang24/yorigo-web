import { useEffect } from 'react';
import Navbar from './Navbar';
import { translations } from '../translations';
import './Support.css';

const CONTACT = {
  name: 'Kyung Ryun Lee (이경륜)',
  email: 'yorigoadm@gmail.com',
  phoneDisplay: '010-2131-6179',
  phoneTel: '+821021316179',
  addressKo: '서울 서대문구 남가좌동 5-190 202호',
  addressEn: 'Room 202, 5-190 Namgajwa-dong, Seodaemun-gu, Seoul, Republic of Korea',
};

const Support = ({ language, toggleLanguage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = translations[language];
  const s = t.support;
  const address = language === 'ko' ? CONTACT.addressKo : CONTACT.addressEn;

  return (
    <div className="support-page">
      <Navbar translations={t} language={language} toggleLanguage={toggleLanguage} />
      <div className="support-container">
        <h1 className="support-title">{s.title}</h1>
        <p className="support-intro">{s.intro}</p>
        <dl className="support-details">
          <div className="support-row">
            <dt>{s.nameLabel}</dt>
            <dd>{CONTACT.name}</dd>
          </div>
          <div className="support-row">
            <dt>{s.emailLabel}</dt>
            <dd>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </dd>
          </div>
          <div className="support-row">
            <dt>{s.phoneLabel}</dt>
            <dd>
              <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
            </dd>
          </div>
          <div className="support-row">
            <dt>{s.addressLabel}</dt>
            <dd>{address}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Support;
