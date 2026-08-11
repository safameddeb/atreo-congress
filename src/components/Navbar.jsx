import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { congress } from '../data/siteData';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Conférenciers', to: '/speakers' },
  { label: 'Programme', to: '/program' },
  { label: 'Sponsors', to: '/sponsors' },
  { label: 'Inscription', to: '/register' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-4 py-3">
        {/* Logo et contenu */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 items-center gap-4"
        >
          <img
            src={congress.logos}
            alt="Logos ATREO et EOS"
            className="h-14 w-auto shrink-0 object-contain transition duration-300 group-hover:scale-[1.03] md:h-16"
          />

          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-semibold text-slate-700 md:text-base">
              Les Assises de l’Orthodontie 2026
            </p>

            <p className="mt-1 text-xs font-medium tracking-wide text-slate-500 md:text-sm">
              23-24 octobre 2026
            </p>
          </div>
        </Link>

        {/* Navigation ordinateur */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1.5 shadow-inner lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${isActive
                  ? 'bg-[var(--navy)] text-white shadow-lg shadow-blue-100'
                  : 'text-slate-700 hover:bg-white hover:shadow-sm'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition duration-300 hover:bg-slate-100 hover:shadow-md lg:hidden"
          aria-label="Ouvrir ou fermer le menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">
            {open ? '×' : '☰'}
          </span>
        </button>
      </div>

      {/* Navigation mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${open
            ? 'max-h-[500px] border-t border-slate-200 opacity-100'
            : 'max-h-0 border-transparent opacity-0'
          }`}
      >
        <nav className="section-shell flex flex-col gap-2 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${isActive
                  ? 'bg-[var(--navy)] text-white shadow-md'
                  : 'border border-slate-200 bg-slate-100 text-slate-700 hover:bg-white hover:shadow-sm'
                }`
              }
            >
              <span>{link.label}</span>
              <span aria-hidden="true">→</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}