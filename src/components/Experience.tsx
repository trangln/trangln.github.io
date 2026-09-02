import Reveal from './Reveal'
import { certificates, experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Reveal>
          <span className="text-[13px] font-medium uppercase tracking-widest2 text-rose-600">Career</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">Experience</h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-0">
          {experience.map((job, i) => (
            <Reveal
              key={job.company}
              delay={i * 120}
              className={`border-t border-line pt-8 ${i === 1 ? 'lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0' : ''}`}
            >
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="h-8 w-auto object-contain object-left"
                loading="lazy"
                width={128}
                height={32}
              />
              <h3 className="mt-6 font-display text-2xl text-ink">{job.company}</h3>
              <p className="mt-1 text-[15px] font-medium text-rose-600">{job.role}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-ink/65">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-20 border-t border-line pt-10">
          <span className="text-[13px] font-medium uppercase tracking-widest2 text-ink/65">Certifications</span>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-5">
            {certificates.map((cert) => (
              <div key={cert.name} className="flex items-center gap-4">
                <img
                  src={cert.image}
                  alt={`${cert.name} badge`}
                  className="h-12 w-16 border border-line object-cover"
                  loading="lazy"
                  width={64}
                  height={48}
                />
                <div>
                  <p className="text-sm font-medium text-ink">{cert.name}</p>
                  <p className="text-sm text-ink/65">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
