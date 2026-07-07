import { HiMagnifyingGlass, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineSquares2X2, HiUserCircle } from 'react-icons/hi2';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite/8 bg-cream/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a className="flex items-center gap-3" href="/kaskada-/">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-graphite text-xs font-black text-gold">К</span>
          <div>
            <p className="text-base font-black leading-none">Каскада Маркет</p>
            <p className="section-label mt-1 text-[10px] font-bold text-neutral-500">платформа покупок</p>
          </div>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-graphite/8 bg-white/72 p-1.5 md:flex">
          <a className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-neutral-700 transition hover:bg-white hover:text-graphite" href="/kaskada-/catalog/">Каталог</a>
          <a className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-neutral-700 transition hover:bg-white hover:text-graphite" href="/kaskada-/catalog/#new">Новинки</a>
          <a className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-neutral-700 transition hover:bg-white hover:text-graphite" href="/kaskada-/catalog/#sale">Акции</a>
          <a className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-neutral-700 transition hover:bg-white hover:text-graphite" href="/kaskada-/brands/">Бренды</a>
        </nav>
        <div className="flex items-center gap-2">
          <a className="hidden h-10 w-10 items-center justify-center rounded-full border border-graphite/8 bg-white/76 text-neutral-700 md:inline-flex" href="/kaskada-/catalog/"><HiMagnifyingGlass /></a>
          <a className="hidden h-10 w-10 items-center justify-center rounded-full border border-graphite/8 bg-white/76 text-neutral-700 md:inline-flex" href="/kaskada-/brands/"><HiOutlineSquares2X2 /></a>
          <a className="hidden h-10 w-10 items-center justify-center rounded-full border border-graphite/8 bg-white/76 text-neutral-700 md:inline-flex" href="/kaskada-/buyer-app/"><HiOutlineHeart /></a>
          <a className="h-10 w-10 items-center justify-center rounded-full border border-graphite/8 bg-white/76 text-neutral-700 inline-flex" href="/kaskada-/buyer-app/"><HiOutlineShoppingBag /></a>
          <a className="rounded-full bg-graphite px-4 py-2.5 text-[13px] font-semibold text-cream inline-flex items-center gap-2" href="/kaskada-/seller-app/"><HiUserCircle /> Войти</a>
        </div>
      </div>
    </header>
  );
}
