import SectionHeader from "../components/SectionHeader";
import SpeakerCard from "../components/SpeakerCard";
import { speakers } from "../data/siteData";

export default function SpeakersPage() {
  return (
    <div>
      <section className="bg-[#c9d2db] py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Speakers"
            title="Meet our distinguished speakers"
            align="center"
          />
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name + speaker.image} speaker={speaker} />
          ))}
        </div>
      </section>
    </div>
  );
}