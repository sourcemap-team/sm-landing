import { useRouter } from 'next/router';

export const useLocale = () => {
  const { locale, defaultLocale } = useRouter();
  return locale || defaultLocale || 'en';
};
