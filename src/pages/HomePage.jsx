import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import SpeakerCard from "../components/SpeakerCard";
import {
  congress,
  keynoteSpeakers,
  programmeDays,
  sponsorTiers,
  sponsorsPreview,
  presidentWelcome,
  presidentcongressWelcome,

} from "../data/siteData";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-4">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${congress.homeBackground})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="section-shell relative grid min-h-[78vh] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="max-w-2xl text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80 backdrop-blur-sm">
              {congress.theme}
            </span>
            <h1 className="mt-6 text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {congress.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
              Join a premium congress experience inspired by the presentation: a
              clean scientific look, a seaside destination mood, and a strong
              call-to-action for registration.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/register" className="btn-primary">
                {congress.cta}
              </Link>
              <Link to="/program" className="btn-secondary">
                View program
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                  Dates
                </p>
                <p className="mt-3 text-xl font-bold">{congress.dates}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                  Location
                </p>
                <p className="mt-3 text-xl font-bold">{congress.hotel}</p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white/25 bg-white/12 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur-sm sm:p-6">
            <img
              src={congress.poster}
              alt="ATREO congress poster"
              className="w-full rounded-[1.5rem] shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="section-shell">
        <div className="glass-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <img
                src={presidentWelcome.image}
                alt={presidentWelcome.name}
                className="h-64 w-64 rounded-[2rem] object-cover border-4 border-white shadow-2xl sm:h-72 sm:w-72 lg:h-[340px] lg:w-[300px]"
              />

              <div className="mt-5">
                <p className="text-2xl font-bold text-[var(--navy)] sm:text-3xl">
                  {presidentWelcome.name}
                </p>
                <p className="mt-1 text-base font-medium text-slate-500 sm:text-lg">
                  President of the ATREO
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <SectionHeader
                eyebrow={presidentWelcome.role}
                title={presidentWelcome.title}
              />

              <div className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
                <div className="space-y-5 text-[15px] leading-8 text-slate-700 sm:text-base">
                  {presidentWelcome.message.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



<section className="section-shell">
        <div className="glass-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <img
                src={presidentcongressWelcome.image}
                alt={presidentcongressWelcome.name}
                className="h-64 w-64 rounded-[2rem] object-cover border-4 border-white shadow-2xl sm:h-72 sm:w-72 lg:h-[340px] lg:w-[300px]"
              />

              <div className="mt-5">
                <p className="text-2xl font-bold text-[var(--navy)] sm:text-3xl">
                  {presidentcongressWelcome.name}
                </p>
                <p className="mt-1 text-base font-medium text-slate-500 sm:text-lg">
                  President of the Congress
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <SectionHeader
                eyebrow={presidentcongressWelcome.role}
                title={presidentcongressWelcome.title}
              />

              <div className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
                <div className="space-y-5 text-[15px] leading-8 text-slate-700 sm:text-base">
                  {presidentcongressWelcome.message.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      <section className="section-shell space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Speakers" title="Meet Our Speakers" />
          <Link
            to="/speakers"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
          >
            See all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {keynoteSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name + speaker.role} speaker={speaker} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="marble-bg glass-card p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Program"
                title="Two day scientific program"
              />
              <div className="mt-6 space-y-4">
                {programmeDays.map((day) => (
                  <div
                    key={day.id}
                    className="rounded-[1.5rem] border border-white/70 bg-white/75 p-4 shadow-sm"
                  >
                    <p className="font-bold text-[var(--navy)]">{day.label}</p>
                    <p className="mt-1 text-sm text-slate-600">
                      {day.highlights[0]}
                    </p>
                  </div>
                ))}
              </div>
              <Link to="/program" className="btn-primary mt-8">
                Full congress program
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {programmeDays.map((day) => (
                <div
                  key={day.id}
                  className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/60"
                >
                  <img
                    src={day.image}
                    alt={day.label}
                    className="h-full w-full rounded-[1.25rem] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-center">
            <SectionHeader eyebrow="Sponsors" title="Our Sponsors" />
            <div className="grid gap-4">
              {sponsorTiers.map((tier) => (
                <div key={tier.name} className="glass-card p-5 text-center">
                  <p className="text-lg font-bold text-[var(--navy)]">
                    {tier.name}
                  </p>
                </div>
              ))}
            </div>
            <Link to="/sponsors" className="btn-primary mt-8">
              Full list of sponsors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
