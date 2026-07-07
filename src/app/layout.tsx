import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Каскада Маркет',
  description: 'Маркетплейс локальных брендов, который платит за рекомендации.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
