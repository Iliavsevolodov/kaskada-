import { MobileShell } from '@/components/MobileShell';

export default function PartnerAppPage() {
  return (
    <MobileShell title="Партнёр" role="partner app">
      <div className="rounded-[2rem] bg-graphite p-6 text-cream shadow-soft">
        <p className="text-sm text-cream/60">Оборот структуры</p>
        <p className="mt-2 text-4xl font-black text-gold">14.8 млн ₽</p>
        <p className="mt-2 text-sm text-cream/70">до следующего статуса: 5.2 млн ₽</p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <AppTile icon="🔗" title="Ссылка" text="скопировать" />
        <AppTile icon="👥" title="Линии" text="6 уровней" />
        <AppTile icon="💰" title="Начисления" text="286 400 ₽" />
        <AppTile icon="🏆" title="Статус" text="Амбассадор" />
      </div>
      <div className="mt-6 rounded-[1.8rem] bg-white/70 p-5 shadow-soft">
        <h2 className="text-2xl font-black">Ветки</h2>
        {['Ветка Анны', 'Ветка Максима', 'Ветка Ольги'].map((item, index) => (
          <div className="mt-3 rounded-2xl bg-cream p-4" key={item}>
            <p className="font-black">{item}</p>
            <p className="text-sm text-neutral-500">{index + 1}. оборот растёт</p>
          </div>
        ))}
      </div>
    </MobileShell>
  );
}

function AppTile({ icon, title, text }: { icon: string; title: string; text: string }) {
  return <div className="card-glass rounded-[1.5rem] p-4 shadow-soft"><p className="text-2xl">{icon}</p><p className="mt-2 font-black">{title}</p><p className="text-sm text-neutral-500">{text}</p></div>;
}
