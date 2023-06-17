import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { getUserPreferredLocale, setUserPreferredLocale } from './I18n.init';
import { config } from '../config';

export function useLocalization() {
  const instance = useTranslation('translation');

  return {
    t: instance.t,
    currentLocale: i18n.language,
    changeLocale: (lcid: string) => {
      i18n.changeLanguage(lcid);
      setUserPreferredLocale(lcid);
    },
    locales: config.localization.locales,
    getUserPreferredLocale: getUserPreferredLocale
  };
}