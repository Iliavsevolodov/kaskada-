import { BrandCard } from '@/components/BrandCard';
import { EconomyCalculator } from '@/components/EconomyCalculator';
import { ProductCard } from '@/components/ProductCard';
import { SiteHeader } from '@/components/SiteHeader';
import { brands, products, statuses } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="reveal-up">
          <p className="section-label mb-5 text-sm font-bold text-forest">Premium Local Marketplace</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl">
            Маркетплейс локальных брендов с системой рекомендаций.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700">
            Каскада Маркет объединяет покупателей, продавцов и партнёров в одной коммерческой платформе: товары, бренды, заказы, оборот, кабинеты и прозрачная экономика.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="hover-lift rounded-full bg-gold px-6 py-4 font-black text-graphite" href="/kaskada-/catalog/">Смотреть каталог</a>
            <a className="hover-lift rounded-full bg-graphite px-6 py-4 font-black text-cream" href="/kaskada-/partners/">Партнёрам</a>
            <a className="hover-lift rounded-full border border-graphite/20 bg-white/60 px-6 py-4 font-black" href="/kaskada-/sellers/">Продавцам</a>
          </div>
        </div>

        <div className="card-glass hover-lift reveal-up relative overflow-hidden rounded-[2.2rem] p-6 shadow-soft">
          <div className="float-soft absolute right-8 top-8 h-20 w-20 rounded-full bg-gold/30 blur-2xl" />
          <div className="pulse-soft absolute bottom-10 left-8 h-24 w-24 rounded-full bg-forest/20 blur-2xl" />
          <div className="relative rounded-[1.7rem] bg-graphite p-7 text-cream">
            <p className="section-label text-xs text-gold">Финансовая модель</p>
            <h2 className="mt-3 text-5xl font-black">20 / 10 / 10</h2>
            <p className="mt-3 leading-7 text-cream/70">20% комиссия: 10% реферальная часть и 10% фонд платформы.</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-3xl">
              <span className="float-soft rounded-2xl bg-white/10 p-4">🛒</span>
              <span className="float-soft rounded-2xl bg-white/10 p-4">🏪</span>
              <span className="float-soft rounded-2xl bg-white/10 p-4">🤝</span>
            </div>
          </div>
          <div className="relative mt-5 grid grid-cols-2 gap-3">
            <Metric value="80%" label="продавцу" />
            <Metric value="10%" label="реферальная сеть" />
            <Metric value="10%" label="платформа" />
            <Metric value="1490 ₽" label="подписка с 3 месяца" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="section-label text-xs font-bold text-gold">Каталог</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Первые товары витрины</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="section-label text-xs font-bold text-gold">Бренды</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Локальные производители</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => <BrandCard brand={brand} key={brand.id} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12" id="finance">
        <EconomyCalculator />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="section-label text-xs font-bold text-gold">Квалификации</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Рост строится по обороту и веткам</h2>
        <div className="mt-7 overflow-hidden rounded-[2rem] border border-graphite/10 bg-white/70 shadow-soft">
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
                <tr className="border-t border-graphite/10" key={status.name}>
                  <td className="p-4 font-black">{status.name}</td>
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
    <div className="hover-lift rounded-2xl bg-white/70 p-4">
      <p className="text-3xl font-black">{value}</p>
      <p className="mt-1 text-sm font-bold text-neutral-600">{label}</p>
    </div>
  );
}
