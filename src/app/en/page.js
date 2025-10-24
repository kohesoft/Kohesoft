import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Kohezyon Software | Professional Software Solutions & Corporate Portal Systems',
  description: 'Professional software development services, corporate portal systems, ERP integration, and task management solutions. Custom software solutions for businesses in Turkey.',
  keywords: 'software development, corporate portal, ERP integration, task management, web development, mobile applications, custom software, Turkey',
  openGraph: {
    title: 'Kohezyon Software | Professional Software Solutions',
    description: 'Professional software development services, corporate portal systems, and custom solutions for businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kohezyon Software',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kohezyon Software - Professional Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kohezyon Software | Professional Software Solutions',
    description: 'Professional software development services, corporate portal systems, and custom solutions for businesses.',
    images: ['/images/twitter-card.jpg'],
  },
  alternates: {
    canonical: 'https://kohesoft.com/en',
    languages: {
      'tr': 'https://kohesoft.com',
      'en': 'https://kohesoft.com/en',
    },
  },
};

export default function HomeEN() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <Contact />
    </main>
  );
}