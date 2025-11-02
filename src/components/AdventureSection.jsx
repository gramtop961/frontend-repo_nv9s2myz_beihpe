import React, { useMemo, useState } from 'react';
import { Sword, Sparkles, ListChecks } from 'lucide-react';

export default function AdventureSection({ files }) {
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);
  const [adventure, setAdventure] = useState(null);

  const fileList = useMemo(() => files.map(f => ({ id: f.id, name: f.name })), [files]);

  const toggle = (id) => setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

  const generate = () => {
    const chosen = fileList.filter(f => selected[f.id]);
    if (!chosen.length) return;
    setLoading(true);
    // Simulate AI generation locally
    setTimeout(() => {
      const title = `Abenteuer: Wissenseroberung (${chosen.length} Material${chosen.length>1?'ien':''})`;
      const stages = [
        'Kapitel-Scan: Schlüsselpunkte und Vokabeln erkennen',
        'Quiz-Pfad: Multiple Choice, Wahr/Falsch, Lückentext',
        'Boss-Rätsel: Anwendungsaufgaben mit Hinweisen',
        'Belohnung: Abzeichen & XP für abgeschlossene Aufgaben',
      ];
      setAdventure({ title, stages, materials: chosen.map(c => c.name) });
      setLoading(false);
    }, 900);
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Abenteuer</h2>
          <p className="text-sm text-slate-500">Wähle Materialien aus und lass die AI ein spielerisches Lernabenteuer erstellen.</p>
        </div>
      </div>

      {fileList.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">Lade zuerst ein paar PDFs hoch, um ein Abenteuer zu starten.</p>
      ) : (
        <div className="mt-4">
          <div className="grid sm:grid-cols-2 gap-3">
            {fileList.map((f) => (
              <label key={f.id} className={`flex items-center gap-3 p-3 rounded-lg border ${selected[f.id] ? 'border-violet-500 bg-violet-50' : 'border-slate-200 hover:border-slate-300'}`}>
                <input
                  type="checkbox"
                  checked={!!selected[f.id]}
                  onChange={() => toggle(f.id)}
                  className="h-4 w-4 accent-violet-600"
                />
                <span className="text-sm text-slate-700 truncate">{f.name}</span>
              </label>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              disabled={loading || !Object.values(selected).some(Boolean)}
              onClick={generate}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white shadow disabled:opacity-50"
              type="button"
            >
              {loading ? (
                <>
                  <Sparkles className="h-4 w-4 animate-pulse" /> Wird erstellt...
                </>
              ) : (
                <>
                  <Sword className="h-4 w-4" /> Abenteuer generieren
                </>
              )}
            </button>
            {adventure && (
              <div className="text-sm text-slate-500">Materialien: {adventure.materials.length}</div>
            )}
          </div>

          {adventure && (
            <div className="mt-6 rounded-xl border border-slate-200 p-4">
              <h3 className="text-base font-semibold text-slate-900">{adventure.title}</h3>
              <ol className="mt-3 space-y-2">
                {adventure.stages.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 text-violet-600">{i + 1}.</span>
                    <span className="flex-1">{s}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 inline-flex items-center gap-2 text-violet-600 font-medium">
                <ListChecks className="h-4 w-4" /> Starte das Abenteuer und sammle XP!
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
