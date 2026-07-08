const categories = ['Все', 'Новинки', 'Акции', 'Дом', 'Уход', 'Подарки', 'Чай', 'Детям'];

const products = [
  { name: 'Крем для рук Северное сияние', brand: 'Северная Лаборатория', category: 'Уход', price: '890 ₽', oldPrice: '1 190 ₽', badge: 'Новинка', image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=900&q=80' },
  { name: 'Набор для безопасной уборки', brand: 'Чистый Дом', category: 'Дом', price: '2 490 ₽', oldPrice: '2 990 ₽', badge: 'Акция', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=900&q=80' },
  { name: 'Свеча Таёжный вечер', brand: 'Мастерская Тепла', category: 'Уют', price: '1 290 ₽', oldPrice: '1 590 ₽', badge: 'Хит', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80' },
  { name: 'Травяной чай Баланс', brand: 'Травы Севера', category: 'Чай', price: '690 ₽', oldPrice: '790 ₽', badge: 'Каждый день', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80' },
  { name: 'Подарочный набор Любовь рядом', brand: 'Подарки Рядом', category: 'Подарки', price: '3 490 ₽', oldPrice: '4 290 ₽', badge: 'Подарок', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Сыворотка Сияние', brand: 'Аурум Скин', category: 'Уход', price: '1 790 ₽', oldPrice: '2 290 ₽', badge: 'Новинка', image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=900&q=80' },
  { name: 'Аромаспрей для дома Лён', brand: 'Дом Ароматов', category: 'Уют', price: '990 ₽', oldPrice: '1 290 ₽', badge: 'Дом', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80' },
  { name: 'Детский защитный бальзам', brand: 'Мамин Выбор', category: 'Детям', price: '690 ₽', oldPrice: '890 ₽', badge: 'Детям', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80' }
];

const stories = [
  { title: 'Новинки', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80' },
  { title: 'Дом', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=300&q=80' },
  { title: 'Уход', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80' },
  { title: 'Подарки', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=300&q=80' },
  { title: 'Чай', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf3e7] pb-24 text-[#2a1b12]">
      <header className="sticky top-0 z-50 border-b border-[#ead7bc] bg-[#fffaf2]/95 px-5 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="/kaskada-/">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2a1b12] text-sm font-black text-[#f4d27b]">К</span>
            <div>
              <p className="text-base font-black leading-none">Каскада Маркет</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#9c7a55]">магазин для покупателей</p>
            </div>
          </a>
          <nav className="hidden items-center gap-2 md:flex">
            <a className="rounded-full bg-[#fff3df] px-4 py-2 text-sm font-bold" href="#catalog">Каталог</a>
            <a className="rounded-full bg-[#fff3df] px-4 py-2 text-sm font-bold" href="#sale">Акции</a>
            <a className="rounded-full bg-[#fff3df] px-4 py-2 text-sm font-bold" href="#brands">Бренды</a>
          </nav>
          <a className="rounded-full bg-[#c97963] px-5 py-3 text-sm font-black text-white" href="#cart">Корзина</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="relative min-h-[430px] overflow-hidden rounded-[2.2rem] bg-[#2a1b12] text-white shadow-2xl">
          <img className="absolute inset-0 h-full w-full object-cover opacity-65" src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1600&q=80" alt="Витрина магазина" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a1b12]/88 via-[#2a1b12]/42 to-transparent" />
          <div className="relative max-w-2xl p-8 md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f4d27b]">тёплый онлайн-магазин</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.95] md:text-7xl">Покупки у локальных брендов в одном месте</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/78">Уход, дом, уют, подарки, чай и товары для семьи. Простая витрина, понятные категории и быстрые покупки.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="rounded-full bg-[#f4d27b] px-6 py-4 text-sm font-black text-[#2a1b12]" href="#catalog">Смотреть товары</a>
              <a className="rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-black text-white" href="#sale">Акции недели</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-2">
        <div className="flex gap-4 overflow-x-auto pb-3">
          {stories.map((story) => (
            <a className="w-20 shrink-0 text-center" href="#catalog" key={story.title}>
              <span className="mx-auto block rounded-full bg-gradient-to-br from-[#c97963] to-[#f4d27b] p-[3px]">
                <span className="block rounded-full bg-[#fffaf2] p-[3px]">
                  <img className="h-16 w-16 rounded-full object-cover" src={story.image} alt={story.title} />
                </span>
              </span>
              <span className="mt-2 block text-[11px] font-bold text-[#6f553a]">{story.title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5">
        <div className="rounded-[1.6rem] border border-[#ead7bc] bg-[#fffaf2] p-4 shadow-lg">
          <input className="w-full rounded-[1.2rem] border border-[#ead7bc] bg-[#fff3df] px-5 py-4 text-base font-bold outline-none placeholder:text-[#b69a7a]" placeholder="Найти товар или бренд" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4" id="catalog">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9c7a55]">категории</p>
            <h2 className="mt-2 text-3xl font-black">Что ищем сегодня?</h2>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <a className="shrink-0 rounded-full border border-[#ead7bc] bg-[#fffaf2] px-5 py-3 text-sm font-black shadow-sm" href="#products" key={category}>{category}</a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4" id="sale">
        <div className="grid gap-4 md:grid-cols-2">
          <a className="relative min-h-56 overflow-hidden rounded-[1.8rem] bg-[#2a1b12] p-6 text-white shadow-xl" href="#products">
            <img className="absolute inset-0 h-full w-full object-cover opacity-50" src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1200&q=80" alt="Подарки" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f4d27b]">подборка</p>
              <h3 className="mt-3 text-3xl font-black">Подарки с выгодой</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">Наборы, уход и уютные мелочи для красивого повода.</p>
            </div>
          </a>
          <a className="relative min-h-56 overflow-hidden rounded-[1.8rem] bg-[#2a1b12] p-6 text-white shadow-xl" href="#products">
            <img className="absolute inset-0 h-full w-full object-cover opacity-50" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80" alt="Дом" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f4d27b]">дом и уют</p>
              <h3 className="mt-3 text-3xl font-black">Товары для дома</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">Чистота, аромат, текстиль и ежедневный комфорт.</p>
            </div>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8" id="products">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9c7a55]">товары</p>
            <h2 className="mt-2 text-3xl font-black">Популярное сейчас</h2>
          </div>
          <a className="hidden rounded-full bg-[#fff3df] px-5 py-3 text-sm font-black md:inline-flex" href="#catalog">Все категории</a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard product={product} key={product.name} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8" id="brands">
        <div className="rounded-[2rem] border border-[#ead7bc] bg-[#fffaf2] p-6 shadow-lg">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9c7a55]">бренды</p>
          <h2 className="mt-2 text-3xl font-black">Бренды появятся отдельным разделом</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6f553a]">Следующим шагом добавим страницы брендов, отзывы, витрины и фильтры. Сейчас главная задача — стабильный покупательский магазин.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8" id="cart">
        <div className="rounded-[2rem] bg-[#2a1b12] p-6 text-white shadow-xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f4d27b]">корзина</p>
          <h2 className="mt-2 text-3xl font-black">Корзина будет следующим модулем</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">Сейчас кнопки товаров уже готовы. Далее подключим количество, итоговую сумму и оформление заказа.</p>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#ead7bc] bg-[#fffaf2]/96 px-3 py-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-2 text-center text-[11px] font-black text-[#6f553a]">
          <a className="rounded-2xl bg-[#fff3df] px-2 py-3" href="/kaskada-/">Главная</a>
          <a className="rounded-2xl bg-[#fff3df] px-2 py-3" href="#catalog">Каталог</a>
          <a className="rounded-2xl bg-[#fff3df] px-2 py-3" href="#products">Товары</a>
          <a className="rounded-2xl bg-[#c97963] px-2 py-3 text-white" href="#cart">Корзина</a>
        </div>
      </nav>
    </main>
  );
}

function ProductCard({ product }: { product: { name: string; brand: string; category: string; price: string; oldPrice: string; badge: string; image: string } }) {
  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-[#ead7bc] bg-[#fffaf2] shadow-lg">
      <div className="relative h-56 overflow-hidden bg-[#efe0cd]">
        <img className="h-full w-full object-cover" src={product.image} alt={product.name} />
        <span className="absolute left-3 top-3 rounded-full bg-[#f4d27b] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#2a1b12]">{product.badge}</span>
      </div>
      <div className="p-4">
        <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#9c7a55]">{product.category}</p>
        <h3 className="mt-2 min-h-[44px] text-base font-black leading-snug">{product.name}</h3>
        <p className="mt-1 text-sm font-bold text-[#4d6b4a]">{product.brand}</p>
        <div className="mt-4 flex items-baseline gap-2">
          <p className="text-xl font-black">{product.price}</p>
          <p className="text-sm font-bold text-[#b69a7a] line-through">{product.oldPrice}</p>
        </div>
        <div className="mt-4 grid grid-cols-[44px_1fr] gap-2">
          <button className="h-11 rounded-2xl border border-[#ead7bc] bg-[#fffaf2] font-black" type="button">♡</button>
          <button className="h-11 rounded-2xl bg-[#c97963] px-4 text-sm font-black text-white" type="button">В корзину</button>
        </div>
      </div>
    </article>
  );
}
