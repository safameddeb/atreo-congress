import { Link } from 'react-router-dom';
import { congress } from '../data/siteData';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-20 bg-[var(--navy)] text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">

        <div className="space-y-5">

<a
  href="https://www.facebook.com/profile.php?id=61583725220400"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={congress.logos}
    alt="ATREO and EOS logos"
    className="h-25 w-auto rounded-2xl bg-white/5 p-2 hover:scale-105 transition"
  />
</a>
          <h3 className="text-2xl font-semibold italic text-white/90">
            {congress.theme}
          </h3>
          <h3 className="text-2xl font-semibold italic text-white/90">
            {congress.title}</h3>
          <div>

            {/* 🔥 Icônes cliquables */}
            <div className="mt-3 flex items-center gap-4 text-white/75">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61583725220400"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/75 hover:text-[var(--gold)] transition hover:scale-110"
              >
                <FaFacebookF className="text-lg" />

                <span className="text-sm font-medium">ATREO</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/atreo_ig/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/75 hover:text-[var(--gold)] transition hover:scale-110"
              >
                <FaInstagram className="text-lg" />

                <span className="text-sm font-medium">atreo-ig</span>
              </a>

            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            For information
          </p>

          <a
            href={`mailto:${congress.contactEmail}`}
            className="block text-lg font-semibold text-white hover:text-[var(--gold)]"
          >
            {congress.contactEmail}
          </a>

          <Link to="/register" className="btn-primary">
            Register now
          </Link>
        </div>

      </div>
    </footer>
  );
}