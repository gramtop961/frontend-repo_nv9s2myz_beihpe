import React from 'react';
import { Rocket } from 'lucide-react';

export default function Header({ isAuthed, onLoginClick, onLogout, onLogoClick, onGoDashboard }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button onClick={onLogoClick} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="text-left">
            <span className="block text-xl font-semibold tracking-tight text-slate-900">Aventura AI</span>
            <span className="block text-xs text-slate-500">Lernen wird zum Abenteuer</span>
          </div>
        </button>
        <div className="flex items-center gap-3">
          {isAuthed ? (
            <>
              <button onClick={onGoDashboard} className="px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white hover:bg-slate-50">Dashboard</button>
              <button onClick={onLogout} className="px-3 py-2 text-sm rounded-lg bg-slate-900 text-white">Abmelden</button>
            </>
          ) : (
            <>
              <button onClick={onLoginClick} className="px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white hover:bg-slate-50">Anmelden</button>
              <button onClick={onLoginClick} className="px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">Kostenlos starten</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
