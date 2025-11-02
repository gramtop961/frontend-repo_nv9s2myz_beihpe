import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function AuthModal({ open, onClose, onSuccess }) {
  const [mode, setMode] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess({ email });
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative mx-auto mt-24 w-[95%] max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute right-4 top-4 text-slate-400 hover:text-slate-600" onClick={onClose} aria-label="close">
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setMode('signup')}
                className={`px-3 py-1.5 rounded-lg text-sm ${mode==='signup'?'bg-violet-50 text-violet-700':'text-slate-600'}`}
              >Registrieren</button>
              <button
                onClick={() => setMode('login')}
                className={`px-3 py-1.5 rounded-lg text-sm ${mode==='login'?'bg-violet-50 text-violet-700':'text-slate-600'}`}
              >Anmelden</button>
            </div>
            <form onSubmit={submit} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs text-slate-500 mb-1">E-Mail</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Passwort</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 px-4 py-2.5 rounded-lg bg-violet-600 text-white shadow disabled:opacity-60"
              >
                {loading ? 'Wird verarbeitet…' : (mode === 'signup' ? 'Kostenlos registrieren' : 'Anmelden')}
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500 text-center">Mit der Anmeldung akzeptierst du unsere Richtlinien.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
