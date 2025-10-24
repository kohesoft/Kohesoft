'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Mock portfolio data
  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      description: 'Modern e-ticaret çözümü',
      image: '/images/project-1.jpg',
      tags: ['Modern Framework', 'E-commerce', 'Payment'],
      category: 'web'
    },
    {
      id: 2,
      title: 'Kurumsal Web Sitesi',
      description: 'Responsive kurumsal website',
      image: '/images/project-2.jpg',
      tags: ['Responsive', 'Corporate', 'CMS'],
      category: 'web'
    },
    {
      id: 3,
      title: 'Mobil Uygulama',
      description: 'Cross-platform mobil uygulama',
      image: '/images/project-3.jpg',
      tags: ['Native App', 'iOS', 'Android'],
      category: 'mobile'
    },
    {
      id: 4,
      title: 'Yönetim Paneli',
      description: 'Comprehensive admin dashboard',
      image: '/images/project-4.jpg',
      tags: ['Dashboard', 'Analytics', 'Management'],
      category: 'web'
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="portfolio" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-4xl">
                🚀
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn-outline w-full">
                  {t('portfolio.viewProject')}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;