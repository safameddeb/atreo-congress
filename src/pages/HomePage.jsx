import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import SpeakerCard from "../components/SpeakerCard";
import Speakerimg from "../components/imagespeaker";
import Sponsorimg from "../components/ImageSponsors";
import Dinnergala from "../components/DinnerGala";
import AccomodationRegistration from "../components/Accomodation";

import {
  congress,
  imageSpeakers,
  imageSponsor,
  dinnerGala,
  tarifCongress,
  keynoteSpeakers,
  programmeDays,
  sponsorTiers,
  sponsorsPreview,
  presidentWelcome,
  copresidentcongressWelcome,

} from "../data/siteData";

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (previousImage) =>
          (previousImage + 1) % congress.posters.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-shell");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    sections.forEach((section) => {
      section.classList.add("section-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
<section className="hero-section relative min-h-screen overflow-hidden bg-[#071327]">
        {/* Arrière-plan */}
        <div
          className="hero-background absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${congress.homeBackground})`,
          }}
        />

        {/* Calques sombres */}
<div className="absolute inset-0 bg-[#061226]/45" />

<div className="absolute inset-0 bg-gradient-to-r from-[#071327]/75 via-[#071327]/55 to-[#071327]/25" />

<div className="absolute inset-0 bg-gradient-to-t from-[#071327]/60 via-transparent to-[#071327]/15" />
        {/* Lumières décoratives */}
        <div className="hero-glow absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="hero-glow-two absolute right-10 top-10 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          {/* Partie gauche */}
          <div className="hero-content relative -top-20 text-center text-white lg:text-left">      {/* Petit badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />

              <span className="text-xs font-semibold text-white/90">
                Monastir · {congress.dates}
              </span>
            </div>

            {/* Titre */}
<h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-2xl sm:text-6xl lg:text-[4.5rem]">             <>
  <span className="block text-[#D4AF37]">Les Assises</span>
  <span className="block text-white">de l’Orthodontie</span>
  <span className="mt-2 block text-4xl font-light tracking-[0.18em] text-white/90 sm:text-5xl">
    2026
  </span>
</>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/75 lg:mx-0">
              Unissons nos forces pour une orthodontie d’excellence.
            </p>

            {/* Boutons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to="/registration"
                className="gold-button group inline-flex items-center justify-center gap-4 rounded-xl px-7 py-4 text-sm font-extrabold text-[#111827] shadow-xl"
              >
                <span>{congress.cta || "Inscrivez-vous maintenant"}</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/program"
                className="secondary-button group inline-flex items-center justify-center gap-4 rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md"
              >
                <span>Voir le programme</span>

                <span className="text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </div>

            {/* Informations */}
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <div className="info-box flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-xs font-bold text-[#E8C75A]">
                  01
                </div>

                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                    Dates
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    {congress.dates}
                  </p>
                </div>
              </div>

              <div className="info-box flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-xs font-bold text-[#E8C75A]">
                  02
                </div>

                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                    Lieu
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    {congress.hotel}
                  </p>
                </div>
              </div>
            </div>
          </div>

         {/* Partie droite : première affiche uniquement */}
<div className="poster-area relative mx-auto w-full max-w-[480px]">
  {/* Décoration derrière le cadre */}
  <div className="absolute -left-3 top-10 h-16 w-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm sm:-left-8" />

  <div className="absolute -right-2 bottom-12 h-14 w-20 rotate-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8F6B18] opacity-80 sm:-right-7" />

  {/* Cadre principal */}
  <div className="poster-frame relative rounded-[1.5rem] border border-white/20 bg-white/15 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl sm:rounded-[2rem] sm:p-3">
    <div className="relative overflow-hidden rounded-[1.1rem] sm:rounded-[1.5rem]">
      <img
        src={congress.posters[0]}
        alt="Affiche des Assises de l’Orthodontie 2026"
        className="block h-auto w-full object-contain"
      />

      <div className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-md sm:left-4 sm:top-4 sm:px-4 sm:text-[10px] sm:tracking-[0.18em]">
        Édition 2026
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[1.1rem] ring-1 ring-inset ring-white/15 sm:rounded-[1.5rem]" />
    </div>
  </div>
</div>
</div>
        {/* Animations dans le même fichier */}
        <style>{`
    /* Espacement uniforme entre toutes les sections de la page */
    .hero-section ~ .section-shell {
      margin-top: 7rem;
    }

    /* Apparition de toutes les sections de bas en haut au défilement */
    .section-shell.section-reveal {
      opacity: 0;
      transform: translateY(70px);
      transition:
        opacity 0.9s ease,
        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
      will-change: opacity, transform;
    }

    .section-shell.section-reveal.section-is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .hero-section ~ .section-shell {
        margin-top: 4rem;
      }
    }

    @keyframes heroBackgroundMovement {
      from {
        transform: scale(1.04);
      }

      to {
        transform: scale(1.12);
      }
    }

    @keyframes contentEntrance {
      from {
        opacity: 0;
        transform: translateY(35px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes posterEntrance {
      from {
        opacity: 0;
        transform: translateX(45px) rotate(2deg) scale(0.94);
      }

      to {
        opacity: 1;
        transform: translateX(0) rotate(0) scale(1);
      }
    }

    @keyframes glowMovement {
      0%,
      100% {
        opacity: 0.4;
        transform: translate(0, 0) scale(1);
      }

      50% {
        opacity: 0.75;
        transform: translate(30px, -20px) scale(1.15);
      }
    }

    .hero-background {
      animation: heroBackgroundMovement 20s ease-in-out infinite alternate;
    }

    .hero-content {
      animation: contentEntrance 1s ease-out both;
    }

    .poster-area {
      animation: posterEntrance 1.2s ease-out 0.15s both;
    }

    .hero-glow {
      animation: glowMovement 8s ease-in-out infinite;
    }

    .hero-glow-two {
      animation: glowMovement 10s ease-in-out 1s infinite reverse;
    }

    .gold-button {
      background: linear-gradient(
        135deg,
        #f3d675 0%,
        #d4af37 48%,
        #b88a1b 100%
      );
      box-shadow:
        0 12px 30px rgba(212, 175, 55, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.5);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        filter 0.3s ease;
    }

    .gold-button:hover {
      transform: translateY(-3px);
      filter: brightness(1.08);
      box-shadow:
        0 18px 40px rgba(212, 175, 55, 0.38),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }

    .secondary-button,
    .info-box {
      transition:
        transform 0.3s ease,
        background-color 0.3s ease,
        border-color 0.3s ease;
    }

    .secondary-button:hover,
    .info-box:hover {
      transform: translateY(-3px);
      border-color: rgba(212, 175, 55, 0.45);
      background-color: rgba(255, 255, 255, 0.13);
    }

    @media (max-width: 1023px) {
      .poster-area {
        margin-top: 1rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .section-shell.section-reveal {
        opacity: 1;
        transform: none;
        transition: none;
      }

      .hero-background,
      .hero-content,
      .poster-area,
      .hero-glow,
      .hero-glow-two {
        animation: none;
      }
    }
      @keyframes welcomeReveal {
  from {
    opacity: 0;
    transform: translateY(70px) scale(0.96);
    filter: blur(4px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.welcome-card {
  animation: welcomeReveal linear both;
  animation-timeline: view();
  animation-range: entry 5% cover 35%;
  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;
}

.welcome-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(7, 26, 51, 0.25);
}

.welcome-photo {
  transition: transform 1s ease;
}

.welcome-card:hover .welcome-photo {
  transform: scale(1.04);
}

@media (prefers-reduced-motion: reduce) {
  .welcome-card {
    animation: none;
  }

  .welcome-photo {
    transition: none;
  }
}
  @keyframes revealFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes revealFromRight {
  from {
    opacity: 0;
    transform: translateX(100px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes revealFromTop {
  from {
    opacity: 0;
    transform: translateY(-80px) scale(0.97);
    filter: blur(3px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.welcome-card {
  animation-name: revealFromTop;
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-timeline: view();
  animation-range: entry 5% cover 35%;
  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;
}

.welcome-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(7, 26, 51, 0.25);
}

@media (prefers-reduced-motion: reduce) {
  .welcome-card {
    animation: none;
  }
}
  `}</style>
      </section>































      <section className="section-shell">
<div className="welcome-card relative overflow-hidden rounded-[2.5rem] bg-[#071A33] shadow-2xl shadow-slate-900/15">          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Photo */}
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[650px]">
              <img
                src={presidentWelcome.image}
                alt={presidentWelcome.name}
className="welcome-photo absolute inset-0 h-full w-full object-cover object-top"              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <p className="text-2xl font-black text-white sm:text-3xl">
                  {presidentWelcome.name}
                </p>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Présidente de l’ATREO
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-amber-300" />

                <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                  {presidentWelcome.role}
                </p>
              </div>

              <h2 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                {presidentWelcome.title}
              </h2>

              <div className="mt-8 border-l border-amber-300/40 pl-5 sm:pl-7">
                <div className="space-y-5 text-[15px] leading-8 text-slate-300 sm:text-base">
                  {presidentWelcome.message.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0 ? "font-semibold italic text-white" : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-9 h-px w-24 bg-gradient-to-r from-amber-300 to-transparent" />
            </div>
          </div>
        </div>
      </section>


      <section className="section-shell">
<div className="welcome-card welcome-card-1 relative overflow-hidden rounded-[2.5rem] bg-[#071A33] shadow-2xl shadow-slate-900/15">          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Photo */}
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[650px]">
              <img
                src={copresidentcongressWelcome.image}
                alt={copresidentcongressWelcome.name}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <p className="text-2xl font-black text-white sm:text-3xl">
                  {copresidentcongressWelcome.name}
                </p>
<p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
  <span className="block">Secrétaire du GO3D</span>
  <span className="block">Secrétaire adjointe de la FFO</span>
  <span className="block">Vice-trésorière de l’AFFF</span>
  <span className="block">
    Responsable de la commission scientifique du CEPOG
  </span>
</p>
              </div>
            </div>

            {/* Message */}
            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-amber-300" />

                <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                  {copresidentcongressWelcome.role}
                </p>
              </div>

              <h2 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                {copresidentcongressWelcome.title}
              </h2>

              <div className="mt-8 border-l border-amber-300/40 pl-5 sm:pl-7">
                <div className="space-y-5 text-[15px] leading-8 text-slate-300 sm:text-base">
                  {copresidentcongressWelcome.message.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0 ? "font-semibold italic text-white" : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-9 h-px w-24 bg-gradient-to-r from-amber-300 to-transparent" />
            </div>
          </div>
        </div>
      </section>














      <section className="section-shell space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Nos conférenciers" title="Découvrez nos conférenciers" />

        </div>
        <div className="flex justify-center">
          {imageSpeakers.map((speaker) => (
            <Speakerimg key={speaker.name + speaker.role} speaker={speaker} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/speakers"
            className="rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-yellow-600"
          >
            See all
          </Link>
        </div>

      </section>



      <section className="section-shell space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Sponsors" title="Nos sponsors" />
        </div>
        <div className="flex justify-center">
          {imageSponsor.map((sponsor) => (
            <Sponsorimg key={sponsor.name + sponsor.role} sponsor={sponsor} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/sponsors" className="btn-primary mt-8">
            Liste complète de nos sponsors
          </Link>
        </div>

      </section>



      {/* 
      <section className="section-shell space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Speakers" title="Meet Our Speakers" />
          <Link
            to="/speakers"
            ///className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
            className="rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"          >
            See all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {keynoteSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name + speaker.role} speaker={speaker} />
          ))}
        </div>
      </section>
*/}










<section className="section-shell">
  <SectionHeader
    eyebrow="Programme"
    title="Programme scientifique"
  />

  <div className="mt-8 grid gap-6 sm:grid-cols-2">
    {programmeDays.map((day) => (
      <div key={day.id}>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={day.image}
            alt={`Programme scientifique — ${day.label}`}
            className="h-auto w-full"
          />
        </div>
      </div>
    ))}
  </div>

  <div className="mt-7 flex justify-center">
    <a
      href="/programme"
      className="inline-flex items-center rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
    >
      Voir le programme complet
    </a>
  </div>
</section>












      <section className="section-shell space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Hébergement" title="Inscription et hébergement" />
        </div>
        <div className="flex justify-center">
          {tarifCongress.map((accomodation) => (
            <AccomodationRegistration key={accomodation.name + accomodation.role} accomodation={accomodation} />
          ))}
        </div>
      </section>


    </>
  );
}












