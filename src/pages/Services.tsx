import React from 'react';
import { motion } from 'motion/react';
import { ServiceCard } from '../components/ServiceCard';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Service } from '../types';

export const Services = () => {
  const { t } = useTranslation();
  const mainServices = t('services.main', { returnObjects: true }) as Service[];
  const additionalServices = t('services.additional', { returnObjects: true }) as Array<{ title: string, description: string }>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">{t('services.title')}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {Array.isArray(mainServices) && mainServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-32">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-slate-900" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">{t('services.additionalTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {Array.isArray(additionalServices) && additionalServices.map((service) => (
              <div key={service.title} className="group">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="bg-blue-600 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">{t('services.cta.title')}</h2>
            <p className="text-blue-100 text-lg mb-10">
              {t('services.cta.description')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-blue-600 font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              {t('services.cta.button')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          {/* Subtle glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
        </section>
      </div>
    </motion.div>
  );
};
