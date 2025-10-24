'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

const Navigation = () => {
  const { t, language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
    { href: '#team', label: t('nav.team') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    // Eğer yasal sayfalardaysak ana sayfaya yönlendir
    const isOnLegalPage = pathname.includes('/gizlilik-politikasi') || 
                         pathname.includes('/kullanim-sartlari') ||
                         pathname.includes('/privacy-policy') ||
                         pathname.includes('/terms-of-service');
    
    if (isOnLegalPage) {
      const homeUrl = language === 'en' ? '/en' : '/';
      router.push(homeUrl + href);
      return;
    }
    
    // Ana sayfadaysak normal scroll yap
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="flex items-center space-x-8">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(e) => handleSmoothScroll(e, item.href)}
          className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full" />
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;