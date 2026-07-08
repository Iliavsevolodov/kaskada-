import type { Metadata, Viewport } from 'next';
import { appConfig } from '@/lib/appConfig';
import './globals.css';

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
  applicationName: appConfig.name,
  manifest: '/kaskada-/manifest.webmanifest'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: appConfig.themeColor
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return <html lang="ru"><body>{props.children}</body></html>;
}
