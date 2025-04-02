'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '../i18n';
import { useState } from 'react';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const { t, language, setLanguage } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <nav className={`nav ${className}`}>
      <div className="container nav-content">
        <Link href="/" className="logo">
          <div className="logo-container">
            <Image
              src="/images/al-amal-engineering-icon.png"
              alt="AL-Amal Engineering"
              width={50}
              height={50}
              className="logo-icon"
              priority
            />
            <span className="logo-text">AL-Amal Engineering</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link href="#home">
            <span className="nav-icon">🏠</span>
            <span>{t('nav.home')}</span>
          </Link>
          <Link href="#services">
            <span className="nav-icon">🛠️</span>
            <span>{t('nav.services')}</span>
          </Link>
          <Link href="#projects">
            <span className="nav-icon">📋</span>
            <span>{t('nav.projects')}</span>
          </Link>
          <Link href="#about">
            <span className="nav-icon">ℹ️</span>
            <span>{t('nav.about')}</span>
          </Link>
          <Link href="#contact">
            <span className="nav-icon">📞</span>
            <span>{t('nav.contact')}</span>
          </Link>
          <button onClick={toggleLanguage} className="language-switcher">
            <span className="nav-icon">🌐</span>
            <span>{language === 'en' ? 'عربي' : 'English'}</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-button"
        >
          <span className="nav-icon">☰</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <Link href="#home" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">🏠</span>
            <span>{t('nav.home')}</span>
          </Link>
          <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">🛠️</span>
            <span>{t('nav.services')}</span>
          </Link>
          <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">📋</span>
            <span>{t('nav.projects')}</span>
          </Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">ℹ️</span>
            <span>{t('nav.about')}</span>
          </Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">📞</span>
            <span>{t('nav.contact')}</span>
          </Link>
          <button onClick={toggleLanguage} className="language-switcher">
            <span className="nav-icon">🌐</span>
            <span>{language === 'en' ? 'عربي' : 'English'}</span>
          </button>
        </div>
      )}
    </nav>
  );
} 