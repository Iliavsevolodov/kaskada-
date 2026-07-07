import { HiOutlineArchiveBox, HiOutlineChartBar, HiOutlineCreditCard, HiOutlineDocumentText } from 'react-icons/hi2';
import { MobileShell } from '@/components/MobileShell';

export default function SellerAppPage() {
  return (
    <MobileShell title="Продавец" role="seller app">
      <div className="rounded-[2rem] bg-graphite p-6 text-cream shadow-soft">
        <p className="text-sm text-cream/60">Продажи месяца</p>
        <p className="mt-2 text-4xl font-black text-gold">842 000 ₽</p>
        <p className="mt-2 text-sm text-cream/70">к выплате: 673 600 ₽</p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <AppTile icon={<HiOutlineArchiveBox />} title="Товары" text="24 активных" />
        <AppTile icon={<HiOutlineDocumentText />} title="Заказы" text="128 за месяц" />
        <AppTile icon={<HiOutlineCreditCard />} title="Финансы" text="80% продавцу" />
        <AppTile icon={<HiOutlineChartBar />} title="Аналитика" text="рейтинг 4.9" />
      </div>
      <div className="mt-6 rounded-[1.8rem] bg-white/70 p-5 shadow-soft">
        <h2 className="text-2xl font-black">Подписка</h2>
        <p className="mt-2 text-4xl font-black">1490 ₽</p>
        <p className="mt-2 text-sm text-neutral-500">с 3 месяца работы на платформе</p>
      </div>
    </MobileShell>
  );
}

function AppTile({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="card-glass rounded-[1.5rem] p-4 shadow-soft"><p className="text-2xl text-neutral-700">{icon}</p><p className="mt-2 font-black">{title}</p><p className="text-sm text-neutral-500">{text}</p></div>;
}
