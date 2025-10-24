import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Kohezyon Yazılım | Ankara Profesyonel Yazılım Geliştirme & Kurumsal Portal Sistemleri',
  description: 'Ankara merkezli Kohezyon Yazılım olarak 6 yıllık deneyimle ASP.NET, C#, kurumsal portal sistemleri, ERP entegrasyonu ve web uygulamaları geliştiriyoruz. Profesyonel yazılım çözümleri.',
  keywords: 'ankara yazılım geliştirme, kurumsal portal sistemleri, ERP entegrasyonu, ASP.NET geliştirme, C# programlama, kohezyon yazılım, yazılım şirketi ankara',
  openGraph: {
    title: 'Kohezyon Yazılım | Ankara #1 Yazılım Geliştirme Şirketi',
    description: 'Ankara\'nın önde gelen yazılım geliştirme şirketi. 6 yıllık deneyimle kurumsal çözümler, portal sistemleri ve ERP entegrasyonu.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: {
    canonical: 'https://www.kohesoft.com',
    languages: {
      'tr-TR': 'https://www.kohesoft.com',
      'en-US': 'https://www.kohesoft.com/en',
    },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}