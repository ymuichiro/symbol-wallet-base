import { createContext, ReactNode, useState, useEffect, useRef } from 'react';
import { I18n, Scope, TranslateOptions } from 'i18n-js';

import useUpdateEffect from '@/hooks/useUpdateEffect';
import { LanguageService } from '@/services/LanguageService';

import en from '@/languages/en';
import ja from '@/languages/ja';

// I18nの初期設定
const i18n = new I18n({
  en,
  ja,
});
i18n.defaultLocale = 'en';

interface I18nContextType {
  t: (scope: Scope, options?: TranslateOptions) => string;
  locale: string;
  setLocale: (locale: string) => void;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    async function loadLocale() {
      const languageCode = await LanguageService.getLanguageCode();
      setLocale(languageCode);
    }

    loadLocale();
  }, []);

  useUpdateEffect(() => {
    i18n.locale = locale;
    async function setLanguageCode() {
      await LanguageService.setLanguageCode(locale);
    }
    setLanguageCode();
  }, [locale]);

  // Note: `t`関数を直接Contextに渡すことで、i18nのインスタンスを直接渡す必要がなくなる
  // なのでuseEffectでのlocaleの変更が即座にコンポーネントに反映される
  const t = (scope: Scope, options?: TranslateOptions) => i18n.t(scope, { locale, ...options });

  return <I18nContext.Provider value={{ t, locale, setLocale }}>{children}</I18nContext.Provider>;
};
