///
export default function SpeakerCard({ speaker }) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border-4 border-[#dff0df] bg-[#002c84] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl shadow-md">
        <img
          src={speaker.flag}
          alt={speaker.nationality}
          title={speaker.nationality}
          className="w-6 h-4 object-cover rounded-sm"
        />
      </div>

      <div className="aspect-[4/4.2] overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-4 pb-5 pt-4 text-center">
        <h3 className="text-sm font-extrabold uppercase leading-snug text-white sm:text-base">
          {speaker.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-[#d7e6ff] sm:text-sm">
          {speaker.nationality}
        </p>
      </div>
    </article>
  );
}