'use client';

import { useMemo, useState } from 'react';
import { calculateOrderEconomy, money } from '@/lib/finance';

export function EconomyCalculator() {
  const [orderTotal, setOrderTotal] = useState(10000);
  const economy = useMemo(() => calculateOrderEconomy(orderTotal), [orderTotal]);

  return (
    <div className="card-glass rounded-[2rem] p-6 shadow-soft">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-label text-xs font-bold text-gold">Живой калькулятор</p>
          <h3 className="mt-3 text-3xl font-black">Экономика одного заказа</h3>
          <p className="mt-3 max-w-2xl leading-7 text-neutral-700">
            Меняй сумму заказа и смотри, как автоматически распределяются деньги между продавцом, реферальной сетью и платформой.
          </p>
        </div>
        <label className="w-full max-w-sm">
          <span className="mb-2 block text-sm font-black">Сумма заказа</span>
          <input
            className="w-full rounded-2xl border border-graphite/10 bg-white/80 px-5 py-4 text-2xl font-black outline-none transition focus:border-gold"
            min={500}
            step={500}
            type="number"
            value={orderTotal}
            onChange={(event) => setOrderTotal(Number(event.target.value) || 0)}
          />
        </label>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <FinanceCard title="Продавцу" value={money(economy.sellerPayout)} subtitle="80% от заказа" />
        <FinanceCard title="Реферальная сеть" value={money(economy.referralFund)} subtitle="10% от заказа" />
        <FinanceCard title="Фонд платформы" value={money(economy.platformFund)} subtitle="10% от заказа" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.5rem] bg-white/70 p-5">
          <h4 className="text-xl font-black">Распределение по линиям</h4>
          <div className="mt-4 grid gap-3">
            {economy.referralLines.map((item) => (
              <div className="flex items-center justify-between rounded-2xl bg-cream p-4" key={item.line}>
                <div>
                  <p className="font-black">{item.line} линия</p>
                  <p className="text-sm text-neutral-500">{item.rate * 100}% от заказа</p>
                </div>
                <p className="text-xl font-black">{money(item.amount)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-graphite p-5 text-cream">
          <h4 className="text-xl font-black">Платформенный фонд</h4>
          <div className="mt-4 grid gap-3">
            {economy.platformItems.map((item) => (
              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4" key={item.name}>
                <div>
                  <p className="font-black">{item.name}</p>
                  <p className="text-sm text-cream/60">{item.rate * 100}% от заказа</p>
                </div>
                <p className="text-lg font-black">{money(item.amount)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FinanceCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div className="rounded-[1.5rem] bg-white/80 p-5">
      <p className="text-sm font-bold text-neutral-500">{title}</p>
      <p className="mt-2 text-3xl font-black">{value}</p>
      <p className="mt-1 text-sm font-semibold text-forest">{subtitle}</p>
    </div>
  );
}
