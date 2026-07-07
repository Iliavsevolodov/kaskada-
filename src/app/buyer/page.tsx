import { HiArrowRight, HiBolt, HiOutlineFire, HiOutlinePlayCircle, HiOutlineTruck } from 'react-icons/hi2';
import { BuyerBottomNav } from '@/components/BuyerBottomNav';
import { BuyerBrandCard } from '@/components/BuyerBrandCard';
import { BuyerProductCard } from '@/components/BuyerProductCard';
import { BuyerSearch } from '@/components/BuyerSearch';
import { buyerBrands, buyerCategories, buyerFeeds, buyerHeroSlides, buyerProducts, buyerStories, buyerVideos } from '@/lib/buyerData';

export default function BuyerPage() {
  return (
    <main className="min-h-screen pb-24 text-[#2a1b12]">
      <header className="sticky top-0 z-50 border-b border-[#d8c3a8]/70 bg-[#fffaf2]/92 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="/kaskada-/">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2a1b12] text-xs font-black text-[#f4d27b] shadow-sm">К</span>
            <div>
              <p className="text-base font-black leading-none">Каскада Маркет</p>
              <p className="section-label mt-1 text-[10px] font-bold text-[#9c7a55]">тёплый маркетплейс</p>
            </div>
          </a>
          <nav className="hidden items-center gap-1 rounded-full border border-[#d8c3a8]/70 bg-[#fff3df] p-1.5 lg:flex">
            <a className="rounded-full px-4 py-2 text-sm font-bold hover:bg-[#fffaf2]" href="#catalog">Каталог</a>
            <a className="rounded-full px-4 py-2 text-sm font-bold hover:bg-[#fffaf2]" href="#new">Новинки</a>
            <a className="rounded-full px-4 py-2 text-sm font-bold hover:bg-[#fffaf2]" href="#videos">Видео</a>
            <a className="rounded-full px-4 py-2 text-sm font-bold hover:bg-[#fffaf2]" href="#brands">Бренды</a>
            <a className="rounded-full px-4 py-2 text-sm font-bold hover:bg-[#fffaf2]" href="#search">Поиск</a>
          </nav>
          <a className="premium-button bg-[#c97963] text-white" href="#cart">Корзина</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="hero-slider">
          {buyerHeroSlides.map((slide) => (
            <a className="relative block h-[390px] overflow-hidden rounded-[2rem] border border-[#d8c3a8]/70 bg-[#2a1b12] text-white shadow-soft" href={slide.href} key={slide.title}>
              <img alt={slide.title} className="image-cover opacity-78" src={slide.image} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a1b12]/82 via-[#2a1b12]/32 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-2xl p-8">
                <p className="section-label text-[11px] font-bold text-[#f4d27b]">Магазин Каскада</p>
                <h1 className="display-font mt-3 text-4xl font-semibold leading-tight md:text-5xl">{slide.title}</h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/82">{slide.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f4d27b] px-5 py-3 text-sm font-black text-[#2a1b12]">Смотреть <HiArrowRight /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-3">
        <div className="market-rail" style={{ gridAutoColumns: 'minmax(82px, 96px)' }}>
          {buyerStories.map((story) => (
            <button className="flex flex-col items-center gap-2 text-center" key={story.title} type="button">
              <span className="rounded-full bg-[linear-gradient(135deg,#c97963,#f4d27b)] p-[3px] shadow-sm">
                <span className="flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-full bg-[#fffaf2] p-[3px]">
                  <img alt={story.title} className="h-full w-full rounded-full object-cover" src={story.image} />
                </span>
              </span>
              <span className="text-[11px] font-bold leading-4 text-[#6f553a]">{story.title}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <a className="relative overflow-hidden rounded-[1.8rem] border border-[#d8c3a8]/70 bg-[#2a1b12] text-white shadow-soft" href="#sale">
            <img alt="Акции недели" className="h-56 w-full object-cover opacity-72" src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1400&q=80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a1b12]/78 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="section-label text-[10px] font-bold text-[#f4d27b]">Люксовая подборка</p>
              <h2 className="display-font mt-2 text-3xl font-semibold">Тёплые скидки до 25%</h2>
              <p className="mt-2 text-sm text-white/78">Красивые товары для дома, ухода и подарков.</p>
            </div>
          </a>
          <a className="relative overflow-hidden rounded-[1.8rem] border border-[#d8c3a8]/70 bg-[#2a1b12] text-white shadow-soft" href="#brands">
            <img alt="Бренды недели" className="h-56 w-full object-cover opacity-72" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=1400&q=80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a1b12]/78 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="section-label text-[10px] font-bold text-[#f4d27b]">Родные бренды</p>
              <h2 className="display-font mt-2 text-3xl font-semibold">Бренды с историей</h2>
              <p className="mt-2 text-sm text-white/78">Отдельные витрины, красивые товары и локальный характер.</p>
            </div>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4" id="catalog">
        <div className="market-rail">
          {buyerCategories.map((category) => (
            <a className="inline-flex items-center justify-center rounded-[1.2rem] border border-[#d8c3a8]/70 bg-[#fffaf2] px-5 py-4 text-sm font-black text-[#2a1b12] shadow-soft" href="#search" key={category}>{category}</a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard icon={<HiOutlineFire />} title="Тёплые акции" text="Подборки, скидки и быстрые покупки без лишней суеты." />
          <InfoCard icon={<HiOutlineTruck />} title="Уютная доставка" text="Готовим понятную доставку до дома и пунктов выдачи." />
          <InfoCard icon={<HiBolt />} title="Быстрый заказ" text="Корзина и избранное прямо в карточках товаров." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8" id="videos">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="section-label text-[11px] font-bold text-[#9c7a55]">Контент</p>
            <h2 className="display-font mt-2 text-3xl font-semibold text-[#2a1b12]">Распаковки и обзоры</h2>
            <p className="mt-2 text-sm leading-6 text-[#6f553a]">Видео помогает почувствовать товар ближе: текстура, упаковка, настроение и сценарий использования.</p>
          </div>
          <span className="hidden rounded-full bg-[#c97963] px-4 py-2 text-xs font-black text-white md:inline-flex">Видео</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {buyerVideos.map((video) => (
            <article className="overflow-hidden rounded-[1.6rem] border border-[#d8c3a8]/70 bg-[#fffaf2] shadow-soft" key={video.title}>
              <div className="relative h-56 overflow-hidden">
                <img alt={video.title} className="h-full w-full object-cover" src={video.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b12]/72 via-[#2a1b12]/15 to-transparent" />
                <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffaf2] text-3xl text-[#c97963] shadow-lg" type="button" aria-label="Запустить видео"><HiOutlinePlayCircle /></button>
                <span className="absolute bottom-4 right-4 rounded-full bg-[#2a1b12]/80 px-3 py-1.5 text-[11px] font-bold text-white">{video.duration}</span>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9c7a55]">{video.brand}</p>
                <p className="mt-1 text-base font-black leading-snug text-[#2a1b12]">{video.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BuyerSearch />

      <section className="mx-auto max-w-7xl px-6 py-8" id="brands">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="section-label text-[11px] font-bold text-[#9c7a55]">Бренды</p>
            <h2 className="display-font mt-2 text-3xl font-semibold text-[#2a1b12]">Витрины брендов</h2>
            <p className="mt-2 text-sm leading-6 text-[#6f553a]">У каждого бренда отдельная страница с обложкой, описанием и товарами.</p>
          </div>
          <a className="hidden items-center gap-2 text-sm font-black text-[#2a1b12] md:inline-flex" href="/kaskada-/buyer/brands/">Все бренды <HiArrowRight /></a>
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
                <p className="section-label text-[11px] font-bold text-[#9c7a55]">Подборка</p>
                <h2 className="display-font mt-2 text-3xl font-semibold text-[#2a1b12]">{feed.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#6f553a]">{feed.subtitle}</p>
              </div>
              <a className="hidden items-center gap-2 text-sm font-black text-[#2a1b12] md:inline-flex" href="#search">Все товары <HiArrowRight /></a>
            </div>
            <div className="market-rail">
              {list.map((product) => <BuyerProductCard product={product} key={`${feed.id}-${product.id}`} />)}
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-7xl px-6 py-8" id="cart">
        <div className="rounded-[1.8rem] border border-[#d8c3a8]/70 bg-[#2a1b12] p-6 text-white shadow-soft">
          <p className="section-label text-[11px] font-bold text-[#f4d27b]">Корзина</p>
          <h2 className="display-font mt-2 text-3xl font-semibold">Корзина будет следующим модулем</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">Сейчас уже готовы быстрые кнопки, контентные блоки, страницы брендов и покупательская навигация. Следующим шагом подключим настоящую корзину и оформление заказа.</p>
        </div>
      </section>

      <BuyerBottomNav />
    </main>
  );
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="rounded-[1.5rem] border border-[#d8c3a8]/70 bg-[#fffaf2] p-5 shadow-soft"><div className="mb-3 text-2xl text-[#c97963]">{icon}</div><p className="font-black text-[#2a1b12]">{title}</p><p className="mt-1 text-sm leading-6 text-[#6f553a]">{text}</p></div>;
}
