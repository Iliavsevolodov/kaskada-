import type { MetadataRoute } from 'next';
import { appConfig } from '@/lib/appConfig';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appConfig.name,
    short_name: appConfig.shortName,
    description: appConfig.description,
    start_url: `${appConfig.basePath}/`,
    scope: `${appConfig.basePath}/`,
    display: 'standalone',
    background_color: appConfig.backgroundColor,
    theme_color: appConfig.themeColor,
    orientation: 'portrait-primary',
    categories: ['shopping', 'business', 'lifestyle']
  };
}
