import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-50 p-12 rounded-3xl text-center border border-slate-100"
      >
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Message Sent!</h3>
        <p className="text-slate-600">Thank you for reaching out. I'll get back to you shortly.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-semibold text-slate-900 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all bg-white"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
          <input
            type="text"
            id="company"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all bg-white"
            placeholder="Acme Corp"
          />
        </div>
      </div>
      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-slate-700 mb-2">What is your biggest AI challenge?</label>
        <textarea
          id="challenge"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all bg-white resize-none"
          placeholder="Tell me about your goals and obstacles..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full md:w-auto"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
        <Send className="ml-2 w-4 h-4" />
      </button>
    </form>
  );
};
