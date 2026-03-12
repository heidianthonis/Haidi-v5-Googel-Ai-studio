import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const About = () => {
  const philosophy = [
    {
      title: "Human-Centered AI",
      desc: "Technology should enhance human capabilities, not replace them. I design AI solutions that augment human decision-making and creativity."
    },
    {
      title: "Practical Innovation",
      desc: "Innovation without execution is just imagination. I focus on solutions that can be implemented and deliver measurable business value."
    },
    {
      title: "Continuous Learning",
      desc: "The AI landscape evolves rapidly. I stay at the forefront of technology trends while grounding recommendations in proven best practices."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-8 leading-tight">
              Helping businesses thrive in the AI Era.
            </h1>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm passionate about bridging the gap between cutting-edge AI technology and practical business value. With a background in technology consulting and digital transformation, I help organizations navigate the complexities of AI adoption.
              </p>
              <p>
                My approach combines strategic thinking with hands-on expertise, ensuring that AI initiatives deliver measurable results while enhancing the human experience at every touchpoint.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm relative group">
              <img 
                src="https://qeosmw0t4ezxbhtg.public.blob.vercel-storage.com/profile.jpg"
                alt="Haidi Founder" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800";
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-[#f8faff] rounded-[2.5rem] p-12 lg:p-20 border border-blue-50/50">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Philosophy</span>
          </h2>
          <div className="space-y-6 max-w-4xl">
            {philosophy.map((item) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[1.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
