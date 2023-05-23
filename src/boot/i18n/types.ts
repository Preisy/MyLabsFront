export type Locale = 'ru-RU' | 'en-US';

export type I18nMessages = {
  [locale in Locale]: {
    [key: string]: Messages | string;
  };
};

interface Messages {
  [key: string]: Messages | string;
}
