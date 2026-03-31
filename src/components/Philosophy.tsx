import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Philosophy = () => {
  const { t } = useTranslation();
  const points = t('philosophy.points', { returnObjects: true }) as string[];

  return (
    <section className="py-24 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-6">
              {t('philosophy.title')}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t('philosophy.description')}
            </p>
            <ul className="space-y-4 mb-10">
              {points.map((point) => (
                <li key={point} className="flex items-start">
                  <div className="mt-1 mr-3 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center text-blue-600 font-semibold hover:underline underline-offset-4"
            >
              {t('philosophy.learnMore')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-white rounded-3xl shadow-xl shadow-blue-100 border border-blue-50 overflow-hidden relative">
               <img 
                src="https://qeosmw0t4ezxbhtg.public.blob.vercel-storage.com/progress.jpg"
                alt="AI Progress" 
                className="w-full h-full object-cover opacity-90"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/consultancy/800/800";
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
