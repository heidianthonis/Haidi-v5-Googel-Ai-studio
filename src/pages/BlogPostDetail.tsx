import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../types';

export const BlogPostDetail = ({ posts }: { posts: BlogPost[] }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Post not found</h2>
        <Link to="/blog" className="text-blue-600 hover:underline">Back to Insights</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </Link>

        <header className="mb-12">
          <div className="flex items-center space-x-4 text-sm font-medium text-slate-400 mb-6">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-8 border-y border-slate-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold">HA</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Heidi Anthonis</p>
                <p className="text-xs text-slate-500">AI Strategy Consultant</p>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none">
          <div className="markdown-body">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>

        <footer className="mt-20 pt-12 border-t border-slate-100">
          <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Want to dive deeper into this topic?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              I help businesses navigate these shifts and map their AI blind spots. Let's discuss how this applies to your specific context.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex"
            >
              Book a Consultation
            </Link>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};
