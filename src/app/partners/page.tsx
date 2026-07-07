import { SiteHeader } from '@/components/SiteHeader';

export default function PartnersPage() {
  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="section-label text-xs font-bold text-gold">Партнёрам</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Партнёрский кабинет</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">Личная ссылка, витрина, линии, оборот, начисления и прогресс статуса.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="card-glass rounded-[1.8rem] p-6 shadow-soft"><p className="text-3xl font-black">5%</p><p className="font-bold">1 линия</p></div>
          <div className="card-glass rounded-[1.8rem] p-6 shadow-soft"><p className="text-3xl font-black">2.5%</p><p className="font-bold">2 линия</p></div>
          <div className="card-glass rounded-[1.8rem] p-6 shadow-soft"><p className="text-3xl font-black">1.5%</p><p className="font-bold">3 линия</p></div>
        </div>
      </section>
    </main>
  );
}
