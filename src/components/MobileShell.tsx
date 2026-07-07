import { HiOutlineArchiveBox, HiOutlineBuildingStorefront, HiOutlineShoppingBag, HiOutlineUserGroup } from 'react-icons/hi2';

export function MobileShell({ title, role, children }: { title: string; role: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-cream pb-24 text-graphite">
      <header className="sticky top-0 z-40 border-b border-graphite/10 bg-cream/90 px-5 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <div>
            <p className="section-label text-[10px] font-bold text-gold">{role}</p>
            <h1 className="text-xl font-black">{title}</h1>
          </div>
          <a className="rounded-2xl bg-graphite px-4 py-3 text-sm font-black text-cream" href="/kaskada-/">K</a>
        </div>
      </header>
      <section className="mx-auto max-w-md px-5 py-5">{children}</section>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-graphite/10 bg-cream/95 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-2 text-center text-[11px] font-black">
          <a className="rounded-2xl bg-white/80 p-3" href="/kaskada-/buyer-app/"><HiOutlineShoppingBag className="mx-auto mb-1 text-lg" />Купить</a>
          <a className="rounded-2xl bg-white/80 p-3" href="/kaskada-/partner-app/"><HiOutlineUserGroup className="mx-auto mb-1 text-lg" />Партнёр</a>
          <a className="rounded-2xl bg-white/80 p-3" href="/kaskada-/seller-app/"><HiOutlineBuildingStorefront className="mx-auto mb-1 text-lg" />Бренд</a>
          <a className="rounded-2xl bg-graphite p-3 text-cream" href="/kaskada-/catalog/"><HiOutlineArchiveBox className="mx-auto mb-1 text-lg" />Каталог</a>
        </div>
      </nav>
    </main>
  );
}
