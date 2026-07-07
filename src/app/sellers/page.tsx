import { SiteHeader } from '@/components/SiteHeader';

export default function SellersPage() {
  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="section-label text-xs font-bold text-gold">Продавцам</p>
        <h1 className="mt-3 text-5xl font-black">Кабинет продавца</h1>
        <p className="mt-5 text-lg text-neutral-700">Товары, заказы, финансы и подписка.</p>
      </section>
    </main>
  );
}
