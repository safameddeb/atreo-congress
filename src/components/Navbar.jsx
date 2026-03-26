import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { congress } from '../data/siteData';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Speakers', to: '/speakers' },
  { label: 'Program', to: '/program' },
  { label: 'Sponsors', to: '/sponsors' },
  { label: 'Register', to: '/register' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={congress.logos}
            alt="ATREO and EOS logos"
            className="h-12 w-auto rounded-xl object-cover shadow-sm sm:h-18"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">ATREO Congress</p>
            <p className="text-sm font-medium text-[var(--navy)]">13–14 June 2026</p>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">☰</span>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[var(--navy)] text-white shadow-lg shadow-blue-100'
                    : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="section-shell flex flex-col gap-2 pb-4 lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isActive ? 'bg-[var(--navy)] text-white' : 'bg-slate-100 text-slate-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
