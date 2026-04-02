import SectionHeader from "../components/SectionHeader";
import { sponsorGroups } from "../data/siteData";

export default function SponsorsPage() {
  return (
    <div>
      <section className="bg-[#c9d2db] py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Partners"
            title="Our Sponsors"
            align="center"
          />
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="space-y-14">
          {sponsorGroups.map((group) => (
            <section key={group.tier} className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-black uppercase tracking-wide text-sky-600 sm:text-3xl">
                  {group.tier}
                </h2>
                <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-sky-600" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex h-48 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="max-h-32 w-auto max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}