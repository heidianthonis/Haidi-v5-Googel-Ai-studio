import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

export const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-all"
    >
      <div className="p-8">
        <div className="flex items-center space-x-4 text-xs font-medium text-slate-400 mb-4">
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:underline underline-offset-4"
        >
          Read Article
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
