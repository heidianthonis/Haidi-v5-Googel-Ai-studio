import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { BlogPostDetail } from './pages/BlogPostDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { generateBlogPosts } from './services/geminiService';
import { BlogPost } from './types';
import { useTranslation } from 'react-i18next';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Main application component
export default function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const generatedPosts = await generateBlogPosts(i18n.language);
        setPosts(generatedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
          <p className="text-slate-500 font-medium tracking-wide">Generating Insights...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home posts={posts} />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog posts={posts} />} />
              <Route path="/blog/:id" element={<BlogPostDetail posts={posts} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
