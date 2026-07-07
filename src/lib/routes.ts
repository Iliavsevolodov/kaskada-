import type { AppRole } from './roles';

export type AppRoute = {
  label: string;
  href: string;
  roles: AppRole[];
};

export const appRoutes: AppRoute[] = [
  { label: 'Каталог', href: '/catalog/', roles: ['buyer', 'partner'] },
  { label: 'Бренды', href: '/brands/', roles: ['buyer', 'partner'] },
  { label: 'Покупки', href: '/buyers/', roles: ['buyer'] },
  { label: 'Партнёрство', href: '/partners/', roles: ['partner'] },
  { label: 'Продавцам', href: '/sellers/', roles: ['seller'] },
  { label: 'План', href: '/plan/', roles: ['partner', 'admin'] }
];

export function routesForRole(role: AppRole) {
  return appRoutes.filter((route) => route.roles.includes(role));
}
