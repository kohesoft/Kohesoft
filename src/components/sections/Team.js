'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import Icons, { IconWrapper } from '@/components/ui/Icons';

const Team = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMember = {
    id: 1,
    name: 'Berat',
    role: 'Full-Stack Developer',
    avatar: 'Code',
    bio: '6 yıllık yazılım geliştirme deneyimi. Kurumsal portal sistemleri, ERP entegrasyonları ve web projeleri uzmanı.',
    variant: 'primary',
    skills: [
      'ASP.NET & C#',
      'JavaScript & React',
      'SQL Server & MySQL',
      'REST API & SOAP',
      'WordPress & PHP',
      'Linux Server Management'
    ]
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
    <section id="team" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('team.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('team.subtitle')}
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
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="card p-8 text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-6 flex justify-center">
              <IconWrapper 
                icon={teamMember.avatar} 
                size="xl" 
                variant={teamMember.variant}
                className="group-hover:scale-110 transition-transform duration-300 rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {teamMember.name}
            </h3>
            <p className="text-primary-600 font-medium mb-4 text-lg">
              {teamMember.role}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              {teamMember.bio}
            </p>
            
            {/* Skills */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {teamMember.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;