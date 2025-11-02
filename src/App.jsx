import React, { useState } from 'react';
import Header from './components/Header.jsx';
import UploadPanel from './components/UploadPanel.jsx';
import AdventureSection from './components/AdventureSection.jsx';
import TutorAndMissions from './components/TutorAndMissions.jsx';

export default function App() {
  const [files, setFiles] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <UploadPanel files={files} setFiles={setFiles} />
          </div>
          <div className="lg:col-span-2">
            <AdventureSection files={files} />
          </div>
        </div>
        <TutorAndMissions />
      </main>
      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Aventura AI — Lernen, das Spaß macht.
      </footer>
    </div>
  );
}
