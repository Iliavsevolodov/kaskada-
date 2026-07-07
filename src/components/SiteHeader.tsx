export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-cream/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a className="flex items-center gap-3" href="/kaskada-/">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-graphite text-sm font-black text-gold shadow-soft">K</span>
          <div>
            <p className="text-lg font-black leading-none">Каскада Маркет</p>
            <p className="section-label mt-1 text-[10px] font-bold text-neutral-500">premium local marketplace</p>
          </div>
        </a>
        <nav className="hidden items-center gap-2 rounded-full border border-graphite/10 bg-white/60 p-2 md:flex">
          <a className="rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white" href="/kaskada-/catalog/">Каталог</a>
          <a className="rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white" href="/kaskada-/brands/">Бренды</a>
          <a className="rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white" href="/kaskada-/partners/">Партнёрам</a>
          <a className="rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white" href="/kaskada-/sellers/">Продавцам</a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="hidden rounded-full border border-graphite/10 bg-white/70 px-5 py-3 text-sm font-black md:inline-flex" href="/kaskada-/buyer-app/">Приложение</a>
          <a className="rounded-full bg-graphite px-5 py-3 text-sm font-black text-cream shadow-soft" href="/kaskada-/seller-app/">Старт</a>
        </div>
      </div>
    </header>
  );
}
