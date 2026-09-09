import Reveal from './Reveal'
import CertLogo from './CertLogo'
import { certificates, experience, skills } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Reveal>
          <span className="text-[13px] font-medium uppercase tracking-widest2 text-rose-600">Career</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">Experience</h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-0">
          {experience.map((job, i) => {
            const isRightCol = i % 2 === 1
            const isFirstRow = i < 2
            return (
              <Reveal
                key={job.company}
                delay={(i % 2) * 120}
                className={`border-t border-line pt-8 ${isRightCol ? 'lg:border-l lg:pl-8' : ''} ${
                  isRightCol && isFirstRow ? 'lg:border-t-0 lg:pt-0' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="h-14 w-14 shrink-0 object-contain object-left"
                      loading="lazy"
                      width={56}
                      height={56}
                    />
                  )}
                  <h3 className="font-display text-2xl text-ink">{job.company}</h3>
                </div>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-[15px] font-medium text-rose-600">{job.role}</p>
                  <p className="text-sm text-ink/65">{job.period}</p>
                </div>
                <ul className="mt-6 flex flex-col gap-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-ink/65">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={160} className="mt-20 grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-3">
          <div>
            <span className="text-[13px] font-medium uppercase tracking-widest2 text-ink/65">Technical Skills</span>
            <ul className="mt-5 flex flex-col gap-3">
              {skills.technical.map((skill) => (
                <li key={skill.category}>
                  <p className="text-sm font-medium text-ink">{skill.category}</p>
                  <p className="mt-0.5 text-sm text-ink/65">{skill.items}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[13px] font-medium uppercase tracking-widest2 text-ink/65">Soft Skills</span>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.soft.map((item) => (
                <li key={item} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[13px] font-medium uppercase tracking-widest2 text-ink/65">Languages</span>
            <ul className="mt-5 flex flex-col gap-3">
              {skills.languages.map((lang) => (
                <li key={lang.name} className="flex items-baseline gap-2 text-sm">
                  <span className="font-medium text-ink">{lang.name}</span>
                  <span className="text-ink/65">· {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-16 border-t border-line pt-10">
          <span className="text-[13px] font-medium uppercase tracking-widest2 text-ink/65">Certifications</span>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-5">
            {certificates.map((cert) => (
              <div key={cert.name} className="flex items-center gap-4">
                <CertLogo issuer={cert.issuer} />
                <div>
                  <p className="text-sm font-medium text-ink">{cert.name}</p>
                  <p className="text-sm text-ink/65">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
