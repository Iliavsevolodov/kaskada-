'use client';

import { useState } from 'react';
import { HiOutlineShoppingBag, HiOutlineUserGroup } from 'react-icons/hi2';

const views = {
  buyer: {
    label: 'Покупатель',
    icon: 'buyer',
    title: 'Каталог, заказы и бонусы',
    text: 'Покупатель работает с витриной, брендами, корзиной и историей покупок.',
    cta: 'Открыть каталог',
    href: '/kaskada-/catalog/',
    cards: ['Каталог товаров', 'Избранные бренды', 'История заказов', 'Бонусы']
  },
  partner: {
    label: 'Партнёр',
    icon: 'partner',
    title: 'Оборот, структура и начисления',
    text: 'Партнёр видит личную ссылку, линии, товарооборот, статусы и вознаграждения.',
    cta: 'Открыть партнёрский режим',
    href: '/kaskada-/partners/',
    cards: ['Личная ссылка', '6 линий', 'Оборот структуры', 'Статус']
  }
};

type Role = keyof typeof views;

export function RoleExperienceSwitcher() {
  const [role, setRole] = useState<Role>('buyer');
  const current = views[role];
  const Icon = role === 'buyer' ? HiOutlineShoppingBag : HiOutlineUserGroup;

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="card-glass reveal-up rounded-[1.75rem] p-6 shadow-soft lg:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label text-[11px] font-bold text-neutral-500">Режим интерфейса</p>
            <h2 className="display-font mt-2 text-4xl font-semibold tracking-tight">Интерфейс под роль пользователя</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">После авторизации платформа будет открывать нужный сценарий автоматически.</p>
          </div>
          <div className="grid grid-cols-2 gap-2 rounded-full border border-graphite/8 bg-white/76 p-1.5">
            {Object.entries(views).map(([key, item]) => {
              const TabIcon = key === 'buyer' ? HiOutlineShoppingBag : HiOutlineUserGroup;
              return (
                <button
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold transition ${role === key ? 'bg-graphite text-cream' : 'text-neutral-700 hover:bg-white'}`}
                  key={key}
                  onClick={() => setRole(key as Role)}
                  type="button"
                >
                  <TabIcon /> {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[1.4rem] border border-graphite/8 bg-white/76 p-5">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-graphite text-xl text-cream"><Icon /></div>
            <p className="section-label text-[10px] font-bold text-neutral-500">{current.label}</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">{current.title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{current.text}</p>
            <a className="premium-button mt-5 border border-graphite/10 bg-white text-graphite" href={current.href}>{current.cta}</a>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {current.cards.map((card, index) => (
              <div className="rounded-[1.2rem] border border-graphite/8 bg-white/74 p-5" key={card}>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">0{index + 1}</p>
                <p className="mt-2 text-base font-bold">{card}</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">Отдельный блок будущего кабинета.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
