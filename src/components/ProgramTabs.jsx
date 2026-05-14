import { useState } from "react";
import { X } from "lucide-react";
import { programmeDays } from "../data/siteData";

export default function ProgramTabs() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {programmeDays.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedImage(item)}
            className={`group glass-card overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
              index === 6 ? "lg:col-start-2" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.label}
              className="h-full w-full rounded-[1.25rem] border border-slate-200 bg-white object-cover transition duration-300 group-hover:scale-[1.02]"
            />

            <h3 className="mt-4 text-center text-lg font-bold text-[var(--navy)]">
              {item.label}
            </h3>
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
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.label}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[96vw] rounded-xl bg-white object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}