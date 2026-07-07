import { ProductCard } from '@/components/ProductCard';
import { SiteHeader } from '@/components/SiteHeader';
import { products } from '@/lib/data';
import { calculateOrderEconomy, money } from '@/lib/finance';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id) ?? products[0];
  const economy = calculateOrderEconomy(product.price);
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="card-glass hover-lift reveal-up rounded-[2.2rem] p-6 shadow-soft">
          <div className="product-visual flex h-[420px] items-center justify-center rounded-[1.8rem] bg-gradient-to-br from-white via-sand to-cream text-8xl">
            <span className="float-soft relative z-10">{product.accent}</span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl bg-white/70 p-4"><p className="font-black">★ {product.rating}</p><p className="text-neutral-500">рейтинг</p></div>
            <div className="rounded-2xl bg-white/70 p-4"><p className="font-black">{product.category}</p><p className="text-neutral-500">категория</p></div>
            <div className="rounded-2xl bg-white/70 p-4"><p className="font-black">{product.tag}</p><p className="text-neutral-500">тег</p></div>
          </div>
        </div>

        <div className="reveal-up">
          <p className="section-label text-xs font-bold text-gold">Карточка товара</p>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-6xl">{product.name}</h1>
          <p className="mt-3 text-xl font-bold text-forest">{product.brand}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">{product.description}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="card-glass rounded-[1.6rem] p-5 shadow-soft"><p className="text-sm font-bold text-neutral-500">Цена</p><p className="mt-2 text-3xl font-black">{money(product.price)}</p></div>
            <div className="card-glass rounded-[1.6rem] p-5 shadow-soft"><p className="text-sm font-bold text-neutral-500">Бонус в оборот</p><p className="mt-2 text-3xl font-black">{money(product.cashback)}</p></div>
            <div className="card-glass rounded-[1.6rem] p-5 shadow-soft"><p className="text-sm font-bold text-neutral-500">Продавцу</p><p className="mt-2 text-3xl font-black">{money(economy.sellerPayout)}</p></div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="hover-lift rounded-full bg-gold px-7 py-4 font-black text-graphite" type="button">Добавить в корзину</button>
            <button className="hover-lift rounded-full bg-graphite px-7 py-4 font-black text-cream" type="button">Рекомендовать</button>
            <a className="hover-lift rounded-full border border-graphite/15 bg-white/70 px-7 py-4 font-black" href="/kaskada-/catalog/">Назад в каталог</a>
          </div>

          <div className="mt-8 rounded-[2rem] bg-graphite p-6 text-cream">
            <p className="section-label text-xs font-bold text-gold">Экономика заказа</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4"><p className="text-2xl font-black">{money(economy.referralFund)}</p><p className="text-sm text-cream/60">реферальный фонд</p></div>
              <div className="rounded-2xl bg-white/10 p-4"><p className="text-2xl font-black">{money(economy.platformFund)}</p><p className="text-sm text-cream/60">фонд платформы</p></div>
              <div className="rounded-2xl bg-white/10 p-4"><p className="text-2xl font-black">20%</p><p className="text-sm text-cream/60">общая комиссия</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="section-label text-xs font-bold text-gold">Похожие товары</p>
        <h2 className="mt-3 text-4xl font-black">Можно добавить в подборку</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {related.map((item) => <ProductCard product={item} key={item.id} />)}
        </div>
      </section>
    </main>
  );
}
