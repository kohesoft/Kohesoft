import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Toaster } from '@/components/ui/Toaster';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import CookieConsent from '@/components/ui/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Kohezyon Yazılım | Profesyonel Yazılım Çözümleri & Kurumsal Portal Sistemleri',
    template: '%s | Kohezyon Yazılım'
  },
  description: 'Kohezyon Yazılım olarak 6 yıllık deneyimle kurumsal yazılım projeleri geliştiriyoruz. ASP.NET, C#, ERP entegrasyonu, portal sistemleri ve web uygulamaları konularında uzman çözümler sunuyoruz.',
  keywords: [
    'yazılım geliştirme',
    'kurumsal yazılım',
    'portal sistemleri', 
    'ERP entegrasyonu',
    'ASP.NET geliştirme',
    'C# programlama',
    'web uygulamaları',
    'kohezyon yazılım',
    'kohesoft',
    'ankara yazılım',
    'kurumsal çözümler',
    'API geliştirme',
    'SQL Server',
    'sistem entegrasyonu',
    'workflow yönetimi',
    'görev yönetim sistemleri'
  ],
  authors: [{ name: 'Kohezyon Yazılım', url: 'https://www.kohesoft.com' }],
  creator: 'Kohezyon Yazılım',
  publisher: 'Kohezyon Yazılım',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://www.kohesoft.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
      'en-US': '/en',
    },
  },
  category: 'technology',
  classification: 'Software Development Company',
  openGraph: {
    title: 'Kohezyon Yazılım | Ankara Profesyonel Yazılım Geliştirme Hizmetleri',
    description: 'Ankara merkezli Kohezyon Yazılım olarak 6 yıllık deneyimle kurumsal portal sistemleri, ERP entegrasyonu, ASP.NET ve C# ile yazılım geliştirme hizmetleri sunuyoruz.',
    url: 'https://www.kohesoft.com',
    siteName: 'Kohezyon Yazılım',
    images: [
      {
        url: '/images/kohezyon-yazilim-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Kohezyon Yazılım - Ankara Yazılım Geliştirme Şirketi',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
    countryName: 'Turkey',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kohezyon Yazılım | Ankara Yazılım Geliştirme',
    description: 'Kurumsal portal sistemleri, ERP entegrasyonu ve ASP.NET ile yazılım geliştirme hizmetleri. 6 yıllık deneyim.',
    images: ['/images/kohezyon-yazilim-twitter.jpg'],
    site: '@kohezyonyazilim',
    creator: '@kohezyonsoft',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kohezyon Yazılım",
    "alternateName": "KoheSoft",
    "url": "https://www.kohesoft.com",
    "logo": "https://www.kohesoft.com/favicon.svg",
    "image": "https://www.kohesoft.com/images/kohezyon-yazilim-og.jpg",
    "description": "Ankara merkezli profesyonel yazılım geliştirme şirketi. Kurumsal portal sistemleri, ERP entegrasyonu ve ASP.NET ile yazılım çözümleri.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ankara",
      "addressCountry": "TR",
      "addressRegion": "Ankara"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-530-186-1546",
      "contactType": "customer service",
      "email": "info@kohesoft.com",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": [
      "https://www.kohesoft.com"
    ],
    "founder": {
      "@type": "Person",
      "name": "Berat",
      "jobTitle": "Full-Stack Developer"
    },
    "numberOfEmployees": 1,
    "foundingDate": "2019",
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "knowsAbout": [
      "ASP.NET Development",
      "C# Programming", 
      "ERP Integration",
      "Portal Systems",
      "Web Development",
      "API Development",
      "SQL Server",
      "System Integration"
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Yazılım Geliştirme Hizmetleri",
        "description": "Kurumsal portal sistemleri, ERP entegrasyonu, web uygulamaları geliştirme"
      }
    }
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
        <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <LanguageProvider>
          {children}
          <Toaster />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}