import { BrandCard } from '@/components/BrandCard';
import { EconomyCalculator } from '@/components/EconomyCalculator';
import { ProductCard } from '@/components/ProductCard';
import { RoleExperienceSwitcher } from '@/components/RoleExperienceSwitcher';
import { SiteHeader } from '@/components/SiteHeader';
import { brands, products, statuses } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="reveal-up">
          <div className="mb-5 flex flex-wrap gap-2.5">
            <span className="premium-chip">Marketplace</span>
            <span className="premium-chip">Referral model</span>
            <span className="premium-chip">Mobile-ready</span>
          </div>
          <p className="section-label mb-4 text-[11px] font-bold text-neutral-500">Каскада Маркет</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-[3.5rem]">
            Аккуратная платформа для локальных брендов, покупок и партнёрской модели.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
            Каскада Маркет объединяет каталог, бренды, приложение и прозрачную экономику в одном минималистичном интерфейсе. Платформа проектируется как продукт, а не просто как сайт.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="premium-button bg-graphite text-cream" href="/kaskada-/catalog/">Открыть каталог</a>
            <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/buyer-app/">Режим приложения</a>
            <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/seller-app/">Для продавцов</a>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Metric value="20%" label="комиссия платформы" />
            <Metric value="6" label="линий выплат" />
            <Metric value="1490 ₽" label="подписка продавца" />
          </div>
        </div>

        <div className="card-glass reveal-up rounded-[1.9rem] p-4 shadow-soft">
          <div className="grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="metal-panel rounded-[1.6rem] p-5 text-cream">
              <p className="section-label text-[10px] font-bold text-gold">Модель платформы</p>
              <h2 className="mt-2 text-4xl font-bold">20 / 10 / 10</h2>
              <p className="mt-3 text-sm leading-7 text-cream/70">20% комиссия: 10% в реферальную сеть и 10% в фонд платформы.</p>
              <div className="mt-5 grid grid-cols-3 gap-2.5 text-center text-2xl">
                <span className="rounded-2xl bg-white/10 p-3">🛒</span>
                <span className="rounded-2xl bg-white/10 p-3">🏪</span>
                <span className="rounded-2xl bg-white/10 p-3">🤝</span>
              </div>
              <div className="mt-5 rounded-[1.1rem] bg-white/8 p-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-cream/55">Подход</p>
                <p className="mt-1 text-sm font-semibold">Маркетплейс, кабинет и приложение в одной системе.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-[1.4rem] border border-graphite/8 bg-white/80 p-4">
                <p className="section-label text-[10px] font-bold text-neutral-500">Buyer app</p>
                <div className="mt-3 rounded-[1.2rem] bg-cream p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[12px] font-semibold text-neutral-500">Бонусы</p>
                      <p className="text-2xl font-bold">1 240 ₽</p>
                    </div>
                    <span className="rounded-2xl bg-white px-3 py-2 text-base">🛍</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-[12px] font-semibold text-neutral-700">
                    <div className="rounded-2xl bg-white px-3 py-2.5">Заказы</div>
                    <div className="rounded-2xl bg-white px-3 py-2.5">Бренды</div>
                    <div className="rounded-2xl bg-white px-3 py-2.5">Акции</div>
                    <div className="rounded-2xl bg-white px-3 py-2.5">Избранное</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <StatTile value="80%" label="продавцу" />
                <StatTile value="10%" label="реферальный фонд" />
                <StatTile value="10%" label="платформа" />
                <StatTile value="4 роли" label="одна архитектура" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RoleExperienceSwitcher />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-[11px] font-bold text-neutral-500">Каталог</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-[2rem]">Товары в аккуратной продуктовой подаче</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600">Меньше визуального шума, больше ясности и удобства просмотра.</p>
          </div>
          <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/catalog/">Весь каталог</a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-[11px] font-bold text-neutral-500">Бренды</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-[2rem]">Локальные производители в чистом интерфейсе</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600">Карточки брендов стали спокойнее и ближе к стандартам сильных современных интерфейсов.</p>
          </div>
          <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/brands/">Все бренды</a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => <BrandCard brand={brand} key={brand.id} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10" id="finance">
        <EconomyCalculator />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-[11px] font-bold text-neutral-500">Квалификации</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-[2rem]">Маркетинг-план в чистой структуре</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600">Табличный блок также приведён к более спокойному и зрелому визуальному языку.</p>
          </div>
          <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/partners/">Партнёрский режим</a>
        </div>
        <div className="overflow-hidden rounded-[1.7rem] border border-graphite/8 bg-white/82 shadow-soft">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-graphite text-cream">
              <tr>
                <th className="p-4">Статус</th>
                <th className="p-4">Оборот</th>
                <th className="p-4">Ветки</th>
                <th className="p-4">Пул</th>
              </tr>
            </thead>
            <tbody>
              {statuses.slice(0, 10).map((status) => (
                <tr className="border-t border-graphite/8" key={status.name}>
                  <td className="p-4 font-semibold">{status.name}</td>
                  <td className="p-4">{status.turnover}</td>
                  <td className="p-4">{status.branches}</td>
                  <td className="p-4">{status.pool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-tile hover-lift">
      <p className="text-2xl font-bold">{value}</p>
      <p className="mt-1 text-[12px] font-medium text-neutral-500">{label}</p>
    </div>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.1rem] border border-graphite/8 bg-white/82 p-4 shadow-soft">
      <p className="text-xl font-bold">{value}</p>
      <p className="mt-1 text-[12px] font-medium text-neutral-500">{label}</p>
    </div>
  );
}
