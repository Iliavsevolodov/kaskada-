import { HiArrowRight, HiBolt, HiOutlineFire, HiOutlinePlayCircle, HiOutlineTruck } from 'react-icons/hi2';
import { BuyerBottomNav } from '@/components/BuyerBottomNav';
import { BuyerBrandCard } from '@/components/BuyerBrandCard';
import { BuyerProductCard } from '@/components/BuyerProductCard';
import { BuyerSearch } from '@/components/BuyerSearch';
import { buyerBrands, buyerCategories, buyerFeeds, buyerHeroSlides, buyerProducts, buyerStories, buyerVideos } from '@/lib/buyerData';

export default function BuyerPage() {
  return (
    <main className="min-h-screen pb-24 text-graphite">
      <header className="sticky top-0 z-50 border-b border-graphite/10 bg-white/95 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="/kaskada-/buyer/">
            <span className="flex h-10 w-10 items-center justify-center bg-graphite text-xs font-black text-gold">K</span>
            <div>
              <p className="text-base font-black leading-none">Каскада Маркет</p>
              <p className="section-label mt-1 text-[10px] font-bold text-neutral-500">онлайн-магазин</p>
            </div>
          </a>
          <nav className="hidden items-center gap-1 border border-graphite/10 bg-[#f3f0ea] p-1.5 lg:flex">
            <a className="px-4 py-2 text-sm font-bold hover:bg-white" href="#catalog">Каталог</a>
            <a className="px-4 py-2 text-sm font-bold hover:bg-white" href="#new">Новинки</a>
            <a className="px-4 py-2 text-sm font-bold hover:bg-white" href="#videos">Видео</a>
            <a className="px-4 py-2 text-sm font-bold hover:bg-white" href="#brands">Бренды</a>
            <a className="px-4 py-2 text-sm font-bold hover:bg-white" href="#search">Поиск</a>
          </nav>
          <a className="premium-button bg-[#ff4d6d] text-white" href="#cart">Корзина</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="hero-slider">
          {buyerHeroSlides.map((slide) => (
            <a className="relative block h-[390px] overflow-hidden border border-graphite/10 bg-graphite text-white" href={slide.href} key={slide.title}>
              <img alt={slide.title} className="image-cover opacity-75" src={slide.image} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-2xl p-8">
                <p className="section-label text-[11px] font-bold text-[#f6d44d]">Kaskada store</p>
                <h1 className="display-font mt-3 text-4xl font-semibold leading-tight md:text-5xl">{slide.title}</h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">{slide.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-2 bg-[#f6d44d] px-5 py-3 text-sm font-black text-graphite">Смотреть <HiArrowRight /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-3">
        <div className="market-rail" style={{ gridAutoColumns: 'minmax(82px, 96px)' }}>
          {buyerStories.map((story) => (
            <button className="flex flex-col items-center gap-2 text-center" key={story.title} type="button">
              <span className="rounded-full bg-[linear-gradient(135deg,#ff4d6d,#f6d44d)] p-[3px]">
                <span className="flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-full bg-white p-[3px]">
                  <img alt={story.title} className="h-full w-full rounded-full object-cover" src={story.image} />
                </span>
              </span>
              <span className="text-[11px] font-bold leading-4 text-neutral-700">{story.title}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <a className="relative overflow-hidden border border-graphite/10 bg-graphite text-white shadow-soft" href="#sale">
            <img alt="Акции недели" className="h-56 w-full object-cover opacity-70" src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1400&q=80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/72 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="section-label text-[10px] font-bold text-[#f6d44d]">Баннер</p>
              <h2 className="display-font mt-2 text-3xl font-semibold">Скидки до 25%</h2>
              <p className="mt-2 text-sm text-white/75">Подборка товаров, которые хочется добавить в корзину прямо сейчас.</p>
            </div>
          </a>
          <a className="relative overflow-hidden border border-graphite/10 bg-graphite text-white shadow-soft" href="#brands">
            <img alt="Бренды недели" className="h-56 w-full object-cover opacity-70" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=1400&q=80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/72 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="section-label text-[10px] font-bold text-[#f6d44d]">Баннер</p>
              <h2 className="display-font mt-2 text-3xl font-semibold">Бренды недели</h2>
              <p className="mt-2 text-sm text-white/75">Переходи в отдельные витрины брендов и изучай их товары.</p>
            </div>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4" id="catalog">
        <div className="market-rail">
          {buyerCategories.map((category) => (
            <a className="inline-flex items-center justify-center border border-graphite/10 bg-white px-5 py-4 text-sm font-black text-graphite shadow-soft" href="#search" key={category}>{category}</a>
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

      <section className="mx-auto max-w-7xl px-6 py-8" id="videos">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="section-label text-[11px] font-bold text-neutral-500">Контент</p>
            <h2 className="display-font mt-2 text-3xl font-semibold">Распаковки и обзоры</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">Видео-контент усиливает доверие и помогает быстрее принять решение о покупке.</p>
          </div>
          <span className="hidden bg-[#ff4d6d] px-4 py-2 text-xs font-black text-white md:inline-flex">Видео</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {buyerVideos.map((video) => (
            <article className="overflow-hidden border border-graphite/10 bg-white shadow-soft" key={video.title}>
              <div className="relative h-56 overflow-hidden">
                <img alt={video.title} className="h-full w-full object-cover" src={video.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white bg-white text-3xl text-[#ff4d6d] shadow-lg" type="button" aria-label="Запустить видео"><HiOutlinePlayCircle /></button>
                <span className="absolute bottom-4 right-4 bg-black/78 px-3 py-1.5 text-[11px] font-bold text-white">{video.duration}</span>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">{video.brand}</p>
                <p className="mt-1 text-base font-black leading-snug">{video.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BuyerSearch />

      <section className="mx-auto max-w-7xl px-6 py-8" id="brands">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="section-label text-[11px] font-bold text-neutral-500">Бренды</p>
            <h2 className="display-font mt-2 text-3xl font-semibold">Витрины брендов</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">У каждого бренда отдельная страница с обложкой, описанием и товарами.</p>
          </div>
          <a className="hidden items-center gap-2 text-sm font-black md:inline-flex" href="/kaskada-/buyer/brands/">Все бренды <HiArrowRight /></a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {buyerBrands.slice(0, 3).map((brand) => <BuyerBrandCard brand={brand} key={brand.id} />)}
        </div>
      </section>

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
        <div className="border border-graphite/10 bg-graphite p-6 text-white shadow-soft">
          <p className="section-label text-[11px] font-bold text-[#f6d44d]">Корзина</p>
          <h2 className="display-font mt-2 text-3xl font-semibold">Корзина будет следующим модулем</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">Сейчас уже готовы быстрые кнопки, контентные блоки, страницы брендов и покупательская навигация. Следующим шагом подключим настоящую корзину и оформление заказа.</p>
        </div>
      </section>

      <BuyerBottomNav />
    </main>
  );
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="border border-graphite/10 bg-white p-5 shadow-soft"><div className="mb-3 text-2xl text-[#ff4d6d]">{icon}</div><p className="font-black">{title}</p><p className="mt-1 text-sm leading-6 text-neutral-600">{text}</p></div>;
}
