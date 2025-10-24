'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({});

const translations = {
  tr: {
    common: {
      goToHome: 'Ana sayfaya git',
      toggleMenu: 'Menüyü aç/kapat',
      loading: 'Yükleniyor...',
      error: 'Bir hata oluştu',
      tryAgain: 'Tekrar dene',
      submit: 'Gönder',
      cancel: 'İptal',
      close: 'Kapat',
    },
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetlerimiz',
      about: 'Hakkımızda',
      portfolio: 'Projelerimiz',
      team: 'Ekibimiz',
      contact: 'İletişim',
      blog: 'Blog',
    },
    hero: {
      title: 'Profesyonel',
      subtitle: 'Yazılım Çözümleri',
      description: 'Her türlü yazılım ihtiyacınız için tek nokta çözüm. Web\'den mobil\'e, masaüstünden cloud\'a, basit otomasyon\'dan enterprise sistemlere kadar teknolojinin her alanında yanınızdayız.',
      cta: 'Çözümlerimi Keşfedin',
      ctaSecondary: 'Ücretsiz Proje Danışmanlığı',
    },
    services: {
      title: 'Sunduğum Çözümler',
      subtitle: '6 yıllık deneyimimle kurumsal yazılım projeleri geliştiriyorum. Portal sistemlerinden ERP entegrasyonlarına, web sitelerinden hosting hizmetlerine kadar deneyim kazandığım alanlarda çözümler sunuyorum.',
      corporatePortal: {
        title: 'Kurumsal Portal Sistemleri',
        description: 'Çok departmanlı kurumsal portallar, İK yönetim sistemleri, anket ve değerlendirme modülleri, izin takip sistemleri. Kullanıcı yetkilendirme ve raporlama.',
      },
      erpIntegration: {
        title: 'ERP & Sistem Entegrasyonları',
        description: 'SGK veri entegrasyonu, ERP sistemlerinden kapı geçiş sistemlerine API bağlantıları, otomatik veri senkronizasyonu ve raporlama.',
      },
      taskManagement: {
        title: 'Görev Yönetim Sistemleri',
        description: 'Flowify benzeri task management sistemleri, email entegrasyonu, workflow yönetimi, otomatik bildirim ve takip sistemleri.',
      },
      webHosting: {
        title: 'Web Siteleri & Hosting',
        description: 'Responsive kurumsal web siteleri, WordPress tema geliştirme, e-ticaret çözümleri, SEO optimizasyonu ve hosting yönetimi.',
      },
    },
    about: {
      title: 'Hakkımda',
      subtitle: 'Yazılım geliştirme uzmanı',
      description: 'Yazılım geliştirme uzmanı olarak, kurumsal projelerde 6 yıllık deneyime sahibim. Portal sistemlerinden ERP entegrasyonlarına kadar gerçek projelerde çözümler geliştiriyorum. Tamamladığım projelerle işletmelerin dijital dönüşümüne katkıda bulunuyor, ihtiyaçlarınıza uygun çözümler geliştiriyorum.',
      experience: {
        title: 'Deneyimim',
        description: '6 yıldır yazılım geliştirme alanında çalışıyorum. Kurumsal portal sistemleri, ERP entegrasyonları, API geliştirme ve web projeleri konularında gerçek deneyime sahibim.',
      },
      stats: {
        projects: 'Tamamlanan Proje',
        projectsCount: '20+',
        clients: 'Memnun Müşteri', 
        clientsCount: '15+',
        experience: 'Yıllık Deneyim',
        experienceCount: '6',
        expertise: 'Ana Yetkinlik Alanı',
        expertiseCount: '7',
      },
    },
    portfolio: {
      title: 'Projelerimiz',
      subtitle: 'Gerçekleştirdiğimiz başarılı projelere göz atın',
      viewProject: 'Projeyi İncele',
      allProjects: 'Tüm Projeler',
    },
    team: {
      title: 'Geliştiricin',
      subtitle: 'Profesyonel yazılım geliştirme hizmetleri',
      role: {
        ceo: 'Kurucu & CEO',
        cto: 'Teknoloji Direktörü',
        lead: 'Yazılım Geliştirme Uzmanı',
        designer: 'UI/UX Tasarımcı',
        developer: 'Yazılım Geliştirici',
      },
    },
    contact: {
      title: 'İletişime Geçin',
      subtitle: 'Projeniz hakkında konuşmak için bugün bize ulaşın. Ücretsiz danışmanlık ve detaylı proje analizi için iletişim formunu doldurun.',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        company: 'Şirket',
        projectType: 'Proje Türü',
        message: 'Proje Detayları',
        messagePlaceholder: 'Projeniz hakkında detaylı bilgi verin...',
        send: 'Teklif İste',
        sending: 'Gönderiliyor...',
        success: 'Mesajınız başarıyla gönderildi! 24 saat içinde geri dönüş yapacağız.',
        error: 'Mesaj gönderilirken bir hata oluştu.',
        guarantee: '⚡ 24 saat içinde geri dönüş garantisi',
      },
      info: {
        address: 'Adres',
        phone: 'Telefon',
        email: 'E-posta',
        hours: 'Çalışma Saatleri',
        hoursValue: 'Pazartesi - Cuma: 09:00 - 18:00',
        addressValue: 'Ankara, Türkiye - Uzaktan çalışma modeli',
        phoneValue: '+90 (530) 186 1546',
        emailValue: 'info@kohesoft.com',
      },
      whyChooseUs: {
        title: 'Neden Beni Seçmelisiniz?',
        item1: 'Ücretsiz proje danışmanlığı',
        item2: '24 saat içinde geri dönüş',
        item3: 'Şeffaf fiyatlandırma',
        item4: 'Proje sonrası destek'
      }
    },
    footer: {
      description: 'Kohezyon Yazılım olarak modern teknolojiler kullanarak işletmeniz için özel yazılım çözümleri geliştiren profesyonel yazılım geliştirme şirketi. Dijital dönüşüm yolculuğunuzda güvenilir partneriniz.',
      quickLinks: 'Hızlı Bağlantılar',
      services: 'Hizmetlerimiz',
      contact: 'İletişim',
      followUs: 'İletişim Bilgileri',  
      rights: 'Tüm hakları saklıdır.',
    },
  },
  en: {
    common: {
      goToHome: 'Go to home',
      toggleMenu: 'Toggle menu',
      loading: 'Loading...',
      error: 'An error occurred',
      tryAgain: 'Try again',
      submit: 'Submit',
      cancel: 'Cancel',
      close: 'Close',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      portfolio: 'Portfolio',
      team: 'Team',
      contact: 'Contact',
      blog: 'Blog',
    },
    hero: {
      title: 'Professional',
      subtitle: 'Software Solutions',
      description: 'One-stop solution for all your software needs. From web to mobile, desktop to cloud, from simple automation to enterprise systems, we are with you in every field of technology.',
      cta: 'Explore My Solutions',
      ctaSecondary: 'Free Project Consultation',
    },
    services: {
      title: 'My Solutions',
      subtitle: 'With 6 years of experience, I develop corporate software projects. I offer solutions in areas where I have gained experience, from portal systems to ERP integrations, from websites to hosting services.',
      corporatePortal: {
        title: 'Corporate Portal Systems',
        description: 'Multi-departmental corporate portals, HR management systems, survey and evaluation modules, leave tracking systems. User authorization and reporting.',
      },
      erpIntegration: {
        title: 'ERP & System Integrations',
        description: 'Social security data integration, API connections from ERP systems to door access systems, automatic data synchronization and reporting.',
      },
      taskManagement: {
        title: 'Task Management Systems',
        description: 'Flowify-like task management systems, email integration, workflow management, automatic notification and tracking systems.',
      },
      webHosting: {
        title: 'Websites & Hosting',
        description: 'Responsive corporate websites, WordPress theme development, e-commerce solutions, SEO optimization and hosting management.',
      },
    },
    about: {
      title: 'About Me',
      subtitle: 'Software development specialist',
      description: 'As a software development specialist, I have 6 years of experience in corporate projects. I develop solutions in real projects from portal systems to ERP integrations. With the projects I have completed, I contribute to the digital transformation of businesses and develop solutions suitable for your needs.',
      experience: {
        title: 'My Experience',
        description: 'I have been working in software development for 6 years. I have real experience in corporate portal systems, ERP integrations, API development and web projects.',
      },
      stats: {
        projects: 'Completed Projects',
        projectsCount: '20+',
        clients: 'Satisfied Clients',
        clientsCount: '15+',
        experience: 'Years Experience',
        experienceCount: '6',
        expertise: 'Main Expertise Areas',
        expertiseCount: '7',
      },
    },
    portfolio: {
      title: 'Our Projects',
      subtitle: 'Take a look at our successful projects',
      viewProject: 'View Project',
      allProjects: 'All Projects',
    },
    team: {
      title: 'The Developer',
      subtitle: 'Professional software development services',
      role: {
        ceo: 'Founder & CEO',
        cto: 'Chief Technology Officer',
        lead: 'Software Development Expert',
        designer: 'UI/UX Designer',
        developer: 'Software Developer',
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Contact us today to discuss your project. Fill out the contact form for free consultation and detailed project analysis.',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        projectType: 'Project Type',
        message: 'Project Details',
        messagePlaceholder: 'Give detailed information about your project...',
        send: 'Request Quote',
        sending: 'Sending...',
        success: 'Your message has been sent successfully! We will get back to you within 24 hours.',
        error: 'An error occurred while sending the message.',
        guarantee: '⚡ 24 hour response guarantee',
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Working Hours',
        hoursValue: 'Monday - Friday: 09:00 - 18:00',
        addressValue: 'Ankara, Turkey - Remote working model',
        phoneValue: '+90 (530) 186 1546',
        emailValue: 'info@kohesoft.com',
      },
      whyChooseUs: {
        title: 'Why Choose Me?',
        item1: 'Free project consultation',
        item2: '24 hour response guarantee',
        item3: 'Transparent pricing',
        item4: 'Post-project support'
      }
    },
    footer: {
      description: 'Kohezyon Software (KoheSoft) is a professional software development company that develops custom software solutions for your business using modern technologies. Your reliable partner in your digital transformation journey.',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      contact: 'Contact',
      followUs: 'Contact Information',
      rights: 'All rights reserved.',
    },
  },
};

export const LanguageProvider = ({ children, defaultLanguage = 'tr' }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && ['tr', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      setLanguage(defaultLanguage);
    }
  }, [defaultLanguage]);

  const changeLanguage = (newLanguage) => {
    if (['tr', 'en'].includes(newLanguage)) {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const value = {
    language,
    changeLanguage,
    t,
    availableLanguages: ['tr', 'en'],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};