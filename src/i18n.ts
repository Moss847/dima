import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируйте файлы переводов
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n
  .use(initReactI18next) // передаем i18n в react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    lng: 'en', // язык по умолчанию
    fallbackLng: 'en', // язык, который будет использоваться, если перевод не найден
    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },
  });

export default i18n;
