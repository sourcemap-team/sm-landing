type Pricing = {
  title: {
    [key: string]: string;
  };
  lowPrice: {
    text: {
      [key: string]: string;
    };
    time: {
      [key: string]: string;
    };
    price: {
      [key: string]: string;
    };
  };
  fullPrice: {
    text: {
      [key: string]: string;
    };
    time: {
      [key: string]: string;
    };
    price: {
      [key: string]: string;
    };
  };
};

const PRICING_TEXT: Pricing = {
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
      ru: '3500₽/час',
      en: '$50/hour',
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
      ru: '3000₽/час',
      en: '$45/hour',
    },
  },
};

export { PRICING_TEXT };
