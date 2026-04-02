//// voici mon code du page program page.jsx
import ProgramTabs from "../components/ProgramTabs";
import SectionHeader from "../components/SectionHeader";

export default function ProgramPage() {
  return (
    <div>
      <section className="bg-[#c9d2db] py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Program"
            title="Congress program"
            align="center"
          />
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <ProgramTabs />
      </section>
    </div>
  );
}
