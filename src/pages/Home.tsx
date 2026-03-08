import React from 'react';
import { motion } from 'motion/react';
import { Hero, Pillars } from '../components/HomeSections';
import { Philosophy } from '../components/Philosophy';
import { BlogCard } from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

export const Home = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Pillars />
      <Philosophy />
      
      {/* Latest Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">Latest Highlights</h2>
              <p className="text-slate-600">Insights and strategies for the evolving AI landscape.</p>
            </div>
            <Link
              to="/blog"
              className="hidden md:flex items-center text-slate-900 font-semibold hover:underline underline-offset-4"
            >
              View all insights
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-12 md:hidden">
            <Link
              to="/blog"
              className="flex items-center justify-center w-full py-4 border border-slate-200 rounded-full text-slate-900 font-semibold"
            >
              View all insights
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
