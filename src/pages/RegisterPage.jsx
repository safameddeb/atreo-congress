import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* En-tête moderne */}
<section className="relative overflow-hidden border-b border-[#07346b]/10 bg-white">
  {/* Décorations */}
  <div className="registration-decoration-one pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#07346b]/5 blur-3xl" />

  <div className="registration-decoration-two pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#07346b]/5 blur-3xl" />

  <div className="registration-decoration-three pointer-events-none absolute right-[12%] top-10 h-24 w-24 rounded-full border border-[#07346b]/10" />

  <div className="registration-decoration-four pointer-events-none absolute right-[16%] top-20 h-10 w-10 rounded-full bg-[#07346b]/5" />

  <div className="section-shell relative py-20 text-center sm:py-24">
    <div className="registration-header mx-auto flex max-w-3xl flex-col items-center">
      <div className="registration-eyebrow mb-6 flex items-center gap-4">
        <span className="registration-line h-px w-10 bg-[#07346b]/30" />

        <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#07346b]/65">
          Inscription
        </p>

        <span className="registration-line h-px w-10 bg-[#07346b]/30" />
      </div>

      <h1 className="registration-title text-4xl font-black tracking-tight text-[#07346b] sm:text-5xl lg:text-6xl">
        Inscrivez-vous maintenant
      </h1>

      <div className="registration-indicator mt-7 flex items-center gap-2">
        <span className="h-1 w-8 rounded-full bg-[#07346b]/25" />

        <span className="h-1 w-16 rounded-full bg-[#07346b]" />

        <span className="h-1 w-8 rounded-full bg-[#07346b]/25" />
      </div>
    </div>
  </div>

  <style>{`
    @keyframes registrationRevealFromTop {
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

    @keyframes registrationElementReveal {
      from {
        opacity: 0;
        transform: translateY(-25px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes registrationLineGrow {
      from {
        opacity: 0;
        transform: scaleX(0);
      }

      to {
        opacity: 1;
        transform: scaleX(1);
      }
    }

    @keyframes registrationDecorationFloat {
      0%,
      100% {
        transform: translateY(0) rotate(0);
      }

      50% {
        transform: translateY(-15px) rotate(6deg);
      }
    }

    @keyframes registrationDecorationPulse {
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

    .registration-header {
      animation: registrationRevealFromTop 0.9s ease-out both;
    }

    .registration-eyebrow {
      animation: registrationElementReveal 0.8s ease-out 0.2s both;
    }

    .registration-title {
      animation: registrationElementReveal 0.9s ease-out 0.35s both;
    }

    .registration-indicator {
      animation: registrationLineGrow 0.8s ease-out 0.55s both;
      transform-origin: center;
    }

    .registration-line {
      animation: registrationLineGrow 0.8s ease-out 0.3s both;
      transform-origin: center;
    }

    .registration-decoration-one {
      animation: registrationDecorationPulse 7s ease-in-out infinite;
    }

    .registration-decoration-two {
      animation: registrationDecorationPulse 8s ease-in-out 1s infinite;
    }

    .registration-decoration-three {
      animation: registrationDecorationFloat 6s ease-in-out infinite;
    }

    .registration-decoration-four {
      animation: registrationDecorationFloat 5s ease-in-out 0.8s infinite reverse;
    }

    @media (prefers-reduced-motion: reduce) {
      .registration-header,
      .registration-eyebrow,
      .registration-title,
      .registration-indicator,
      .registration-line,
      .registration-decoration-one,
      .registration-decoration-two,
      .registration-decoration-three,
      .registration-decoration-four {
        animation: none;
      }
    }
  `}</style>
</section>

      {/* Formulaire d’inscription */}
      <section className="section-shell py-16 sm:py-20">
        <RegisterForm />
      </section>
    </div>
  );
}