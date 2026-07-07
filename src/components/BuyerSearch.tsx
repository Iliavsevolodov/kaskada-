'use client';

import { useMemo, useState } from 'react';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import { buyerProducts } from '@/lib/buyerData';
import { BuyerProductCard } from './BuyerProductCard';

export function BuyerSearch() {
  const [query, setQuery] = useState('');
  const normalized = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!normalized) return buyerProducts.slice(0, 8);
    return buyerProducts.filter((product) =>
      [product.name, product.brand, product.category, product.badge, product.description].join(' ').toLowerCase().includes(normalized)
    );
  }, [normalized]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8" id="search">
      <div className="border border-graphite/10 bg-white p-4 shadow-soft">
        <div className="flex items-center gap-3 border border-graphite/8 bg-[#f3f0ea] px-4 py-3">
          <HiMagnifyingGlass className="text-xl text-neutral-500" />
          <input
            className="w-full bg-transparent text-base font-semibold outline-none placeholder:text-neutral-400"
            placeholder="Найти товары, бренды или категории"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query ? <button className="border border-graphite/8 px-2 py-1 text-xl text-neutral-500" onClick={() => setQuery('')} type="button"><HiXMark /></button> : null}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {['крем', 'чай', 'подарок', 'дом', 'акция', 'питомцам'].map((item) => (
            <button className="border border-[#e2bf35] bg-[#f6d44d] px-4 py-2 text-xs font-black text-graphite" key={item} onClick={() => setQuery(item)} type="button">{item}</button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p className="section-label text-[11px] font-bold text-neutral-500">Поиск</p>
          <h2 className="display-font mt-2 text-3xl font-semibold">{normalized ? 'Найденные товары' : 'Популярные товары'}</h2>
        </div>
        <p className="text-sm font-bold text-neutral-500">{results.length} товаров</p>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((product) => <BuyerProductCard product={product} key={product.id} />)}
      </div>
    </section>
  );
}
