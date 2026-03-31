import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Sparkles, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'nl' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-semibold tracking-tight text-slate-900">Haidi</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors text-xs font-semibold uppercase tracking-wider"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{i18n.language === 'en' ? 'NL' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors text-xs font-semibold uppercase tracking-wider"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{i18n.language === 'en' ? 'NL' : 'EN'}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-500 hover:text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
