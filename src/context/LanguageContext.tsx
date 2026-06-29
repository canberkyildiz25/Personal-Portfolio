import { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Lang, type TranslationKey } from '../i18n/translations';

type LanguageContextType = {
  lang: Lang;
  t: (key: TranslationKey) => string;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  t: (key) => translations.en[key],
  setLang: () => {},
});

function detectLang(): Lang {
  const code = navigator.language.toLowerCase();
  if (code.startsWith('tr')) return 'tr';
  if (code.startsWith('ru')) return 'ru';
  if (code.startsWith('it')) return 'it';
  if (code.startsWith('es')) return 'es';
  if (code.startsWith('de')) return 'de';
  if (code.startsWith('fr')) return 'fr';
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: TranslationKey): string => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
