export const categories = [
  'Эко-дом',
  'Косметика',
  'Дом и уют',
  'Подарки',
  'Чай и полезные продукты',
  'Товары для животных',
  'Детские товары',
  'Ручная работа'
];

export const products = [
  {
    id: 'cream-north',
    name: 'Крем для рук Северное сияние',
    brand: 'Северная Лаборатория',
    category: 'Косметика',
    price: 890,
    tag: 'локальный уход',
    description: 'Питательный крем небольшими партиями для ежедневного ухода.'
  },
  {
    id: 'eco-clean',
    name: 'Набор для безопасной уборки',
    brand: 'Чистый Дом',
    category: 'Эко-дом',
    price: 2490,
    tag: 'повторный спрос',
    description: 'Стартовый набор для кухни и ванной без агрессивной химии.'
  },
  {
    id: 'candle-forest',
    name: 'Свеча Таёжный вечер',
    brand: 'Мастерская Тепла',
    category: 'Дом и уют',
    price: 1290,
    tag: 'ручная работа',
    description: 'Ароматическая свеча из натурального воска в крафтовой упаковке.'
  },
  {
    id: 'tea-balance',
    name: 'Травяной чай Баланс',
    brand: 'Травы Севера',
    category: 'Чай и полезные продукты',
    price: 690,
    tag: 'ежемесячная покупка',
    description: 'Сбор трав для спокойного вечернего ритуала.'
  }
];

export const statuses = [
  { name: 'Ассоциат', turnover: 'Регистрация', branches: 'Без условий' },
  { name: 'Партнёр', turnover: '5 000 ₽ личной активности', branches: '1 линия' },
  { name: 'Партнёр Silver', turnover: '100 000 ₽', branches: '2 активные ветки' },
  { name: 'Партнёр Gold', turnover: '300 000 ₽', branches: '2 ветки Партнёр' },
  { name: 'Лидер', turnover: '1 000 000 ₽', branches: '2 ветки Партнёр Gold' },
  { name: 'Лидер Silver', turnover: '2 500 000 ₽', branches: '2 ветки Лидер + 1 Партнёр Gold' },
  { name: 'Лидер Gold', turnover: '5 000 000 ₽', branches: '2 ветки Лидер Silver + 1 Лидер' },
  { name: 'Амбассадор', turnover: '10 000 000 ₽', branches: '2 ветки Лидер Gold + 2 Лидер' },
  { name: 'Амбассадор Gold', turnover: '20 000 000 ₽', branches: '2 ветки Амбассадор + 2 Лидер Gold' },
  { name: 'Амбассадор Platinum', turnover: '50 000 000 ₽', branches: '2 ветки Амбассадор Gold + 2 Амбассадор' },
  { name: 'Президент', turnover: '100 000 000 ₽', branches: '2 ветки Амбассадор Platinum + 3 Лидер Gold' }
];
