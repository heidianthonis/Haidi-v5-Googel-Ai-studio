import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Transform Your Business with <Link to="/services" className="text-blue-600 italic hover:underline underline-offset-8 decoration-blue-200">AI Strategy</Link>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              I help companies discover AI use cases, navigate adoption challenges, and create enhanced customer journeys that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Link to="/services" className="block relative z-10 aspect-[4/5] max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-200/50 border-8 border-white hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://qeosmw0t4ezxbhtg.public.blob.vercel-storage.com/strategy.jpg"
                alt="AI Strategy" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800";
                }}
                referrerPolicy="no-referrer"
              />
            </Link>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sky-100 rounded-full blur-3xl opacity-60 animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>
      
      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl opacity-40 -z-10" />
    </section>
  );
};

export const Pillars = () => {
  const pillars = [
    {
      id: "01",
      title: "AI Use Case Discovery",
      desc: "Identify high-impact AI opportunities tailored to your business goals and industry landscape.",
      icon: Search,
      link: "/services#use-case-discovery"
    },
    {
      id: "02",
      title: "AI Adoption Strategy",
      desc: "Navigate the complexities of AI implementation with proven frameworks and best practices.",
      icon: Rocket,
      link: "/services#adoption-programmes"
    },
    {
      id: "03",
      title: "Customer Journey AI",
      desc: "Enhance customer experiences with AI-powered touchpoints across the entire journey.",
      icon: Users,
      link: "/services#customer-journeys"
    }
  ];

  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, idx) => (
            <Link 
              key={pillar.title} 
              to={pillar.link}
              className="block group h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-full p-8 rounded-3xl bg-white border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500">
                    <pillar.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="text-4xl font-bold text-slate-100 group-hover:text-blue-50 transition-colors duration-500">
                    {pillar.id}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
                <div className="mt-8 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
