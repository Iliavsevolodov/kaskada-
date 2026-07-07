export type AppRole = 'buyer' | 'partner' | 'seller' | 'admin';

export const appRoles: { id: AppRole; title: string; description: string }[] = [
  { id: 'buyer', title: 'Покупатель', description: 'Каталог, корзина, заказы, бонусы и любимые бренды.' },
  { id: 'partner', title: 'Партнёр', description: 'Личная ссылка, структура, оборот, начисления и статусы.' },
  { id: 'seller', title: 'Продавец', description: 'Товары, заказы, финансы, подписка и витрина бренда.' },
  { id: 'admin', title: 'Администратор', description: 'Модерация, выплаты, пользователи, антифрод и настройки.' }
];

export const defaultRole: AppRole = 'buyer';
