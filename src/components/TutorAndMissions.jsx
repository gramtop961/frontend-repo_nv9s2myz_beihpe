import React, { useMemo, useRef, useState } from 'react';
import { Bot, Send, Target, CheckCircle2, Circle } from 'lucide-react';

function ChatBubble({ role, text }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
      <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm shadow ${isUser ? 'bg-violet-600 text-white rounded-br-sm' : 'bg-slate-100 text-slate-800 rounded-bl-sm'}`}>
        {text}
      </div>
    </div>
  );
}

export default function TutorAndMissions() {
  // Simple local state to simulate chat + missions
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! Ich bin dein AI-Tutor. Frag mich etwas zu deinen Aufgaben.' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const [missions, setMissions] = useState([
    { id: 'm1', title: '10 Quizfragen beantworten', done: false },
    { id: 'm2', title: '1 Abenteuer abschließen', done: false },
    { id: 'm3', title: 'Vokabelliste wiederholen', done: false },
  ]);

  const completed = useMemo(() => missions.filter(m => m.done).length, [missions]);

  const send = () => {
    const value = input.trim();
    if (!value) return;
    const userMsg = { role: 'user', text: value };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulate AI reply
    setTimeout(() => {
      const hint = value.length > 100 ? 'Guter ausführlicher Ansatz!' : 'Klingt spannend!';
      const reply = {
        role: 'assistant',
        text: `Ich denke so darüber: ${value.replace(/\?$/, '')}? ${hint} Konzentriere dich auf Schlüsselbegriffe und Beispiele.`,
      };
      setMessages((prev) => [...prev, reply]);
    }, 500);

    inputRef.current?.focus();
  };

  const toggleMission = (id) => {
    setMissions((prev) => prev.map(m => m.id === id ? { ...m, done: !m.done } : m));
  };

  return (
    <section className="grid lg:grid-cols-2 gap-5">
      {/* Tutor */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-violet-600 text-white grid place-items-center"><Bot className="h-4 w-4" /></div>
            <h2 className="text-lg font-semibold text-slate-900">AI-Tutor</h2>
          </div>
        </div>
        <div className="mt-4 flex-1 overflow-auto space-y-2 pr-1" style={{ maxHeight: 320 }}>
          {messages.map((m, idx) => (
            <ChatBubble key={idx} role={m.role} text={m.text} />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
            placeholder="Stell eine Frage zu deinem Stoff..."
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            onClick={send}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-600 text-white shadow"
            type="button"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Daily Missions */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500 text-white grid place-items-center"><Target className="h-4 w-4" /></div>
            <h2 className="text-lg font-semibold text-slate-900">Tägliche Missionen</h2>
          </div>
          <div className="text-xs text-slate-500">{completed}/{missions.length} erledigt</div>
        </div>
        <ul className="mt-4 space-y-3">
          {missions.map((m) => (
            <li key={m.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleMission(m.id)}
                  className={`h-6 w-6 grid place-items-center rounded-full ${m.done ? 'text-emerald-600' : 'text-slate-400'}`}
                  aria-label={m.done ? 'erledigt' : 'offen'}
                >
                  {m.done ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                </button>
                <span className={`text-sm ${m.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>{m.title}</span>
              </div>
              {m.done && <span className="text-xs font-medium text-emerald-600">+10 XP</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
