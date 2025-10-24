'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '../ui/LanguageToggle';

const MobileMenu = ({ isOpen, onClose }) => {
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
    onClose();
    
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
    
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50"
          >
            <div className="container-custom py-6">
              <nav className="space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="block py-3 px-4 text-lg font-medium text-gray-900 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div
                variants={itemVariants}
                initial="closed"
                animate="open"
                transition={{ duration: 0.3, delay: navigationItems.length * 0.1 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <LanguageToggle />
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;