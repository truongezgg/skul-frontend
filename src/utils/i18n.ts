import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATIONS_EN } from 'translations/en';
import { TRANSLATIONS_VI } from 'translations/vi';
import { Language } from 'types/enum';

i18next.use(initReactI18next).init({
  fallbackLng: Language.ENGLISH,
  debug: false,
  supportedLngs: [Language.ENGLISH, Language.VIETNAMESE],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    [`${Language.VIETNAMESE}`]: { translation: TRANSLATIONS_VI },
    [`${Language.ENGLISH}`]: { translation: TRANSLATIONS_EN },
  },
});

export default i18next;
