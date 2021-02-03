import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from './locales/en_US.json';
import bnLang from './locales/bn_BD.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enLang,
      },
      bn: {
        translation: bnLang,
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

function Translator() {
  return <></>;
}

export default Translator;
