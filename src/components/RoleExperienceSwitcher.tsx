'use client';

import { useState } from 'react';

const views = {
  buyer: {
    label: 'Покупатель',
    icon: '🛒',
    title: 'Витрина, заказы и бонусы',
    text: 'Покупатель видит каталог, бренды, корзину, историю заказов, бонусы и повторные покупки.',
    cta: 'Перейти в каталог',
    href: '/kaskada-/catalog/',
    cards: ['Каталог товаров', 'Любимые бренды', 'История заказов', 'Бонусы и акции']
  },
  partner: {
    label: 'Партнёр',
    icon: '🤝',
    title: 'Оборот, структура и начисления',
    text: 'Партнёр видит личную ссылку, витрину, линии, оборот, статусы и начисления.',
    cta: 'Открыть партнёрский режим',
    href: '/kaskada-/partners/',
    cards: ['Личная ссылка', '6 линий', 'Оборот структуры', 'Прогресс статуса']
  }
};

type Role = keyof typeof views;

export function RoleExperienceSwitcher() {
  const [role, setRole] = useState<Role>('buyer');
  const current = views[role];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="card-glass reveal-up rounded-[2.2rem] p-6 shadow-soft lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label text-xs font-bold text-gold">Режим приложения</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">Разный интерфейс под роль пользователя</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">До авторизации человек может выбрать режим вручную. После входа платформа будет открывать нужный кабинет автоматически.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-white/70 p-2">
            {Object.entries(views).map(([key, item]) => (
              <button
                className={`rounded-[1.1rem] px-5 py-4 text-sm font-black transition ${role === key ? 'bg-graphite text-cream shadow-soft' : 'text-graphite hover:bg-white'}`}
                key={key}
                onClick={() => setRole(key as Role)}
                type="button"
              >
                <span className="mr-2">{item.icon}</span>{item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[1.8rem] bg-graphite p-7 text-cream">
            <div className="float-soft absolute right-8 top-8 h-24 w-24 rounded-full bg-gold/25 blur-2xl" />
            <div className="relative">
              <div className="float-soft mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/10 text-5xl">{current.icon}</div>
              <p className="section-label text-xs font-bold text-gold">{current.label}</p>
              <h3 className="mt-3 text-4xl font-black">{current.title}</h3>
              <p className="mt-4 leading-7 text-cream/70">{current.text}</p>
              <a className="hover-lift mt-7 inline-flex rounded-full bg-gold px-6 py-4 font-black text-graphite" href={current.href}>{current.cta}</a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {current.cards.map((card, index) => (
              <div className="hover-lift rounded-[1.5rem] bg-white/75 p-6" key={card}>
                <p className="text-sm font-black text-gold">0{index + 1}</p>
                <p className="mt-3 text-2xl font-black">{card}</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">Этот блок станет отдельным виджетом в личном кабинете.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
