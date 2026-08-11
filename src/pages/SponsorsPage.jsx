import { sponsorGroups } from '../data/siteData';

export default function SponsorsPage() {
  const sponsors = sponsorGroups.flatMap((group) => group.logos);

  return (
    <div className="overflow-hidden bg-white">
      {/* En-tête moderne */}
    <section className="relative overflow-hidden bg-white">
  {/* Décorations */}
  <div className="sponsors-decoration-one pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#07346b]/5 blur-3xl" />

  <div className="sponsors-decoration-two pointer-events-none absolute right-[12%] top-10 h-24 w-24 rounded-full border border-[#07346b]/10" />

  <div className="sponsors-decoration-three pointer-events-none absolute right-[16%] top-20 h-10 w-10 rounded-full bg-[#07346b]/5" />

  <div className="section-shell relative py-20 text-center sm:py-24">
    <div className="sponsors-header mx-auto flex max-w-3xl flex-col items-center">
      <div className="sponsors-eyebrow mb-6 flex items-center gap-4">
        <span className="sponsors-line h-px w-10 bg-[#07346b]/30" />

        <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#07346b]/65">
          Partenaires
        </p>

        <span className="sponsors-line h-px w-10 bg-[#07346b]/30" />
      </div>

      <h1 className="sponsors-title text-4xl font-black tracking-tight text-[#07346b] sm:text-5xl lg:text-6xl">
        Our Sponsors
      </h1>

      <div className="sponsors-indicator mt-7 flex items-center gap-2">
        <span className="h-1 w-8 rounded-full bg-[#07346b]/25" />

        <span className="h-1 w-16 rounded-full bg-[#07346b]" />

        <span className="h-1 w-8 rounded-full bg-[#07346b]/25" />
      </div>
    </div>
  </div>

  <style>{`
    @keyframes sponsorsRevealFromTop {
      from {
        opacity: 0;
        transform: translateY(-55px);
        filter: blur(4px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
    }

    @keyframes sponsorsElementReveal {
      from {
        opacity: 0;
        transform: translateY(-25px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes sponsorsLineGrow {
      from {
        opacity: 0;
        transform: scaleX(0);
      }

      to {
        opacity: 1;
        transform: scaleX(1);
      }
    }

    @keyframes sponsorsDecorationFloat {
      0%,
      100% {
        transform: translateY(0) rotate(0);
      }

      50% {
        transform: translateY(-15px) rotate(6deg);
      }
    }

    @keyframes sponsorsDecorationPulse {
      0%,
      100% {
        opacity: 0.4;
        transform: scale(1);
      }

      50% {
        opacity: 0.8;
        transform: scale(1.12);
      }
    }

    .sponsors-header {
      animation: sponsorsRevealFromTop 0.9s ease-out both;
    }

    .sponsors-eyebrow {
      animation: sponsorsElementReveal 0.8s ease-out 0.2s both;
    }

    .sponsors-title {
      animation: sponsorsElementReveal 0.9s ease-out 0.35s both;
    }

    .sponsors-indicator {
      animation: sponsorsLineGrow 0.8s ease-out 0.55s both;
      transform-origin: center;
    }

    .sponsors-line {
      animation: sponsorsLineGrow 0.8s ease-out 0.3s both;
      transform-origin: center;
    }

    .sponsors-decoration-one {
      animation: sponsorsDecorationPulse 7s ease-in-out infinite;
    }

    .sponsors-decoration-two {
      animation: sponsorsDecorationFloat 6s ease-in-out infinite;
    }

    .sponsors-decoration-three {
      animation: sponsorsDecorationFloat 5s ease-in-out 0.8s infinite reverse;
    }

    @media (prefers-reduced-motion: reduce) {
      .sponsors-header,
      .sponsors-eyebrow,
      .sponsors-title,
      .sponsors-indicator,
      .sponsors-line,
      .sponsors-decoration-one,
      .sponsors-decoration-two,
      .sponsors-decoration-three {
        animation: none;
      }
    }
  `}</style>

  
</section>

      {/* Présentation des sponsors */}
      <section className="section-shell py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sponsors.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="group relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#07346b]/40 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#07346b] transition-transform duration-300 group-hover:scale-x-100" />

              <img
                src={logo.image}
                alt={logo.name}
                loading="lazy"
                className="relative z-10 max-h-32 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}