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

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="reveal-up">
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="premium-chip">⚡ wow marketplace experience</span>
            <span className="premium-chip">📱 mobile-first architecture</span>
            <span className="premium-chip">🤝 referral commerce</span>
          </div>
          <p className="section-label mb-5 text-sm font-bold text-forest">Premium Local Marketplace</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
            Платформа, где <span className="text-gold">покупки</span> выглядят стильно, а <span className="text-forest">рекомендации</span> превращаются в доход.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700">
            Каскада Маркет объединяет локальные бренды, красивую витрину, мобильный интерфейс и прозрачную экономику. Это уже не просто сайт, а основа для настоящей коммерческой экосистемы.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="premium-button bg-gold text-graphite" href="/kaskada-/catalog/">Смотреть каталог</a>
            <a className="premium-button bg-graphite text-cream" href="/kaskada-/buyer-app/">Открыть приложение</a>
            <a className="premium-button border border-graphite/15 bg-white/70 text-graphite" href="/kaskada-/seller-app/">Для брендов</a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Metric value="20%" label="комиссия платформы" />
            <Metric value="6" label="линий выплат" />
            <Metric value="1490 ₽" label="подписка продавца" />
          </div>
        </div>

        <div className="card-glass hover-lift reveal-up relative overflow-hidden rounded-[2.5rem] p-5 shadow-soft">
          <div className="float-soft absolute right-10 top-10 h-28 w-28 rounded-full bg-gold/30 blur-3xl" />
          <div className="pulse-soft absolute bottom-10 left-10 h-32 w-32 rounded-full bg-forest/20 blur-3xl" />
          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="metal-panel rounded-[2rem] p-6 text-cream">
              <p className="section-label text-xs font-bold text-gold">Финансовая модель</p>
              <h2 className="mt-3 text-5xl font-black">20 / 10 / 10</h2>
              <p className="mt-3 leading-7 text-cream/70">20% комиссия: 10% в реферальную сеть и 10% в фонд развития платформы.</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-3xl">
                <span className="float-soft rounded-2xl bg-white/10 p-4">🛒</span>
                <span className="float-soft rounded-2xl bg-white/10 p-4">🏪</span>
                <span className="float-soft rounded-2xl bg-white/10 p-4">🤝</span>
              </div>
              <div className="mt-6 rounded-[1.4rem] bg-white/10 p-4">
                <p className="text-sm text-cream/60">Сценарий</p>
                <p className="mt-1 text-xl font-black">Маркетплейс + приложение + партнёрская сеть</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card-glass rounded-[1.8rem] p-5">
                <p className="section-label text-[11px] font-bold text-gold">Buyer app</p>
                <div className="mt-4 rounded-[1.6rem] bg-white/85 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-neutral-500">Бонусы</p>
                      <p className="text-3xl font-black">1 240 ₽</p>
                    </div>
                    <span className="rounded-2xl bg-gold px-3 py-2 text-lg">🛍</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-bold">
                    <div className="rounded-2xl bg-cream p-3">Избранное</div>
                    <div className="rounded-2xl bg-cream p-3">Заказы</div>
                    <div className="rounded-2xl bg-cream p-3">Акции</div>
                    <div className="rounded-2xl bg-cream p-3">Бренды</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <StatTile value="80%" label="продавцу" />
                <StatTile value="10%" label="реферальный фонд" />
                <StatTile value="10%" label="платформа" />
                <StatTile value="4 роли" label="в одной системе" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RoleExperienceSwitcher />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-xs font-bold text-gold">Каталог</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Товары, которые хочется открыть</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-neutral-700">Карточки стали визуальнее, премиальнее и лучше подходят под будущий мобильный маркетплейс.</p>
          </div>
          <a className="premium-button border border-graphite/15 bg-white/70 text-graphite" href="/kaskada-/catalog/">Весь каталог</a>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-xs font-bold text-gold">Бренды</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Локальные производители с сильной подачей</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-neutral-700">Бренд на платформе должен выглядеть не как сухая карточка, а как полноценная красивая витрина.</p>
          </div>
          <a className="premium-button border border-graphite/15 bg-white/70 text-graphite" href="/kaskada-/brands/">Открыть бренды</a>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => <BrandCard brand={brand} key={brand.id} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12" id="finance">
        <EconomyCalculator />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-xs font-bold text-gold">Квалификации</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Статусный рост в красивой бизнес-оболочке</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-neutral-700">Даже маркетинг-план должен визуально ощущаться как дорогой продукт, а не как скучная таблица.</p>
          </div>
          <a className="premium-button border border-graphite/15 bg-white/70 text-graphite" href="/kaskada-/partners/">Партнёрский режим</a>
        </div>
        <div className="overflow-hidden rounded-[2.2rem] border border-graphite/10 bg-white/75 shadow-soft">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-graphite text-cream">
              <tr>
                <th className="p-5">Статус</th>
                <th className="p-5">Оборот</th>
                <th className="p-5">Ветки</th>
                <th className="p-5">Пул</th>
              </tr>
            </thead>
            <tbody>
              {statuses.slice(0, 10).map((status) => (
                <tr className="border-t border-graphite/10" key={status.name}>
                  <td className="p-5 font-black">{status.name}</td>
                  <td className="p-5">{status.turnover}</td>
                  <td className="p-5">{status.branches}</td>
                  <td className="p-5">{status.pool}</td>
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
      <p className="text-3xl font-black">{value}</p>
      <p className="mt-1 text-sm font-bold text-neutral-600">{label}</p>
    </div>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.5rem] bg-white/80 p-4 shadow-soft">
      <p className="text-2xl font-black">{value}</p>
      <p className="mt-1 text-sm font-bold text-neutral-500">{label}</p>
    </div>
  );
}
