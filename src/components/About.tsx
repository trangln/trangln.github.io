import Reveal from './Reveal'
import { education, expertise, profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[13px] font-medium uppercase tracking-widest2 text-rose-600">About</span>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
                Hi, I'm Trang!
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">{profile.intro}</p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">{profile.introSecondary}</p>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-12 flex flex-wrap gap-3">
                {expertise.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-baseline gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink/80"
                  >
                    <span className="font-medium text-ink">{item.label}</span>
                    <span className="text-xs text-ink/65">since {item.since}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={220}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[13px] font-medium uppercase tracking-widest2 text-ink/65">Education</span>
                <a
                  href={profile.cvUrl}
                  download
                  className="whitespace-nowrap text-[13px] font-medium text-rose-600 underline-offset-4 transition-colors hover:text-rose-700 hover:underline"
                >
                  Download CV
                </a>
              </div>
              <div className="mt-6 flex flex-col gap-8">
                {education.map((item) => (
                  <div key={item.school} className="border-t border-line pt-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.logo}
                        alt={`${item.school} logo`}
                        className="h-14 w-14 shrink-0 object-contain object-left"
                        loading="lazy"
                        width={56}
                        height={56}
                      />
                      <p className="font-display text-2xl text-ink">{item.school}</p>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-3">
                      <p className="text-[15px] font-medium text-rose-600">{item.degree}</p>
                      <p className="shrink-0 text-sm text-ink/65">{item.years}</p>
                    </div>
                    <p className="mt-1 text-[13px] uppercase tracking-wide text-ink/65">{item.country}</p>
                    {item.major && <p className="mt-1 text-sm text-ink/65">{item.major}</p>}
                    {item.note && <p className="mt-2 text-sm italic leading-relaxed text-ink/60">{item.note}</p>}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
