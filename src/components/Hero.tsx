import { profile } from '../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-7">
          <p
            className="animate-fade-up text-[13px] font-medium uppercase tracking-widest2 text-rose-600"
            style={{ animationDelay: '80ms' }}
          >
            Marketing Executive — {profile.location}
          </p>

          <h1
            className="animate-fade-up mt-6 font-display text-[13vw] leading-[0.95] tracking-tight text-ink sm:text-[9vw] lg:text-[5.4vw]"
            style={{ animationDelay: '180ms' }}
          >
            Trang
            <br />
            <span className="italic text-rose-500">Ngoc Le</span>
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-md text-lg leading-relaxed text-ink/70"
            style={{ animationDelay: '320ms' }}
          >
            {profile.heroLine}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-5"
            style={{ animationDelay: '440ms' }}
          >
            <a
              href="#work"
              className="rounded-full bg-ink px-7 py-3.5 text-[13px] font-medium uppercase tracking-widest text-paper transition-colors hover:bg-rose-600"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="text-[13px] font-medium uppercase tracking-widest text-ink/70 underline-offset-4 transition-colors hover:text-rose-500 hover:underline"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            className="animate-fade-up relative mx-auto max-w-sm lg:max-w-none"
            style={{ animationDelay: '260ms' }}
          >
            <div className="absolute -inset-4 -z-10 hidden border border-rose-200 sm:block" aria-hidden="true" />
            <img
              src="/images/me.webp"
              alt="Trang Ngoc Le smiling outdoors, wearing a graduation flower crown and holding a bouquet"
              className="aspect-[4/5] w-full object-cover"
              width={641}
              height={885}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div
        className="animate-fade-up absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink/65 sm:flex"
        style={{ animationDelay: '700ms' }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-ink/20" />
      </div>
    </section>
  )
}
