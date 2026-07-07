import { HiOutlineHeart, HiOutlineHome, HiOutlineShoppingBag, HiOutlineSquares2X2, HiOutlineUser } from 'react-icons/hi2';

export function BuyerBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#d8c3a8]/70 bg-[#fffaf2]/96 px-2 py-2 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1 text-center text-[10px] font-bold text-[#8f765a]">
        <a className="rounded-2xl border border-[#ead6ba] bg-[#fff3df] px-2 py-2 text-[#2a1b12]" href="/kaskada-/"><HiOutlineHome className="mx-auto mb-1 text-xl" />Главная</a>
        <a className="rounded-2xl border border-[#ead6ba] bg-[#fffaf2] px-2 py-2" href="/kaskada-/#catalog"><HiOutlineSquares2X2 className="mx-auto mb-1 text-xl" />Каталог</a>
        <a className="rounded-2xl border border-[#ead6ba] bg-[#fffaf2] px-2 py-2" href="/kaskada-/#favorites"><HiOutlineHeart className="mx-auto mb-1 text-xl" />Избранное</a>
        <a className="rounded-2xl border border-[#ead6ba] bg-[#fffaf2] px-2 py-2" href="/kaskada-/#cart"><HiOutlineShoppingBag className="mx-auto mb-1 text-xl" />Корзина</a>
        <a className="rounded-2xl border border-[#ead6ba] bg-[#fffaf2] px-2 py-2" href="/kaskada-/#profile"><HiOutlineUser className="mx-auto mb-1 text-xl" />Профиль</a>
      </div>
    </nav>
  );
}
