import React from 'react';
import { motion } from 'framer-motion';
import { Star, Rocket, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '0€',
    period: 'für immer',
    features: [
      '3 PDFs / Monat',
      'Basis-Abenteuer',
      'AI-Tutor (begrenzt)'
    ],
    icon: Star,
    highlight: false,
  },
  {
    name: 'Pro',
    price: '9,90€',
    period: 'pro Monat',
    features: [
      'Unlim. PDFs',
      'Fortgeschr. Abenteuer',
      'AI-Tutor (schnell)',
      'Tägliche Missionen + XP'
    ],
    icon: Rocket,
    highlight: true,
  },
  {
    name: 'Ultimate',
    price: '19,90€',
    period: 'pro Monat',
    features: [
      'Koop-Abenteuer',
      'Prüfungsmodus',
      'Priorisierter Support'
    ],
    icon: Crown,
    highlight: false,
  }
];

export default function Pricing({ onSelect }) {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Transparente Preise</h2>
          <p className="mt-3 text-slate-600">Starte kostenlos und werde Pro, wenn du bereit bist Level aufzusteigen.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`rounded-2xl border ${p.highlight ? 'border-violet-300 bg-white shadow-xl' : 'border-slate-200 bg-white shadow-sm'} p-6 relative`}
            >
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-xl grid place-items-center ${p.highlight ? 'bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  {React.createElement(p.icon, { className: 'h-5 w-5' })}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-slate-900">{p.price}</span>
                <span className="ml-2 text-sm text-slate-500">{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-500 inline-block" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelect(p.name)}
                className={`mt-6 w-full px-4 py-2.5 rounded-lg font-medium ${p.highlight ? 'bg-violet-600 text-white' : 'bg-slate-900 text-white'}`}
                type="button"
              >
                {p.highlight ? 'Pro testen' : 'Auswählen'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
