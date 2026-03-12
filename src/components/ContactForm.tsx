import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const accessKey = "96adeecf-4f6a-42b3-97c8-df4a56b608cb";
    
    formData.append("access_key", accessKey);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again or email me directly.');
      setStatus('idle');
    }
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
      {/* Honeypot Spam Protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all bg-white"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all bg-white"
            placeholder="jane@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all bg-white"
          placeholder="Acme Corp"
        />
      </div>
      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-slate-700 mb-2">What is your biggest AI challenge?</label>
        <textarea
          id="challenge"
          name="message"
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
