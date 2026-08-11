export default function SpeakerCard({ speaker }) {
  return (
    <article className="group relative flex h-[430px] w-full flex-col overflow-hidden rounded-[24px] border border-[#0d2344]/80 bg-[#0d2344] shadow-[0_18px_40px_rgba(13,35,68,0.22)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(13,35,68,0.32)]">
      {/* Photo du conférencier */}
      <div className="relative h-[270px] shrink-0 overflow-hidden bg-slate-200">
        <img
          src={speaker.image}
          alt={speaker.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dégradé élégant */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2344] via-[#0d2344]/5 to-transparent" />

        {/* Ligne dorée */}
        <div className="absolute bottom-0 left-1/2 h-[2px] w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d7bd78] to-transparent transition-all duration-500 group-hover:w-28" />
      </div>

      {/* Informations du conférencier */}
      <div className="relative flex flex-1 flex-col items-center px-5 pb-6 pt-4 text-center">
        {/* Nom : espace identique de deux lignes */}
        <div className="flex min-h-[58px] w-full items-center justify-center">
          <h3 className="line-clamp-2 font-serif text-lg font-semibold leading-snug tracking-wide text-white sm:text-xl">
            {speaker.name}
          </h3>
        </div>

        {/* Séparateur */}
        <div className="mx-auto my-2 h-px w-8 shrink-0 bg-[#d7bd78]/60" />

        {/* Drapeau et nationalité */}
        <div className="flex min-h-[45px] w-full flex-1 items-center justify-center gap-2">
          {speaker.flag && (
            <img
              src={speaker.flag}
              alt={`Drapeau ${speaker.nationality}`}
              loading="lazy"
              className="h-4 w-6 shrink-0 rounded-[2px] object-cover shadow-[0_2px_6px_rgba(0,0,0,0.3)] ring-1 ring-white/20"
            />
          )}

          <p className="line-clamp-2 text-xs font-medium uppercase leading-relaxed tracking-[0.18em] text-white/65 sm:text-sm">
            {speaker.nationality}
          </p>
        </div>
      </div>

      {/* Lueur décorative */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#d7bd78]/10 blur-2xl transition-all duration-500 group-hover:bg-[#d7bd78]/20" />
    </article>
  );
}