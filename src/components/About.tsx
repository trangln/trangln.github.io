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
                Hi, I'm {profile.name.split(' ')[0]} {profile.name.split(' ')[1]}.
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

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={220}>
              <span className="text-[13px] font-medium uppercase tracking-widest2 text-ink/65">Education</span>
              <div className="mt-6 flex flex-col gap-8">
                {education.map((item) => (
                  <div key={item.school} className="border-t border-line pt-6">
                    <img
                      src={item.logo}
                      alt={`${item.school} logo`}
                      className="h-9 w-auto object-contain object-left"
                      loading="lazy"
                      width={144}
                      height={36}
                    />
                    <p className="mt-4 text-[13px] font-medium uppercase tracking-wide text-ink/65">
                      {item.school} · {item.country}
                    </p>
                    <p className="mt-2 font-display text-lg text-ink">{item.degree}</p>
                    <p className="mt-1 text-sm text-ink/65">{item.major}</p>
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
