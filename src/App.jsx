import React, { useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Pricing from './components/Pricing.jsx';
import AuthModal from './components/AuthModal.jsx';
import Dashboard from './components/Dashboard.jsx';

export default function App() {
  const [route, setRoute] = useState('home'); // 'home' | 'dashboard'
  const [authed, setAuthed] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const pricingRef = useRef(null);

  const openAuth = () => setAuthOpen(true);
  const closeAuth = () => setAuthOpen(false);

  const onAuthSuccess = () => {
    setAuthed(true);
    setRoute('dashboard');
  };

  const toHome = () => setRoute('home');
  const toDashboard = () => setRoute('dashboard');
  const logout = () => { setAuthed(false); setRoute('home'); };

  return (
    <div className="min-h-screen bg-white">
      <Header
        isAuthed={authed}
        onLoginClick={openAuth}
        onLogout={logout}
        onLogoClick={toHome}
        onGoDashboard={toDashboard}
      />

      {route === 'home' ? (
        <>
          <Hero onGetStarted={openAuth} onViewPricing={() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' })} />
          <div ref={pricingRef}>
            <Pricing onSelect={openAuth} />
          </div>
          <footer className="py-10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Aventura AI — Lernen, das Spaß macht.
          </footer>
        </>
      ) : (
        <Dashboard />
      )}

      <AuthModal open={authOpen} onClose={closeAuth} onSuccess={onAuthSuccess} />
    </div>
  );
}
