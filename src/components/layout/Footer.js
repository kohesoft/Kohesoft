'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Icons from '@/components/ui/Icons';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
    { href: '#team', label: t('nav.team') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const services = [
    { label: t('services.corporatePortal.title') },
    { label: t('services.erpIntegration.title') },
    { label: t('services.taskManagement.title') },
    { label: t('services.webHosting.title') },
  ];

  const socialLinks = [
    { icon: 'Mail', label: 'Email', href: 'mailto:info@kohesoft.com' },
    { icon: 'Phone', label: 'Telefon', href: 'tel:+905301861546' },
    { icon: 'MapPin', label: 'Adres', href: '#' },
    { icon: 'Globe', label: 'Website', href: '#' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
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
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">Kohezyon Yazılım</span>
                <span className="text-sm text-gray-400 -mt-1">www.kohesoft.com</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <h4 className="font-semibold text-lg mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  {React.createElement(Icons[social.icon], { 
                    className: "w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} Kohezyon Yazılım. {t('footer.rights')} Türkiye'den ❤️ ile yapıldı.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href={language === 'en' ? "/en/privacy-policy" : "/gizlilik-politikasi"} 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              {language === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}
            </Link>
            <Link 
              href={language === 'en' ? "/en/terms-of-service" : "/kullanim-sartlari"} 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              {language === 'en' ? 'Terms of Service' : 'Kullanım Şartları'}
            </Link>
            <button 
              onClick={() => {
                // Show cookie settings
                localStorage.removeItem('cookie-consent');
                window.location.reload();
              }}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              {language === 'en' ? 'Cookie Settings' : 'Çerez Ayarları'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;