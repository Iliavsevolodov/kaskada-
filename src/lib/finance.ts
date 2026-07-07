export const MARKETPLACE_COMMISSION_RATE = 0.2;
export const SELLER_PAYOUT_RATE = 0.8;
export const REFERRAL_FUND_RATE = 0.1;
export const PLATFORM_FUND_RATE = 0.1;

export const referralRates = [
  { line: 1, rate: 0.05 },
  { line: 2, rate: 0.025 },
  { line: 3, rate: 0.015 },
  { line: 4, rate: 0.005 },
  { line: 5, rate: 0.003 },
  { line: 6, rate: 0.002 }
];

export const platformFundRates = [
  { name: 'Эквайринг и платежи', rate: 0.022 },
  { name: 'Налоги платформы', rate: 0.012 },
  { name: 'Команда и поддержка', rate: 0.015 },
  { name: 'IT и разработка', rate: 0.01 },
  { name: 'Юристы и бухгалтерия', rate: 0.004 },
  { name: 'Антифрод и резервы', rate: 0.005 },
  { name: 'Фонд собственного продукта', rate: 0.01 },
  { name: 'Статусный пул', rate: 0.01 },
  { name: 'Промо, события, поездки', rate: 0.007 },
  { name: 'Чистая прибыль / резерв', rate: 0.005 }
];

export function money(value: number) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(value);
}

export function calculateOrderEconomy(orderTotal: number) {
  const sellerPayout = orderTotal * SELLER_PAYOUT_RATE;
  const referralFund = orderTotal * REFERRAL_FUND_RATE;
  const platformFund = orderTotal * PLATFORM_FUND_RATE;
  const referralLines = referralRates.map((item) => ({
    ...item,
    amount: orderTotal * item.rate
  }));
  const platformItems = platformFundRates.map((item) => ({
    ...item,
    amount: orderTotal * item.rate
  }));

  return {
    orderTotal,
    sellerPayout,
    referralFund,
    platformFund,
    referralLines,
    platformItems
  };
}
