import { SiteHeader } from '@/components/SiteHeader';
import { buyerBenefits } from '@/lib/data';

export default function BuyersPage() {
  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="section-label text-xs font-bold text-gold">Покупателям</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Покупки через Каскада Маркет</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">Покупатель видит товары, бренды, историю заказов, бонусы и поддержку.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {buyerBenefits.map((item) => <div className="card-glass rounded-[1.8rem] p-6 text-lg font-bold leading-8 shadow-soft" key={item}>{item}</div>)}
        </div>
      </section>
    </main>
  );
}
