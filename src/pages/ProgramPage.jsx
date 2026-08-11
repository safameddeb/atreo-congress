import ProgramTabs from '../components/ProgramTabs';
import SectionHeader from '../components/SectionHeader';

export default function ProgramPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        {/* Décorations */}
        <div className="program-decoration-one pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#07346b]/5 blur-3xl" />

        <div className="program-decoration-two pointer-events-none absolute right-[12%] top-10 h-24 w-24 rounded-full border border-[#07346b]/10" />

        <div className="program-decoration-three pointer-events-none absolute right-[16%] top-20 h-10 w-10 rounded-full bg-[#07346b]/5" />

        <div className="section-shell relative py-20 text-center sm:py-24">
          <div className="program-header mx-auto flex max-w-3xl flex-col items-center">
            <div className="program-eyebrow mb-6 flex items-center gap-4">
              <span className="program-line h-px w-10 bg-[#07346b]/30" />

              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#07346b]/65">
                Programme scientifique
              </p>

              <span className="program-line h-px w-10 bg-[#07346b]/30" />
            </div>

            <h1 className="program-title text-4xl font-black tracking-tight text-[#07346b] sm:text-5xl lg:text-6xl">
              Programme des Assises
            </h1>

            <div className="program-indicator mt-7 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#07346b]/25" />

              <span className="h-1 w-16 rounded-full bg-[#07346b]" />

              <span className="h-1 w-8 rounded-full bg-[#07346b]/25" />
            </div>
          </div>
        </div>
      </section>

      {/* Animations dans le même fichier */}
      <style>{`
        @keyframes programHeaderReveal {
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

        @keyframes programTitleReveal {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes programLineGrow {
          from {
            opacity: 0;
            transform: scaleX(0);
          }

          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes programDecorationFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(6deg);
          }
        }

        @keyframes programDecorationPulse {
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

        .program-header {
          animation: programHeaderReveal 0.9s ease-out both;
        }

        .program-eyebrow {
          animation: programTitleReveal 0.8s ease-out 0.2s both;
        }

        .program-title {
          animation: programTitleReveal 0.9s ease-out 0.35s both;
        }

        .program-indicator {
          animation: programLineGrow 0.8s ease-out 0.55s both;
          transform-origin: center;
        }

        .program-line {
          animation: programLineGrow 0.8s ease-out 0.3s both;
          transform-origin: center;
        }

        .program-decoration-one {
          animation: programDecorationPulse 7s ease-in-out infinite;
        }

        .program-decoration-two {
          animation: programDecorationFloat 6s ease-in-out infinite;
        }

        .program-decoration-three {
          animation: programDecorationFloat 5s ease-in-out 0.8s infinite reverse;
        }

        @media (prefers-reduced-motion: reduce) {
          .program-header,
          .program-eyebrow,
          .program-title,
          .program-indicator,
          .program-line,
          .program-decoration-one,
          .program-decoration-two,
          .program-decoration-three {
            animation: none;
          }
        }
      `}</style>


      {/* Programme */}
      <section className="section-shell py-16 sm:py-20">
        <ProgramTabs />
      </section>
    </>
  );
}