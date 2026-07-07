export const categories = [
  'Новинки',
  'Акции',
  'Скидки',
  'Косметика',
  'Эко-дом',
  'Дом и уют',
  'Подарки',
  'Чай и продукты',
  'Товары для животных',
  'Детские товары'
];

export const navigation = [
  { label: 'Каталог', href: '/catalog/' },
  { label: 'Бренды', href: '/brands/' },
  { label: 'Новинки', href: '/catalog/#new' },
  { label: 'Акции', href: '/catalog/#sale' },
  { label: 'Партнёрам', href: '/partners/' },
  { label: 'Продавцам', href: '/sellers/' },
  { label: 'Приложение', href: '/buyer-app/' }
];

export const products = [
  {
    id: 'cream-north',
    name: 'Крем для рук Северное сияние',
    brand: 'Северная Лаборатория',
    category: 'Косметика',
    price: 890,
    oldPrice: 1190,
    rating: 4.9,
    cashback: 89,
    tag: 'new',
    badge: 'Новинка',
    description: 'Питательный крем небольшими партиями для ежедневного ухода.',
    image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'eco-clean',
    name: 'Набор для безопасной уборки',
    brand: 'Чистый Дом',
    category: 'Эко-дом',
    price: 2490,
    oldPrice: 2990,
    rating: 4.8,
    cashback: 249,
    tag: 'sale',
    badge: 'Акция',
    description: 'Стартовый набор для кухни и ванной без агрессивной химии.',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'candle-forest',
    name: 'Свеча Таёжный вечер',
    brand: 'Мастерская Тепла',
    category: 'Дом и уют',
    price: 1290,
    oldPrice: 1590,
    rating: 5,
    cashback: 129,
    tag: 'home',
    badge: 'Бестселлер',
    description: 'Ароматическая свеча из натурального воска в крафтовой упаковке.',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'tea-balance',
    name: 'Травяной чай Баланс',
    brand: 'Травы Севера',
    category: 'Чай и продукты',
    price: 690,
    oldPrice: 790,
    rating: 4.7,
    cashback: 69,
    tag: 'daily',
    badge: 'Каждый день',
    description: 'Сбор трав для спокойного вечернего ритуала.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'pet-care',
    name: 'Бальзам для лап Paw Care',
    brand: 'Лапки Дома',
    category: 'Товары для животных',
    price: 790,
    oldPrice: 990,
    rating: 4.9,
    cashback: 79,
    tag: 'pets',
    badge: 'Сезон',
    description: 'Защитный бальзам для лап после прогулок, соли и холода.',
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gift-box',
    name: 'Подарочный набор Local Love',
    brand: 'Подарки Рядом',
    category: 'Подарки',
    price: 3490,
    oldPrice: 4290,
    rating: 4.9,
    cashback: 349,
    tag: 'gift',
    badge: 'Подарок',
    description: 'Готовый набор от локальных мастеров для красивого подарка.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80'
  }
];

export const brands = [
  {
    id: 'north-lab',
    name: 'Северная Лаборатория',
    city: 'Вологда',
    category: 'Косметика',
    orders: 1280,
    rating: 4.9,
    description: 'Локальная лаборатория натурального ухода небольшими партиями.',
    badge: 'локальный уход',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'clean-home',
    name: 'Чистый Дом',
    city: 'Ярославль',
    category: 'Эко-дом',
    orders: 2140,
    rating: 4.8,
    description: 'Безопасные средства для быта и повторных покупок семьи.',
    badge: 'повторный спрос',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'warm-workshop',
    name: 'Мастерская Тепла',
    city: 'Кострома',
    category: 'Дом и уют',
    orders: 740,
    rating: 5,
    description: 'Свечи, ароматы и предметы уюта ручной работы.',
    badge: 'ручная работа',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'north-herbs',
    name: 'Травы Севера',
    city: 'Архангельск',
    category: 'Чай и продукты',
    orders: 1620,
    rating: 4.7,
    description: 'Травяные сборы, чайные ритуалы и натуральные продукты.',
    badge: 'полезные продукты',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=80'
  }
];

export const heroSlides = [
  {
    title: 'Новая витрина локальных брендов',
    subtitle: 'Косметика, дом, подарки и полезные продукты в едином аккуратном интерфейсе.',
    href: '/kaskada-/catalog/',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Акции недели',
    subtitle: 'Подборки товаров с повторным спросом и бонусным оборотом.',
    href: '/kaskada-/catalog/#sale',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Подарки от локальных мастеров',
    subtitle: 'Готовые наборы и тематические решения для красивого повода.',
    href: '/kaskada-/catalog/#gift',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1400&q=80'
  }
];

export const thematicFeeds = [
  { title: 'Новинки', id: 'new', subtitle: 'Свежие товары и новые бренды', filter: 'new' },
  { title: 'Акции', id: 'sale', subtitle: 'Выгодные предложения недели', filter: 'sale' },
  { title: 'Скидки', id: 'discounts', subtitle: 'Товары с заметной выгодой', filter: 'sale' },
  { title: 'Для дома', id: 'home', subtitle: 'Уют, чистота и повседневный спрос', filter: 'home' },
  { title: 'Подарки', id: 'gift', subtitle: 'Готовые решения для красивого повода', filter: 'gift' }
];

export const platformStats = [
  { label: 'комиссия с продажи', value: '20%' },
  { label: 'уходит продавцу', value: '80%' },
  { label: 'реферальный фонд', value: '10%' },
  { label: 'подписка продавца', value: '1490 ₽' }
];

export const buyerBenefits = [
  'Качественные товары от локальных брендов и малых производств',
  'Защита заказа, история покупок и прозрачные условия возврата',
  'Бонусы, кэшбэк и участие в акциях внутри платформы',
  'Повторные покупки без поиска продавца в мессенджерах'
];

export const sellerBenefits = [
  'Первые 2 месяца без подписки — можно проверить спрос',
  '20% комиссия только с успешной продажи, без оплаты за клики и показы',
  'Партнёрская сеть помогает продвигать товары через рекомендации',
  'Кабинет продавца: товары, заказы, финансы, подписка и аналитика'
];

export const partnerBenefits = [
  'Доход начисляется только с подтверждённого товарооборота',
  'Партнёр не обязан привлекать именно клиентов — он строит оборот',
  '6 линий выплат и квалификации по сильным независимым веткам',
  'Личная ссылка, витрина, структура, начисления и статусный прогресс'
];

export const statuses = [
  { name: 'Ассоциат', turnover: 'Регистрация', branches: 'Без условий', pool: '—' },
  { name: 'Партнёр', turnover: '5 000 ₽ личной активности', branches: '1 линия', pool: '—' },
  { name: 'Партнёр Silver', turnover: '100 000 ₽', branches: '2 активные ветки', pool: '0.25 доли' },
  { name: 'Партнёр Gold', turnover: '300 000 ₽', branches: '2 ветки Партнёр', pool: '0.5 доли' },
  { name: 'Лидер', turnover: '1 000 000 ₽', branches: '2 ветки Партнёр Gold', pool: '1 доля' },
  { name: 'Лидер Silver', turnover: '2 500 000 ₽', branches: '2 ветки Лидер + 1 Партнёр Gold', pool: '2 доли' },
  { name: 'Лидер Gold', turnover: '5 000 000 ₽', branches: '2 ветки Лидер Silver + 1 Лидер', pool: '3 доли' },
  { name: 'Амбассадор', turnover: '10 000 000 ₽', branches: '2 ветки Лидер Gold + 2 Лидер', pool: '5 долей' },
  { name: 'Амбассадор Gold', turnover: '20 000 000 ₽', branches: '2 ветки Амбассадор + 2 Лидер Gold', pool: '8 долей' },
  { name: 'Амбассадор Platinum', turnover: '50 000 000 ₽', branches: '2 ветки Амбассадор Gold + 2 Амбассадор', pool: '12 долей' },
  { name: 'Президент', turnover: '100 000 000 ₽', branches: '2 ветки Амбассадор Platinum + 3 Лидер Gold', pool: '20 долей' },
  { name: 'Президент 1 Бриллиант', turnover: '200 000 000 ₽', branches: '1 президентская ветка + 6 от Лидер Gold', pool: '30 долей' },
  { name: 'Президент 3 Бриллианта', turnover: '700 000 000 ₽', branches: '3 президентские ветки + 4 от Амбассадор', pool: '60 долей' }
];

export const dashboardMetrics = [
  { label: 'Оборот структуры', value: '14 800 000 ₽', delta: '+18% за период' },
  { label: 'Начисления в ожидании', value: '286 400 ₽', delta: 'после срока возврата' },
  { label: 'Активные ветки', value: '7', delta: '4 квалификационные' },
  { label: 'Текущий статус', value: 'Амбассадор', delta: 'до Gold: 5.2 млн ₽' }
];

export const sellerDashboardMetrics = [
  { label: 'Продажи месяца', value: '842 000 ₽', delta: '128 заказов' },
  { label: 'К выплате продавцу', value: '673 600 ₽', delta: '80% после комиссии' },
  { label: 'Подписка', value: '1490 ₽', delta: 'активна до 30 числа' },
  { label: 'Рейтинг бренда', value: '4.9', delta: 'на основе отзывов' }
];
