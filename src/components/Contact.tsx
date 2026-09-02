import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[13px] font-medium uppercase tracking-widest2 text-rose-600">Contact</span>
              <h2 className="mt-5 font-display text-5xl leading-[1.02] text-ink sm:text-6xl">
                Let's create something <span className="italic text-rose-500">meaningful.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 flex flex-col gap-4 text-lg">
                <a
                  href={`mailto:${profile.email}`}
                  className="w-fit border-b border-transparent text-ink/80 transition-colors hover:border-rose-500 hover:text-rose-500"
                >
                  {profile.email}
                </a>
                <a
                  href={profile.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit border-b border-transparent text-ink/80 transition-colors hover:border-rose-500 hover:text-rose-500"
                >
                  {profile.linkedin}
                </a>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="w-fit border-b border-transparent text-ink/80 transition-colors hover:border-rose-500 hover:text-rose-500"
                >
                  {profile.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={`mailto:${profile.email}`}
                className="mt-12 inline-block rounded-full bg-ink px-8 py-4 text-[13px] font-medium uppercase tracking-widest text-paper transition-colors hover:bg-rose-600"
              >
                Say hello
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={160}>
              <img
                src="/images/me_final.webp"
                alt="Trang Ngoc Le leaning against a rustic wooden door, smiling"
                className="aspect-[4/5] w-full max-w-xs object-cover lg:max-w-none"
                loading="lazy"
                width={825}
                height={758}
              />
            </Reveal>
          </div>
        </div>

        <div className="mt-24 flex flex-col-reverse items-start gap-4 border-t border-line pt-8 text-sm text-ink/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}.</p>
          <p>{profile.role} · {profile.location}</p>
        </div>
      </div>
    </section>
  )
}
