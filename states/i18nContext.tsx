import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { I18n, Scope, TranslateOptions } from 'i18n-js';
import { getLocales } from 'expo-localization';

import en from '@/locales/en.json';
import ja from '@/locales/ja.json';

const { languageCode } = getLocales()[0];

// I18nの初期設定
const i18n = new I18n({
  en,
  ja,
});
i18n.defaultLocale = 'en';
i18n.locale = languageCode;

interface I18nContextType {
  t: (scope: Scope, options?: TranslateOptions) => string;
  locale: string;
  setLocale: (locale: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState(languageCode);

  useEffect(() => {
    i18n.locale = locale;
  }, [locale]);

  // Note: `t`関数を直接Contextに渡すことで、i18nのインスタンスを直接渡す必要がなくなる
  // なのでuseEffectでのlocaleの変更が即座にコンポーネントに反映される
  const t = (scope: Scope, options?: TranslateOptions) => i18n.t(scope, { locale, ...options });

  return <I18nContext.Provider value={{ t, locale, setLocale }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
