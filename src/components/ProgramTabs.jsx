{/* //// voici mon code du component ProgramTabs.jsx 
import { useState } from 'react';
import { programmeDays } from '../data/siteData';

export default function ProgramTabs() {
  const [activeDay, setActiveDay] = useState(programmeDays[0].id);
  const current = programmeDays.find((day) => day.id === activeDay) ?? programmeDays[0];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-3">
        {programmeDays.map((day) => (
          <button
            key={day.id}
            type="button"
            onClick={() => setActiveDay(day.id)}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition sm:text-base ${
              activeDay === day.id
                ? 'bg-[var(--navy)] text-white shadow-lg shadow-blue-100'
                : 'bg-white text-slate-700 shadow hover:bg-slate-50'
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-start">
        <div className="glass-card p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold-dark)]">Schedule overview</p>
          <h3 className="mt-3 text-2xl font-bold text-[var(--navy)]">{current.label}</h3>
          <ul className="mt-5 space-y-4">
            {current.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--gold)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card overflow-hidden p-4 sm:p-6">
          <img
            src={current.image}
            alt={`Congress program for ${current.label}`}
            className="table-shadow mx-auto w-full max-w-3xl rounded-[1.5rem] border border-slate-200 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
*/}
import { programmeDays } from '../data/siteData';

export default function ProgramTabs() {
  return (
    <div className="space-y-12">
      {programmeDays.map((day) => (
        <div key={day.id} className="space-y-6">
          
          {/* Title */}
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-[var(--navy)]">
            {day.label}
          </h3>

          {/* Ligne dorée (option premium) */}
          <div className="w-24 h-[2px] bg-[var(--gold)] mx-auto"></div>

          {/* Image */}
          <div className="glass-card overflow-hidden p-4 sm:p-6">
            <img
              src={day.image}
              alt={`Congress program for ${day.label}`}
              className="table-shadow mx-auto w-full max-w-4xl rounded-[1.5rem] border border-slate-200 bg-white"
            />
          </div>

        </div>
      ))}
    </div>
  );
}




