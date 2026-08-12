import { useEffect, useState } from "react";
import { Mic2, MousePointerClick, X } from "lucide-react";
import SpeakerCard from "../components/SpeakerCard";
import { speakers } from "../data/siteData";

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

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
      {/* ============================== */}
      {/* HEADER */}
      {/* ============================== */}

      <section className="relative overflow-hidden bg-white">
        <div className="speaker-decoration-one pointer-events-none absolute -left-10 top-16 h-32 w-32 rounded-full border border-[#07346b]/10 sm:h-40 sm:w-40" />

        <div className="speaker-decoration-two pointer-events-none absolute right-[5%] top-10 h-16 w-16 rounded-full border border-[#07346b]/10 sm:right-[12%] sm:h-24 sm:w-24" />

        <div className="speaker-decoration-three pointer-events-none absolute right-[10%] top-20 h-8 w-8 rounded-full bg-[#07346b]/5 sm:right-[16%] sm:h-10 sm:w-10" />

        <div className="mx-auto w-full max-w-[1500px] px-4 py-12 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="speaker-header mx-auto flex max-w-3xl flex-col items-center">
            <div className="speaker-eyebrow mb-4 flex items-center justify-center gap-2 sm:mb-6 sm:gap-4">
              <span className="speaker-line h-px w-6 bg-[#07346b]/30 sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#07346b]/65 sm:text-xs sm:tracking-[0.4em]">
                Nos conférenciers
              </p>

              <span className="speaker-line h-px w-6 bg-[#07346b]/30 sm:w-10" />
            </div>

            <h1 className="speaker-title max-w-full px-2 text-3xl font-black leading-tight tracking-tight text-[#07346b] sm:text-5xl lg:text-6xl">
              Découvrez nos conférenciers
            </h1>

            <div className="speaker-indicator mt-5 flex items-center gap-2 sm:mt-7">
              <span className="h-1 w-6 rounded-full bg-[#07346b]/25 sm:w-8" />
              <span className="h-1 w-12 rounded-full bg-[#07346b] sm:w-16" />
              <span className="h-1 w-6 rounded-full bg-[#07346b]/25 sm:w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SPEAKERS */}
      {/* ============================== */}

      <section className="mx-auto w-full max-w-[1500px] px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-7 flex justify-center sm:mb-10">
          <div className="details-message flex max-w-full items-center gap-2 rounded-full border border-[#d7bd78]/50 bg-white px-4 py-2.5 text-[#07346b] shadow-[0_8px_25px_rgba(7,52,107,0.12)] sm:gap-3 sm:px-6 sm:py-3">
            <MousePointerClick
              size={18}
              className="shrink-0 text-[#c6a451]"
            />

            <p className="text-center text-xs font-bold sm:text-base">
              Cliquez sur une photo pour voir les détails
            </p>
          </div>
        </div>

        {/* GRILLE RESPONSIVE */}

        <div
          className="
            grid
            w-full
            grid-cols-2
            items-start
            gap-3
            sm:gap-5
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
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
              className="
                min-w-0
                cursor-pointer
                rounded-[22px]
                outline-none
                transition
                duration-300
                active:scale-[0.98]
                sm:hover:-translate-y-1
                focus-visible:ring-4
                focus-visible:ring-[#07346b]/25
              "
            >
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
      </section>

      {/* ============================== */}
      {/* MODAL */}
      {/* ============================== */}

      {selectedSpeaker && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-start
            justify-center
            overflow-y-auto
            bg-[#03142c]/80
            p-2
            backdrop-blur-md
            sm:items-center
            sm:p-6
          "
          onClick={closeSpeaker}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="selected-speaker-name"
            onClick={(event) => event.stopPropagation()}
            className="
              speaker-modal
              relative
              my-2
              w-full
              max-w-3xl
              overflow-hidden
              rounded-[20px]
              border
              border-white/20
              bg-white
              shadow-[0_30px_100px_rgba(0,20,60,0.5)]
              sm:my-auto
              sm:rounded-[28px]
            "
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeSpeaker}
              aria-label="Fermer"
              className="
                absolute
                right-3
                top-3
                z-30
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/95
                text-[#07346b]
                shadow-lg
                backdrop-blur
                transition
                duration-300
                sm:right-4
                sm:top-4
                sm:h-11
                sm:w-11
                sm:hover:rotate-90
              "
            >
              <X size={22} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
              {/* PHOTO */}

              <div className="flex w-full items-center justify-center bg-white">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="
                    block
                    h-auto
                    max-h-[70vh]
                    w-full
                    max-w-full
                    object-contain
                  "
                />
              </div>

              {/* INFOS */}

              <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 md:p-10">
                <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#7790ad] sm:text-xs">
                  Conférencier
                </p>

                <h2
                  id="selected-speaker-name"
                  className="break-words pr-8 text-2xl font-black leading-tight text-[#07346b] sm:text-4xl"
                >
                  {selectedSpeaker.name}
                </h2>

                <div className="my-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#07346b] to-[#77a3c9] sm:my-6 sm:w-16" />

                {/* NATIONALITY */}

                {selectedSpeaker.nationality && (
                  <div className="mb-5 flex items-center gap-2">
                    {selectedSpeaker.flag && (
                      <img
                        src={selectedSpeaker.flag}
                        alt={`Drapeau ${selectedSpeaker.nationality}`}
                        className="h-4 w-6 rounded-sm object-cover"
                      />
                    )}

                    <span className="text-xs font-bold uppercase tracking-wider text-[#07346b]/70">
                      {selectedSpeaker.nationality}
                    </span>
                  </div>
                )}

                {/* CONFERENCE */}

                <div className="mb-5 flex items-start gap-3 sm:mb-6">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eaf1f8] text-[#07346b] sm:h-10 sm:w-10">
                    <Mic2 size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-[#7790ad] sm:text-xs">
                      Titre de la conférence
                    </p>

                    <h3 className="break-words text-base font-extrabold leading-snug text-[#102d52] sm:text-xl">
                      {selectedSpeaker.conferenceTitle ||
                        "Titre de la conférence à venir"}
                    </h3>
                  </div>
                </div>

                {/* SUMMARY */}

                <div className="rounded-2xl border border-[#dce6f1] bg-[#f6f9fc] p-4 sm:p-5">
                  <p className="mb-2 text-[10px] font-extrabold uppercase tracking-widest text-[#7790ad] sm:text-xs">
                    Résumé
                  </p>

                  <p className="max-h-[220px] overflow-y-auto break-words pr-1 text-sm leading-6 text-slate-600 sm:max-h-48 sm:text-base sm:leading-7">
                    {selectedSpeaker.summary ||
                      "Le résumé de cette conférence sera disponible prochainement."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================== */}
      {/* ANIMATIONS */}
      {/* ============================== */}

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
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(6deg);
          }
        }

        @keyframes decorationPulse {
          0%, 100% {
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

        @keyframes detailsBlink {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.02);
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

        .details-message {
          animation: detailsBlink 1.4s ease-in-out infinite;
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
          .speaker-modal,
          .details-message {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}