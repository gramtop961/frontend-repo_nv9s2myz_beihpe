import React, { useState } from 'react';
import UploadPanel from './UploadPanel.jsx';
import AdventureSection from './AdventureSection.jsx';
import TutorAndMissions from './TutorAndMissions.jsx';

export default function Dashboard() {
  const [files, setFiles] = useState([]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Dein Dashboard</h1>
          <p className="text-sm text-slate-500">Verwalte Materialien, starte Abenteuer, chatte mit dem Tutor und erledige Missionen.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <UploadPanel files={files} setFiles={setFiles} />
        </div>
        <div className="lg:col-span-2">
          <AdventureSection files={files} />
        </div>
      </div>

      <TutorAndMissions />
    </div>
  );
}
