'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import Icons, { IconWrapper } from '@/components/ui/Icons';

const Contact = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          subject: `İletişim Formu - ${formData.company || formData.name}`,
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', data.error);
      }
    } catch (err) {
      setSubmitStatus('error');
      console.error('Network error:', err);
    } finally {
      setIsSubmitting(false);
    }
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

  const contactInfo = [
    {
      icon: 'MapPin',
      title: t('contact.info.address'),
      value: t('contact.info.addressValue'),
      variant: 'danger',
    },
    {
      icon: 'Phone',
      title: t('contact.info.phone'),
      value: t('contact.info.phoneValue'),
      variant: 'success',
    },
    {
      icon: 'Mail',
      title: t('contact.info.email'),
      value: t('contact.info.emailValue'),
      variant: 'info',
    },
    {
      icon: 'Clock',
      title: t('contact.info.hours'),
      value: t('contact.info.hoursValue'),
      variant: 'purple',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <IconWrapper 
                  icon={info.icon} 
                  size="md" 
                  variant={info.variant}
                  className="flex-shrink-0 hover:scale-105"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Why Choose Us Section */}
            <div className="mt-12 p-6 bg-primary-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('contact.whyChooseUs.title')}
              </h3>
              <ul className="space-y-3">
                {[
                  t('contact.whyChooseUs.item1'),
                  t('contact.whyChooseUs.item2'),
                  t('contact.whyChooseUs.item3'),
                  t('contact.whyChooseUs.item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {React.createElement(Icons['CheckCircle'], { 
                        className: "w-5 h-5 text-primary-600"
                      })}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="card p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              <div className="text-center text-sm text-gray-600 mb-4">
                {t('contact.form.guarantee')}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    {React.createElement(Icons['CheckCircle'], { 
                      className: "w-5 h-5 text-green-600"
                    })}
                    <span className="font-medium">
                      Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                    </span>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    {React.createElement(Icons['AlertTriangle'], { 
                      className: "w-5 h-5 text-red-600"
                    })}
                    <span className="font-medium">
                      Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
                    </span>
                  </div>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting && (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                <span>
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;