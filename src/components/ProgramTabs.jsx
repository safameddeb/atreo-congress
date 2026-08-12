import { useState } from "react";
import { X } from "lucide-react";
import { programmeDays } from "../data/siteData";

export default function ProgramTabs() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .program-card {
            animation: none !important;
          }
        }
      `}</style>

      {/* 
        Smartphone : un programme par ligne
        Tablette et ordinateur : deux programmes par ligne
      */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">
        {programmeDays.slice(0, 2).map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedImage(item)}
            className="program-card glass-card group w-full overflow-hidden rounded-2xl p-3 text-left transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-4"
            style={{
              animation: `slideDown 0.7s ease-out ${index * 0.2}s both`,
            }}
            aria-label={`Agrandir le ${item.label}`}
          >
            <h3 className="mb-5 text-center text-lg font-bold tracking-wide text-[var(--navy)] sm:text-xl md:text-2xl lg:text-3xl">
              {item.label}
            </h3>

            <div className="flex w-full items-center justify-center overflow-hidden rounded-xl bg-white">
              <img
                src={item.image}
                alt={item.label}
                className="h-auto w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Affichage agrandi de l’image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.label}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white/25"
            aria-label="Fermer"
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.label}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[92vh] max-w-[96vw] rounded-xl bg-white object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}