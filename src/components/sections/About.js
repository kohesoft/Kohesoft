'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('about.subtitle')}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('about.experience.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.experience.description')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: t('about.stats.projectsCount'), label: t('about.stats.projects') },
              { number: t('about.stats.clientsCount'), label: t('about.stats.clients') },
              { number: t('about.stats.experienceCount'), label: t('about.stats.experience') },
              { number: t('about.stats.expertiseCount'), label: t('about.stats.expertise') },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 card">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;