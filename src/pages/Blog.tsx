import React from 'react';
import { motion } from 'motion/react';
import { BlogCard } from '../components/BlogCard';
import { BlogPost } from '../types';
import { useTranslation } from 'react-i18next';

export const Blog = ({ posts }: { posts: BlogPost[] }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">{t('blog.title')}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t('blog.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
