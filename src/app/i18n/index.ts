import { createContext, useContext } from 'react';
import en from './locales/en.json';
import ar from './locales/ar.json';

export const languages = {
  en,
  ar,
};

export type Language = keyof typeof languages;
export type TranslationKey = keyof typeof en;

export const defaultLanguage: Language = 'en';

export const i18nContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: defaultLanguage,
  setLanguage: () => {},
});

export const useTranslation = () => {
  const context = useContext(i18nContext);
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = languages[context.language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value as string;
  };

  return { t, language: context.language, setLanguage: context.setLanguage };
}; 