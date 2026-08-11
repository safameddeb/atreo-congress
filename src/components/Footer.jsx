import { Link } from 'react-router-dom';
import { congress } from '../data/siteData';
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071426] text-white">
      {/* Décoration lumineuse */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#d6b96f]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#d6b96f]/10 blur-3xl" />

      {/* Ligne dorée supérieure */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d6b96f]/70 to-transparent" />

      <div className="section-shell relative grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Partie gauche */}
        <div className="space-y-7">
          <a
            href="https://www.facebook.com/profile.php?id=61583725220400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="group rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#d6b96f]/50">
              <img
                src={congress.logos}
                alt="Logos ATREO et EOS"
                className="h-24 w-auto object-contain transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </a>

          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d6b96f]">
              Association Tunisienne de Recherches et d&apos;Études en
              Orthodontie
            </p>

            <h2 className="font-serif text-3xl font-semibold leading-tight text-white md:text-4xl">
              {congress.title}
            </h2>

            <p className="max-w-xl text-lg italic leading-relaxed text-white/65">
              {congress.theme}
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61583725220400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ATREO sur Facebook"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white/75 transition duration-300 hover:border-[#d6b96f]/50 hover:bg-[#d6b96f]/10 hover:text-[#efd68f]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition group-hover:bg-[#d6b96f] group-hover:text-[#071426]">
                <FaFacebookF />
              </span>
              ATREO
            </a>

            <a
              href="https://www.instagram.com/atreo_ig/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ATREO sur Instagram"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white/75 transition duration-300 hover:border-[#d6b96f]/50 hover:bg-[#d6b96f]/10 hover:text-[#efd68f]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition group-hover:bg-[#d6b96f] group-hover:text-[#071426]">
                <FaInstagram />
              </span>
              @atreo_ig
            </a>
          </div>
        </div>

        {/* Carte contact */}
        <div className="relative">
          <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-[#d6b96f]/60 via-white/10 to-transparent opacity-70" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#0c1c32]/95 p-7 shadow-2xl backdrop-blur-xl md:p-9">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d6b96f]/10 blur-3xl" />

            <div className="relative space-y-7">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#d6b96f]">
                  Pour toute information
                </p>

                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Contactez notre équipe pour toute information concernant
                  l&apos;inscription, l&apos;hébergement et le congrès.
                </p>
              </div>

              <a
                href={`mailto:${congress.contactEmail}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#d6b96f]/40 hover:bg-white/[0.07]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#d6b96f]/15 text-[#efd68f]">
                  <FaEnvelope />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-white/45">
                    Email
                  </span>

                  <span className="block truncate text-sm font-medium text-white md:text-base">
                    {congress.contactEmail}
                  </span>
                </span>
              </a>

              <Link
                to="/register"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#c6a451] via-[#efd68f] to-[#c6a451] px-7 py-4 font-semibold text-[#071426] shadow-[0_12px_35px_rgba(214,185,111,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(214,185,111,0.35)]"
              >
                Inscrivez-vous maintenant
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="section-shell relative">
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-center text-xs text-white/40 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} ATREO. Tous droits réservés.
          </p>

          <p className="uppercase tracking-[0.2em]">
            Excellence • Innovation • Orthodontie
          </p>
        </div>
      </div>
    </footer>
  );
}