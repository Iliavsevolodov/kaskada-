export function SiteHeader() {
  return (
    <header className="border-b border-graphite/10 bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a className="text-lg font-black" href="/kaskada-/">Каскада Маркет</a>
        <nav className="hidden gap-5 text-sm font-bold md:flex">
          <a href="/kaskada-/catalog/">Каталог</a>
          <a href="/kaskada-/brands/">Бренды</a>
          <a href="/kaskada-/partners/">Партнёрам</a>
          <a href="/kaskada-/sellers/">Продавцам</a>
        </nav>
        <a className="rounded-full bg-graphite px-5 py-3 text-sm font-black text-cream" href="/kaskada-/dashboard/">Кабинет</a>
      </div>
    </header>
  );
}
