'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Icons from '@/components/ui/Icons';
import Link from 'next/link';

const CookieConsent = () => {
  const { t, language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Function to check if user has accepted analytics cookies
  const hasAnalyticsConsent = () => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      const preferences = JSON.parse(consent);
      return preferences.analytics;
    }
    return false;
  };

  // Make this function available globally for Google Analytics
  useEffect(() => {
    window.hasAnalyticsConsent = hasAnalyticsConsent;
  }, []);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(consent);
      setCookiePreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    
    // Reload page to activate analytics
    window.location.reload();
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setCookiePreferences(onlyNecessary);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(cookiePreferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
    
    // Reload if analytics was enabled
    if (cookiePreferences.analytics) {
      window.location.reload();
    }
  };

  const handlePreferenceChange = (key) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const bannerVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      y: 100, 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  const settingsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            onClick={() => setShowBanner(false)}
          />

          {/* Cookie Banner */}
          <motion.div
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-[70] max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 relative">
              {/* Close Button */}
              <button
                onClick={handleRejectAll}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Çerezleri reddet"
              >
                {React.createElement(Icons['X'], { className: "w-5 h-5" })}
              </button>

              {/* Content */}
              <div className="pr-8">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="flex-shrink-0 mt-1">
                    {React.createElement(Icons['Cookie'], { 
                      className: "w-6 h-6 text-orange-500"
                    })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      {language === 'en' ? 'We use cookies' : 'Çerez kullanıyoruz'}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {language === 'en' 
                        ? 'We use cookies to improve your browsing experience, show personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.'
                        : 'Tarama deneyiminizi iyileştirmek, kişiselleştirilmiş reklamlar göstermek ve trafiğimizi analiz etmek için çerezler kullanıyoruz. "Tümünü Kabul Et"i tıklayarak çerez kullanımımıza izin vermiş olursunuz.'
                      }
                    </p>
                    <p className="text-xs text-gray-500">
                      {language === 'en' ? 'Learn more in our' : 'Daha fazla bilgi için'}{' '}
                      <Link 
                        href={language === 'en' ? '/en/privacy-policy' : '/gizlilik-politikasi'}
                        className="text-primary-600 hover:text-primary-700 underline"
                      >
                        {language === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Cookie Settings Panel */}
                <AnimatePresence>
                  {showSettings && (
                    <motion.div
                      variants={settingsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mb-6 p-4 bg-gray-50 rounded-lg"
                    >
                      <h4 className="font-medium text-gray-900 mb-4">
                        {language === 'en' ? 'Cookie Preferences' : 'Çerez Tercihleri'}
                      </h4>
                      
                      <div className="space-y-3">
                        {/* Necessary Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <label className="font-medium text-sm text-gray-900">
                              {language === 'en' ? 'Necessary Cookies' : 'Gerekli Çerezler'}
                            </label>
                            <p className="text-xs text-gray-600 mt-1">
                              {language === 'en' 
                                ? 'Essential for website functionality'
                                : 'Web sitesinin çalışması için gerekli'
                              }
                            </p>
                          </div>
                          <div className="ml-4">
                            <div className="w-12 h-6 bg-primary-600 rounded-full flex items-center justify-end px-1">
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <label className="font-medium text-sm text-gray-900">
                              {language === 'en' ? 'Analytics Cookies' : 'Analitik Çerezleri'}
                            </label>
                            <p className="text-xs text-gray-600 mt-1">
                              {language === 'en' 
                                ? 'Help us understand how visitors use our website'
                                : 'Ziyaretçilerin sitemizi nasıl kullandığını anlamamıza yardımcı olur'
                              }
                            </p>
                          </div>
                          <div className="ml-4">
                            <button
                              onClick={() => handlePreferenceChange('analytics')}
                              className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                                cookiePreferences.analytics 
                                  ? 'bg-primary-600 justify-end' 
                                  : 'bg-gray-300 justify-start'
                              }`}
                            >
                              <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                            </button>
                          </div>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <label className="font-medium text-sm text-gray-900">
                              {language === 'en' ? 'Marketing Cookies' : 'Pazarlama Çerezleri'}
                            </label>
                            <p className="text-xs text-gray-600 mt-1">
                              {language === 'en' 
                                ? 'Used to show you relevant ads'
                                : 'Size uygun reklamlar göstermek için kullanılır'
                              }
                            </p>
                          </div>
                          <div className="ml-4">
                            <button
                              onClick={() => handlePreferenceChange('marketing')}
                              className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                                cookiePreferences.marketing 
                                  ? 'bg-primary-600 justify-end' 
                                  : 'bg-gray-300 justify-start'
                              }`}
                            >
                              <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                            </button>
                          </div>
                        </div>

                        {/* Preferences Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <label className="font-medium text-sm text-gray-900">
                              {language === 'en' ? 'Preference Cookies' : 'Tercih Çerezleri'}
                            </label>
                            <p className="text-xs text-gray-600 mt-1">
                              {language === 'en' 
                                ? 'Remember your preferences and settings'
                                : 'Tercihlerinizi ve ayarlarınızı hatırlar'
                              }
                            </p>
                          </div>
                          <div className="ml-4">
                            <button
                              onClick={() => handlePreferenceChange('preferences')}
                              className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                                cookiePreferences.preferences 
                                  ? 'bg-primary-600 justify-end' 
                                  : 'bg-gray-300 justify-start'
                              }`}
                            >
                              <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    {React.createElement(Icons['CheckCircle'], { className: "w-4 h-4" })}
                    <span>{language === 'en' ? 'Accept All' : 'Tümünü Kabul Et'}</span>
                  </button>
                  
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    {React.createElement(Icons['Settings'], { className: "w-4 h-4" })}
                    <span>{language === 'en' ? 'Preferences' : 'Tercihler'}</span>
                  </button>
                  
                  {showSettings && (
                    <button
                      onClick={handleSavePreferences}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      {language === 'en' ? 'Save' : 'Kaydet'}
                    </button>
                  )}
                  
                  <button
                    onClick={handleRejectAll}
                    className="text-gray-600 hover:text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    {language === 'en' ? 'Reject All' : 'Tümünü Reddet'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;