'use client';

import { useTranslation } from '../i18n';

export default function Footer() {
  const { t, language } = useTranslation();

  return (
    <footer id="contact" className="footer" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-icon">📋</span>
            {t('footer.quickLinks')}
          </h3>
          <ul className="footer-links">
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#projects">{t('nav.projects')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-icon">📞</span>
            {t('footer.contact')}
          </h3>
          <ul className="footer-links">
            <li>
              <a href="tel:+97433501199">
                <span className="footer-icon">📞</span>
                +974 33501199
              </a>
            </li>
            <li>
              <a href="mailto:najee.kashkool.nk@gmail.com">
                <span className="footer-icon">✉️</span>
                najee.kashkool.nk@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:najee.najee@hotmail.com">
                <span className="footer-icon">✉️</span>
                najee.najee@hotmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-icon">📱</span>
            {t('footer.social')}
          </h3>
          <ul className="footer-links">
            <li>
              <a href="https://www.instagram.com/q.k_design2016?igsh=bXZ0a2YyeGFlaXZy" target="_blank" rel="noopener noreferrer">
                <span className="footer-icon">📸</span>
                {t('contact.followInstagram')}
              </a>
            </li>
            <li>
              <a href="https://wa.me/97433501199" target="_blank" rel="noopener noreferrer">
                <span className="footer-icon">💬</span>
                {t('contact.chatWhatsApp')}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} AL-Amal Engineering. {t('footer.copyright')}</p>
      </div>
    </footer>
  );
} 