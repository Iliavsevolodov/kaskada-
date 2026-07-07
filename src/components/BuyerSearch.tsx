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
      <div className="rounded-[1.8rem] border border-[#d8c3a8]/70 bg-[#fffaf2] p-4 shadow-soft">
        <div className="flex items-center gap-3 rounded-[1.35rem] border border-[#ead6ba] bg-[#fff3df] px-4 py-3">
          <HiMagnifyingGlass className="text-xl text-[#9c7a55]" />
          <input
            className="w-full bg-transparent text-base font-semibold text-[#2a1b12] outline-none placeholder:text-[#b69a7a]"
            placeholder="Найти товары, бренды или категории"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query ? <button className="rounded-full border border-[#ead6ba] bg-[#fffaf2] px-2 py-1 text-xl text-[#9c7a55]" onClick={() => setQuery('')} type="button"><HiXMark /></button> : null}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {['крем', 'чай', 'подарок', 'дом', 'акция', 'питомцам'].map((item) => (
            <button className="rounded-full border border-[#e5c46a] bg-[#f4d27b] px-4 py-2 text-xs font-black text-[#2a1b12]" key={item} onClick={() => setQuery(item)} type="button">{item}</button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p className="section-label text-[11px] font-bold text-[#9c7a55]">Поиск</p>
          <h2 className="display-font mt-2 text-3xl font-semibold text-[#2a1b12]">{normalized ? 'Найденные товары' : 'Популярные товары'}</h2>
        </div>
        <p className="text-sm font-bold text-[#8f765a]">{results.length} товаров</p>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((product) => <BuyerProductCard product={product} key={product.id} />)}
      </div>
    </section>
  );
}
