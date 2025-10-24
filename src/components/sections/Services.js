'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import Icons, { IconWrapper } from '@/components/ui/Icons';

const Services = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: 'Building',
      title: t('services.corporatePortal.title'),
      description: t('services.corporatePortal.description'),
      features: ['ASP.NET', 'C#', 'SQL Server', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      icon: 'Database',
      title: t('services.erpIntegration.title'),
      description: t('services.erpIntegration.description'),
      features: ['REST API', 'SOAP', 'XML', 'JSON', 'Web Services', 'Database Integration'],
    },
    {
      icon: 'CheckCircle',
      title: t('services.taskManagement.title'),
      description: t('services.taskManagement.description'),
      features: ['Email Integration', 'Task Management', 'Workflow Engine', 'Notification System'],
    },
    {
      icon: 'Globe',
      title: t('services.webHosting.title'),
      description: t('services.webHosting.description'),
      features: ['React', 'WordPress', 'PHP', 'MySQL', 'Responsive Design', 'SEO'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

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
    <section id="services" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {t('services.title')}
            <span className="sr-only">- Kurumsal Portal, ERP Entegrasyonu, Web Uygulamaları</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 flex justify-center">
                <IconWrapper 
                  icon={service.icon} 
                  size="lg" 
                  variant="primary"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;