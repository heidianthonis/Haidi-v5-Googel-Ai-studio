import React from 'react';
import { motion } from 'motion/react';
import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-8">{t('contact.title')}</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              {t('contact.description')}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-1">{t('contact.email')}</p>
                  <p className="text-lg text-slate-900">heidi.anthonis@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-1">{t('contact.location')}</p>
                  <p className="text-lg text-slate-900">{t('contact.locationValue')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-1">{t('contact.social')}</p>
                  <a 
                    href="https://www.linkedin.com/in/heidianthonis/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {t('contact.linkedin')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
