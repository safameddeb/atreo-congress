import { useEffect, useState } from "react";
import { Mic2, MousePointerClick, X } from "lucide-react";
import SpeakerCard from "../components/SpeakerCard";
import { speakers } from "../data/siteData";

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Fermer la fenêtre avec la touche Échap
  // et bloquer le défilement lorsqu’elle est ouverte
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setSelectedSpeaker(null);
      }
    }

    if (selectedSpeaker) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedSpeaker]);

  function openSpeaker(speaker) {
    setSelectedSpeaker(speaker);
  }

  function closeSpeaker() {
    setSelectedSpeaker(null);
  }

  return (
    <>
      {/* En-tête de la page */}
      <section className="relative overflow-hidden bg-white">
        {/* Décorations */}
        <div className="speaker-decoration-one pointer-events-none absolute -left-10 top-16 h-40 w-40 rounded-full border border-[#07346b]/10" />

        <div className="speaker-decoration-two pointer-events-none absolute right-[12%] top-10 h-24 w-24 rounded-full border border-[#07346b]/10" />

        <div className="speaker-decoration-three pointer-events-none absolute right-[16%] top-20 h-10 w-10 rounded-full bg-[#07346b]/5" />

        <div className="section-shell relative py-20 text-center sm:py-24">
          <div className="speaker-header mx-auto flex max-w-3xl flex-col items-center">
            {/* Petit titre */}
            <div className="speaker-eyebrow mb-6 flex items-center gap-4">
              <span className="speaker-line h-px w-10 bg-[#07346b]/30" />

              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#07346b]/65">
                Nos conférenciers
              </p>

              <span className="speaker-line h-px w-10 bg-[#07346b]/30" />
            </div>

            {/* Titre principal */}
            <h1 className="speaker-title text-4xl font-black tracking-tight text-[#07346b] sm:text-5xl lg:text-6xl">
              Découvrez nos conférenciers
            </h1>

            {/* Lignes décoratives */}
            <div className="speaker-indicator mt-7 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#07346b]/25" />
              <span className="h-1 w-16 rounded-full bg-[#07346b]" />
              <span className="h-1 w-8 rounded-full bg-[#07346b]/25" />
            </div>
          </div>
        </div>
      </section>

      {/* Liste des conférenciers */}
      {/* Liste des conférenciers */}
<section className="section-shell py-16 sm:py-20">
{/* Message explicatif animé */}
<div className="mb-10 flex justify-center">
  <div className="details-message flex items-center gap-3 rounded-full border border-[#d7bd78]/50 bg-white px-6 py-3 text-[#07346b] shadow-[0_8px_25px_rgba(7,52,107,0.12)]">
    <MousePointerClick
      size={20}
      className="details-icon shrink-0 text-[#c6a451]"
    />

    <p className="text-center text-sm font-bold sm:text-base">
      Cliquez sur une photo pour voir les détails
    </p>
  </div>
</div>

  {/* Cartes */}
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    {speakers.map((speaker) => (
      <div
        key={speaker.name + speaker.image}
        role="button"
        tabIndex={0}
        aria-label={`Voir les détails de ${speaker.name}`}
        onClick={() => openSpeaker(speaker)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openSpeaker(speaker);
          }
        }}
        className="h-full cursor-pointer rounded-[24px] outline-none focus-visible:ring-4 focus-visible:ring-[#07346b]/25"
      >
        <SpeakerCard speaker={speaker} />
      </div>
    ))}
  </div>
</section>

      {/* Fenêtre d’informations */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#03142c]/80 p-4 backdrop-blur-md sm:p-6"
          onClick={closeSpeaker}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="selected-speaker-name"
            onClick={(event) => event.stopPropagation()}
            className="speaker-modal relative my-auto w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-[0_30px_100px_rgba(0,20,60,0.5)]"
          >
            {/* Bouton de fermeture */}
            <button
              type="button"
              onClick={closeSpeaker}
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#07346b] shadow-lg backdrop-blur transition duration-300 hover:rotate-90 hover:bg-white"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-[270px_1fr]">
              {/* Photo du conférencier */}
              <div className="relative min-h-[300px] overflow-hidden bg-[#e9eef5] md:min-h-[470px]">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#061d40]/95 via-[#061d40]/35 to-transparent" />

                {/* Nationalité sur la photo */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#07346b] shadow-lg backdrop-blur">
                    {selectedSpeaker.flag && (
                      <img
                        src={selectedSpeaker.flag}
                        alt={`Drapeau ${selectedSpeaker.nationality}`}
                        className="h-4 w-6 rounded-sm object-cover"
                      />
                    )}

                    <span>{selectedSpeaker.nationality}</span>
                  </div>
                </div>
              </div>

              {/* Informations */}
              <div className="flex flex-col justify-center p-7 sm:p-9 md:p-10">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.3em] text-[#7790ad]">
                  Conférencier
                </p>

                <h2
                  id="selected-speaker-name"
                  className="pr-10 text-3xl font-black leading-tight text-[#07346b] sm:text-4xl"
                >
                  {selectedSpeaker.name}
                </h2>

                <div className="my-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#07346b] to-[#77a3c9]" />

                {/* Titre de la conférence */}
                <div className="mb-6 flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf1f8] text-[#07346b]">
                    <Mic2 size={20} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-[#7790ad]">
                      Titre de la conférence
                    </p>

                    <h3 className="text-lg font-extrabold leading-snug text-[#102d52] sm:text-xl">
                      {selectedSpeaker.conferenceTitle ||
                        "Titre de la conférence à venir"}
                    </h3>
                  </div>
                </div>

                {/* Résumé */}
                <div className="rounded-2xl border border-[#dce6f1] bg-[#f6f9fc] p-5">
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-[#7790ad]">
                    Résumé
                  </p>

                  <p className="max-h-48 overflow-y-auto pr-2 text-sm leading-7 text-slate-600 sm:text-base">
                    {selectedSpeaker.summary ||
                      "Le résumé de cette conférence sera disponible prochainement."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes speakerHeaderReveal {
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

        @keyframes speakerTitleReveal {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes speakerLineGrow {
          from {
            opacity: 0;
            transform: scaleX(0);
          }

          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes decorationFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(6deg);
          }
        }

        @keyframes decorationPulse {
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

        @keyframes speakerModalReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .speaker-header {
          animation: speakerHeaderReveal 0.9s ease-out both;
        }

        .speaker-eyebrow {
          animation: speakerTitleReveal 0.8s ease-out 0.2s both;
        }

        .speaker-title {
          animation: speakerTitleReveal 0.9s ease-out 0.35s both;
        }

        .speaker-indicator {
          animation: speakerLineGrow 0.8s ease-out 0.55s both;
          transform-origin: center;
        }

        .speaker-line {
          animation: speakerLineGrow 0.8s ease-out 0.3s both;
          transform-origin: center;
        }

        .speaker-decoration-one {
          animation: decorationPulse 7s ease-in-out infinite;
        }

        .speaker-decoration-two {
          animation: decorationFloat 6s ease-in-out infinite;
        }

        .speaker-decoration-three {
          animation: decorationFloat 5s ease-in-out 0.8s infinite reverse;
        }

        .speaker-modal {
          animation: speakerModalReveal 0.35s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .speaker-header,
          .speaker-eyebrow,
          .speaker-title,
          .speaker-indicator,
          .speaker-line,
          .speaker-decoration-one,
          .speaker-decoration-two,
          .speaker-decoration-three,
          .speaker-modal {
            animation: none;
          }
        }

        @keyframes detailsBlink {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.45;
    transform: scale(1.03);
  }
}

.details-message {
  animation: detailsBlink 1.4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .details-message {
    animation: none;
  }
}
      `}</style>
    </>
  );
}