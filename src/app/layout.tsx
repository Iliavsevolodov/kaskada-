import type { Metadata, Viewport } from 'next';
import { appConfig } from '@/lib/appConfig';
import './globals.css';

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
  applicationName: appConfig.name,
  manifest: '/kaskada-/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: appConfig.shortName,
    statusBarStyle: 'black-translucent'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: appConfig.themeColor,
  viewportFit: 'cover'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
