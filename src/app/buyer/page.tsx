import { HiArrowRight, HiBolt, HiOutlineFire, HiOutlineTruck } from 'react-icons/hi2';
import { BuyerBottomNav } from '@/components/BuyerBottomNav';
import { BuyerProductCard } from '@/components/BuyerProductCard';
import { BuyerSearch } from '@/components/BuyerSearch';
import { buyerCategories, buyerFeeds, buyerHeroSlides, buyerProducts } from '@/lib/buyerData';

export default function BuyerPage() {
  return (
    <main className="min-h-screen pb-24 text-graphite">
      <header className="sticky top-0 z-50 border-b border-graphite/8 bg-white/95 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="/kaskada-/buyer/">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-graphite text-xs font-black text-gold">K</span>
            <div>
              <p className="text-base font-black leading-none">Каскада Маркет</p>
              <p className="section-label mt-1 text-[10px] font-bold text-neutral-500">онлайн-магазин</p>
            </div>
          </a>
          <nav className="hidden items-center gap-1 rounded-full border border-graphite/8 bg-[#f3f0ea] p-1.5 md:flex">
            <a className="rounded-full px-4 py-2 text-sm font-bold hover:bg-white" href="#catalog">Каталог</a>
            <a className="rounded-full px-4 py-2 text-sm font-bold hover:bg-white" href="#new">Новинки</a>
            <a className="rounded-full px-4 py-2 text-sm font-bold hover:bg-white" href="#sale">Акции</a>
            <a className="rounded-full px-4 py-2 text-sm font-bold hover:bg-white" href="#search">Поиск</a>
          </nav>
          <a className="premium-button bg-[#ff4d6d] text-white" href="#cart">Корзина</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="hero-slider">
          {buyerHeroSlides.map((slide) => (
            <a className="relative block h-[380px] overflow-hidden rounded-[1.7rem] bg-graphite text-white" href={slide.href} key={slide.title}>
              <img alt={slide.title} className="image-cover opacity-75" src={slide.image} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/24 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-2xl p-8">
                <p className="section-label text-[11px] font-bold text-[#f6d44d]">Kaskada store</p>
                <h1 className="display-font mt-3 text-4xl font-semibold leading-tight md:text-5xl">{slide.title}</h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">{slide.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f6d44d] px-5 py-3 text-sm font-black text-graphite">Смотреть <HiArrowRight /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4" id="catalog">
        <div className="market-rail">
          {buyerCategories.map((category) => (
            <a className="inline-flex items-center justify-center rounded-[1.15rem] border border-graphite/8 bg-white px-5 py-4 text-sm font-black text-graphite shadow-soft" href="#search" key={category}>{category}</a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard icon={<HiOutlineFire />} title="Яркие акции" text="Скидки, подборки и быстрые покупки." />
          <InfoCard icon={<HiOutlineTruck />} title="Удобная доставка" text="Подготовка к подключению доставки и ПВЗ." />
          <InfoCard icon={<HiBolt />} title="Быстрый заказ" text="Кнопки корзины и избранного прямо в карточках." />
        </div>
      </section>

      <BuyerSearch />

      {buyerFeeds.map((feed) => {
        const list = buyerProducts.filter((product) => product.tag === feed.filter || (feed.filter === 'sale' && product.oldPrice));
        return (
          <section className="mx-auto max-w-7xl px-6 py-8" id={feed.id} key={feed.id}>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="section-label text-[11px] font-bold text-neutral-500">Подборка</p>
                <h2 className="display-font mt-2 text-3xl font-semibold">{feed.title}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{feed.subtitle}</p>
              </div>
              <a className="hidden items-center gap-2 text-sm font-black md:inline-flex" href="#search">Все товары <HiArrowRight /></a>
            </div>
            <div className="market-rail">
              {list.map((product) => <BuyerProductCard product={product} key={`${feed.id}-${product.id}`} />)}
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-7xl px-6 py-8" id="cart">
        <div className="rounded-[1.7rem] bg-graphite p-6 text-white shadow-soft">
          <p className="section-label text-[11px] font-bold text-[#f6d44d]">Корзина</p>
          <h2 className="display-font mt-2 text-3xl font-semibold">Корзина будет следующим модулем</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">Сейчас кнопки уже готовы в карточках. Следующим шагом подключим состояние корзины, количество товаров, итоговую сумму и оформление заказа.</p>
        </div>
      </section>

      <BuyerBottomNav />
    </main>
  );
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="rounded-[1.35rem] border border-graphite/8 bg-white p-5 shadow-soft"><div className="mb-3 text-2xl text-[#ff4d6d]">{icon}</div><p className="font-black">{title}</p><p className="mt-1 text-sm leading-6 text-neutral-600">{text}</p></div>;
}
