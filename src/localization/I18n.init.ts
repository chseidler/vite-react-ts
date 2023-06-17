import { initReactI18next } from 'react-i18next';
import i18n, { BackendModule, InitOptions, ReadCallback, Services, TOptions } from 'i18next';
import { apiClient } from '../api-client';
import { config } from '../config';

const localStorageConfig = config.localization.localStorageCache;

export const userPreferredLocaleStorageKey = 'user-lcid';

export const getUserPreferredLocale = () => {
  const availableLocales = config.localization.locales;
  const preferredLocale = localStorage.getItem(userPreferredLocaleStorageKey);

  if (!preferredLocale) {
    const defaultLocale = availableLocales.find(o => o.isDefault)?.key;

    return defaultLocale;
  }

  return preferredLocale;
};

export const setUserPreferredLocale = (lcid: string) => {
  localStorage.setItem(userPreferredLocaleStorageKey, lcid);
};

const getLocaleData = async (namespace: string, lcid: string): Promise<NonNullable<unknown>> => {
  const localeStorageKey = `lcid-data-${lcid}`;
  const cacheEntryStr = localStorage.getItem(localeStorageKey) || '{}';
  let cacheEntry: {
    appVersion: number,
    expiresAt: number,
    json: string
  } = {
    appVersion: -1,
    expiresAt: 0,
    json: ''
  };

  if (localStorageConfig.enabled) {
    try {
      cacheEntry = JSON.parse(cacheEntryStr);
    } catch (err) {
      console.warn('error parsing data', cacheEntryStr);
    }
  }

  if (cacheEntry && cacheEntry.appVersion === config.global.version &&
      cacheEntry.expiresAt - Date.now() > 0) {
    return cacheEntry.json;
  } else {
    const translationData = await apiClient.localization.fetchTranslation(namespace, lcid);

    if (localStorageConfig.enabled) {
      const dt = new Date();
      const expiresAt = dt.setMinutes(dt.getMinutes() + Number(localStorageConfig.expirationInMinutes));

      localStorage.setItem(localeStorageKey, JSON.stringify({
        appVersion: config.global.version,
        expiresAt: expiresAt,
        json: translationData
      }));
    }

    return translationData;
  }
};

const backendModule: BackendModule = {
  type: 'backend',
  init(services: Services, backendOptions: TOptions, i18nextOptions: InitOptions): void {},
  read(language: string, namespace: string, callback: ReadCallback): void {
    console.log('backendModule read', language, namespace);
    const key = language;
    getLocaleData(namespace, key).then(obj => callback(null, obj));

  }
};

i18n
  .use(initReactI18next)
  .use(backendModule)
  .init({
    lng: getUserPreferredLocale(),
    fallbackLng: 'en-US',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    load: 'currentOnly'
  });