'use client';

import { useState, ReactNode, useEffect } from 'react';
import { i18nContext, Language, defaultLanguage } from '../i18n';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    // Initialize language from URL parameter
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Language;
    if (urlLang && (urlLang === 'en' || urlLang === 'ar')) {
      setLanguage(urlLang);
    }
  }, []);

  return (
    <i18nContext.Provider value={{ language, setLanguage }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </i18nContext.Provider>
  );
} 