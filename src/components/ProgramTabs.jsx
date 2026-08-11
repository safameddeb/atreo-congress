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
      `}</style>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:gap-8">
        {programmeDays.slice(0, 2).map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedImage(item)}
            className="group glass-card overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              animation: `slideDown 0.7s ease-out ${index * 0.2}s both`,
            }}
          >
<h3 className="mb-5 text-center text-l font-bold tracking-wide text-[var(--navy)] md:text-3xl">
  {item.label}
</h3>

<img
  src={item.image}
  alt={item.label}
  className="w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.02]"
/>

           
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white/25"
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