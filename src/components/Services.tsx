import Reveal from './Reveal'

const services = [
  {
    n: '01',
    title: 'Marketing Planning',
    text: 'Full-cycle B2C marketing plans across PR, social media, events and digital channels.',
  },
  {
    n: '02',
    title: 'Digital Strategy',
    text: 'Digital branding and cross-channel campaigns built to grow audiences and engagement.',
  },
  {
    n: '03',
    title: 'CRM & Branding',
    text: 'Customer database analysis and segmentation to support targeted, data-informed marketing.',
  },
  {
    n: '04',
    title: 'ESG Communication',
    text: 'Responsible-branding communication that aligns sustainability commitments with stakeholder expectations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <span className="text-[13px] font-medium uppercase tracking-widest2 text-rose-600">Expertise</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
              What I help
              <br />
              clients with
            </h2>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            {services.map((service, i) => (
              <Reveal key={service.n} delay={i * 90}>
                <div className="group flex flex-col gap-2 border-t border-line py-7 sm:flex-row sm:items-baseline sm:gap-8 sm:py-8">
                  <span className="font-display text-lg text-ink/65">{service.n}</span>
                  <h3 className="font-display text-2xl text-ink sm:w-64 sm:shrink-0">{service.title}</h3>
                  <p className="max-w-md leading-relaxed text-ink/65">{service.text}</p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-line" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
