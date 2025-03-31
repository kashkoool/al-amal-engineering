'use client';

import { useContext } from 'react';
import { i18nContext } from '../i18n';

export function LanguageSwitcher() {
  const { language, setLanguage } = useContext(i18nContext);

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="language-switcher"
    >
      {language === 'en' ? 'عربي' : 'English'}
    </button>
  );
} 