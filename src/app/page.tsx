import { EconomyCalculator } from '@/components/EconomyCalculator';
import { categories, products, statuses } from '@/lib/data';
import { calculateOrderEconomy, money, referralRates } from '@/lib/finance';

const economy = calculateOrderEconomy(10000);

export default function HomePage() {
  return (
    <main className="min-h-screen text-graphite">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <p className="section-label text-xs text-gold">Каскада Маркет</p>
          <h1 className="text-2xl font-black tracking-tight">Kaskada Market</h1>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <a href="#catalog">Каталог</a>
          <a href="#partners">Партнёрам</a>
          <a href="#sellers">Продавцам</a>
          <a href="#finance">Экономика</a>
        </nav>
        <button className="rounded-full bg-graphite px-5 py-3 text-sm font-bold text-cream">Войти</button>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="section-label mb-5 text-sm font-bold text-forest">Маркетплейс локальных брендов</p>
          <h2 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Покупки создают оборот. Рекомендации создают доход.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
            Каскада Маркет объединяет малые бренды, ремесленников и локальные производства. Продавцы получают канал продаж, покупатели — качественные товары, партнёры — вознаграждение с подтверждённого товарооборота.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-full bg-gold px-6 py-4 font-black text-graphite" href="#catalog">Смотреть каталог</a>
            <a className="rounded-full border border-graphite/20 bg-white/60 px-6 py-4 font-black" href="#partners">Стать партнёром</a>
            <a className="rounded-full border border-graphite/20 bg-white/60 px-6 py-4 font-black" href="#sellers">Разместить бренд</a>
          </div>
        </div>

        <div className="card-glass rounded-[2rem] p-6 shadow-soft">
          <div className="rounded-[1.5rem] bg-graphite p-6 text-cream">
            <p className="section-label text-xs text-gold">Демо-заказ</p>
            <h3 className="mt-2 text-3xl font-black">{money(economy.orderTotal)}</h3>
            <div className="mt-6 grid gap-3">
              <Metric title="Продавцу" value={money(economy.sellerPayout)} />
              <Metric title="Реферальная сеть" value={money(economy.referralFund)} />
              <Metric title="Фонд платформы" value={money(economy.platformFund)} />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {referralRates.map((item) => (
              <div className="rounded-2xl bg-white/70 p-4" key={item.line}>
                <p className="font-bold">{item.line} линия</p>
                <p className="text-2xl font-black">{item.rate * 100}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10" id="catalog">
        <div className="mb-7 flex items-end justify-between gap-6">
          <div>
            <p className="section-label text-xs font-bold text-gold">Категории</p>
            <h2 className="mt-2 text-4xl font-black">Первая витрина MVP</h2>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-bold" key={category}>{category}</span>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article className="card-glass rounded-[1.7rem] p-5 shadow-soft" key={product.id}>
              <div className="mb-5 flex h-40 items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-white to-sand text-5xl">📦</div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{product.category}</p>
              <h3 className="mt-2 text-xl font-black">{product.name}</h3>
              <p className="mt-1 text-sm font-bold text-forest">{product.brand}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{product.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-2xl font-black">{money(product.price)}</p>
                <span className="rounded-full bg-forest px-3 py-2 text-xs font-bold text-cream">{product.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-2" id="partners">
        <div className="card-glass rounded-[2rem] p-8 shadow-soft">
          <p className="section-label text-xs font-bold text-gold">Партнёрам</p>
          <h2 className="mt-3 text-4xl font-black">Задача партнёра — строить оборот</h2>
          <p className="mt-4 leading-7 text-neutral-700">
            Партнёр не обязан привлекать именно клиентов. Он может создавать товарооборот через покупателей, партнёров, витрины, подборки, рекомендации брендов и повторные покупки.
          </p>
          <div className="mt-6 grid gap-3">
            {referralRates.map((item) => (
              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4" key={item.line}>
                <span className="font-bold">{item.line} линия</span>
                <span className="text-xl font-black">{item.rate * 100}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-glass rounded-[2rem] p-8 shadow-soft" id="sellers">
          <p className="section-label text-xs font-bold text-gold">Продавцам</p>
          <h2 className="mt-3 text-4xl font-black">2 месяца бесплатно, потом 1490 ₽/мес</h2>
          <p className="mt-4 leading-7 text-neutral-700">
            Продавец размещает товары по рыночной цене и платит 20% только с успешной продажи. С третьего месяца действует подписка за доступ к инфраструктуре платформы, кабинету, аналитике и партнёрскому трафику.
          </p>
          <div className="mt-6 rounded-[1.5rem] bg-graphite p-6 text-cream">
            <p className="text-sm text-cream/70">Подписка продавца</p>
            <p className="mt-2 text-5xl font-black">1490 ₽</p>
            <p className="mt-2 text-sm text-cream/70">с 3-го месяца работы на платформе</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12" id="finance">
        <EconomyCalculator />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="section-label text-xs font-bold text-gold">Статусы</p>
        <h2 className="mt-3 text-4xl font-black">Квалификации Каскада Маркет</h2>
        <div className="mt-6 overflow-hidden rounded-[2rem] border border-graphite/10 bg-white/70 shadow-soft">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-graphite text-cream">
              <tr>
                <th className="p-4">Статус</th>
                <th className="p-4">Оборот</th>
                <th className="p-4">Ветки / условия</th>
              </tr>
            </thead>
            <tbody>
              {statuses.map((status) => (
                <tr className="border-t border-graphite/10" key={status.name}>
                  <td className="p-4 font-black">{status.name}</td>
                  <td className="p-4">{status.turnover}</td>
                  <td className="p-4">{status.branches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4">
      <span className="text-sm text-cream/70">{title}</span>
      <span className="font-black">{value}</span>
    </div>
  );
}
