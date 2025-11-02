import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onGetStarted, onViewPricing }) {
  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Mach dein Lernen zum Abenteuer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-slate-700"
          >
            Lade deine PDFs hoch, lass die AI daraus spielerische Quests erstellen, lerne mit einem persönlichen Tutor und sammle täglich XP.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={onGetStarted}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-xl"
              type="button"
            >
              Kostenlos starten
            </button>
            <button
              onClick={onViewPricing}
              className="px-5 py-3 rounded-xl border border-slate-300 bg-white/80 backdrop-blur hover:bg-white"
              type="button"
            >
              Preise ansehen
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-sm text-slate-500"
          >
            Keine Kreditkarte nötig. Starte in unter 60 Sekunden.
          </motion.div>
        </div>
        <div className="relative">
          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-6 right-4 rounded-2xl bg-white shadow-lg p-4 border border-slate-100"
          >
            <p className="text-sm font-semibold text-slate-900">Mario-Style Learning</p>
            <p className="text-xs text-slate-500">Mit Quests, Bossfights & Abzeichen</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="absolute bottom-0 left-0 rounded-2xl bg-white shadow-lg p-4 border border-slate-100"
          >
            <p className="text-sm font-semibold text-slate-900">+120k Fragen beantwortet</p>
            <p className="text-xs text-slate-500">durch den AI-Tutor</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
