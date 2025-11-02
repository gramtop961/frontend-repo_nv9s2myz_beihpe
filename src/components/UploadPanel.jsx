import React, { useRef, useState } from 'react';
import { UploadCloud, FileText, Trash2 } from 'lucide-react';

export default function UploadPanel({ files, setFiles }) {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  const onFiles = (fileList) => {
    const accepted = Array.from(fileList).filter((f) => f.type === 'application/pdf');
    if (accepted.length) {
      const mapped = accepted.map((f) => ({ id: crypto.randomUUID(), name: f.name, size: f.size }));
      setFiles((prev) => [...prev, ...mapped]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer?.files?.length) onFiles(e.dataTransfer.files);
  };

  const handleRemove = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Materialien hochladen</h2>
          <p className="text-sm text-slate-500">PDFs hinzufügen, die später zu Abenteuern und Übungen werden.</p>
        </div>
      </div>

      <div
        onDragEnter={() => setDragActive(true)}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`mt-4 rounded-xl border-2 border-dashed ${dragActive ? 'border-violet-500 bg-violet-50' : 'border-slate-300'} grid place-items-center p-8 transition-colors`}
      >
        <button
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow hover:shadow-md"
          type="button"
        >
          <UploadCloud className="h-4 w-4" /> PDF auswählen oder hierher ziehen
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          multiple
          onChange={(e) => e.target.files && onFiles(e.target.files)}
          className="hidden"
        />
      </div>

      {files.length > 0 && (
        <ul className="mt-4 divide-y divide-slate-200">
          {files.map((f) => (
            <li key={f.id} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-slate-100 grid place-items-center text-slate-700">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">{f.name}</p>
                  <p className="text-xs text-slate-500">{(f.size / 1024).toFixed(0)} KB</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(f.id)}
                className="inline-flex items-center gap-2 text-slate-500 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" /> Entfernen
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
