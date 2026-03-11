import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Service } from '../types';

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col scroll-mt-32"
    >
      {service.image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      <div className="p-10 flex-grow">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">{service.title}</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
        <ul className="space-y-4">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start text-sm text-slate-700">
              <Check className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
