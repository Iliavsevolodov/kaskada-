import { BrandCard } from '@/components/BrandCard';
import { EconomyCalculator } from '@/components/EconomyCalculator';
import { RoleExperienceSwitcher } from '@/components/RoleExperienceSwitcher';
import { SiteHeader } from '@/components/SiteHeader';
import { StorefrontSections } from '@/components/StorefrontSections';
import { brands, statuses } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="reveal-up">
          <div className="mb-5 flex flex-wrap gap-2.5">
            <span className="premium-chip">Fashion commerce</span>
            <span className="premium-chip">Local brands</span>
            <span className="premium-chip">Referral marketplace</span>
          </div>
          <p className="section-label mb-4 text-[11px] font-bold text-neutral-500">Каскада Маркет</p>
          <h1 className="display-font max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-[4.35rem]">
            Стильный маркетплейс локальных брендов и рекомендаций.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
            Витрина с лентами новинок, акций, скидок и тематических подборок. Аккуратный интерфейс, красивые изображения, понятная экономика и будущая мобильная архитектура.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="premium-button bg-graphite text-cream" href="/kaskada-/catalog/">Открыть каталог</a>
            <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/buyer-app/">Приложение</a>
            <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/seller-app/">Для продавцов</a>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Metric value="20%" label="комиссия платформы" />
            <Metric value="6" label="линий выплат" />
            <Metric value="1490 ₽" label="подписка продавца" />
          </div>
        </div>

        <div className="card-glass reveal-up rounded-[1.9rem] p-4 shadow-soft">
          <div className="metal-panel rounded-[1.6rem] p-6 text-cream">
            <p className="section-label text-[10px] font-bold text-gold">Storefront system</p>
            <h2 className="display-font mt-3 text-5xl font-semibold">New retail layer</h2>
            <p className="mt-4 text-sm leading-7 text-cream/70">Категории, акции, скидки, подборки, бренды и партнёрская экономика в одном интерфейсе.</p>
          </div>
        </div>
      </section>

      <StorefrontSections />
      <RoleExperienceSwitcher />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-[11px] font-bold text-neutral-500">Бренды</p>
            <h2 className="display-font mt-2 text-4xl font-semibold tracking-tight">Локальные производители</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600">Бренды оформлены как аккуратные fashion-карточки.</p>
          </div>
          <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/brands/">Все бренды</a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => <BrandCard brand={brand} key={brand.id} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10" id="finance"><EconomyCalculator /></section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div><p className="section-label text-[11px] font-bold text-neutral-500">Квалификации</p><h2 className="display-font mt-2 text-4xl font-semibold tracking-tight">Маркетинг-план</h2></div>
          <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/partners/">Партнёрский режим</a>
        </div>
        <div className="overflow-hidden rounded-[1.7rem] border border-graphite/8 bg-white/82 shadow-soft">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-graphite text-cream"><tr><th className="p-4">Статус</th><th className="p-4">Оборот</th><th className="p-4">Ветки</th><th className="p-4">Пул</th></tr></thead>
            <tbody>{statuses.slice(0, 10).map((status) => <tr className="border-t border-graphite/8" key={status.name}><td className="p-4 font-semibold">{status.name}</td><td className="p-4">{status.turnover}</td><td className="p-4">{status.branches}</td><td className="p-4">{status.pool}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="stat-tile hover-lift"><p className="text-2xl font-bold">{value}</p><p className="mt-1 text-[12px] font-medium text-neutral-500">{label}</p></div>;
}
