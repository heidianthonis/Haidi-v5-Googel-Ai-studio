import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-semibold tracking-tight text-slate-900">Haidi</span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Transforming businesses through strategic AI innovation and human-centered design.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-500 hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-slate-500 hover:text-blue-600 transition-colors">Insights</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/heidianthonis/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:heidi.anthonis@gmail.com" 
                className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Haidi Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
