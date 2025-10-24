'use client';

import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle = () => {
  const { language, changeLanguage, availableLanguages } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
      {availableLanguages.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
            language === lang
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-label={`${lang === 'tr' ? 'Türkçe' : 'English'} dilini seç`}
        >
          {lang === 'tr' ? 'TR' : 'EN'}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;