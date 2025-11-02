import React from 'react';
import { Rocket, BookOpen, Bot, Target } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">Aventura AI</h1>
            <p className="text-xs text-slate-500">Lernen wird zum Abenteuer</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <div className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4" /> Abenteuer</div>
          <div className="inline-flex items-center gap-2"><Bot className="h-4 w-4" /> AI-Tutor</div>
          <div className="inline-flex items-center gap-2"><Target className="h-4 w-4" /> Missionen</div>
        </nav>
      </div>
    </header>
  );
}
