import { ReactNode } from 'react';
import styles from './Pricing.module.scss';

type PriceData = {
  text: Record<string, string>;
  time: Record<string, string>;
  price: Record<string, ReactNode>;
};

type Pricing = {
  title: Record<string, string>;
  lowPrice: PriceData;
  fullPrice: PriceData;
};

export const PRICING: Pricing = {
  title: {
    en: 'Pricing',
    ru: 'Cтоимость',
  },
  lowPrice: {
    text: {
      ru: 'Мы работаем по принципу Time & Material, поэтому клиент оплачивает фактически затраченное время наших специалистов на проекте.',
      en: 'We work according to Time & Material, so the client pays for the actual time spent by our specialists on the project.',
    },
    time: {
      ru: 'До 100 часов в месяц',
      en: 'Up to 100 hours per month',
    },
    price: {
      ru: (
        <>
          от 2500
          <span className={styles.priceChar}>
            <span className={styles.rub}>&nbsp;Р</span>/час
          </span>
        </>
      ),
      en: <>$35/hour</>,
    },
  },
  fullPrice: {
    text: {
      ru: 'Мы работаем спринтами длительностью 1-2 недели и гибко подстраиваемся под процессы клиента, предоставляем прозрачные отчёты по проделанной работе и всегда гарантируем результат.',
      en: "We work in sprints lasting 1-2 weeks, adapt flexibly to the client's processes, provide transparent reports on the work done, and always guarantee the result.",
    },
    time: {
      ru: 'Более 100 часов в месяц',
      en: 'Over 100 hours per month',
    },
    price: {
      ru: (
        <>
          от 2000
          <span className={styles.priceChar}>
            <span className={styles.rub}>&nbsp;Р</span>/час
          </span>
        </>
      ),
      en: <>from $25/hour</>,
    },
  },
};
