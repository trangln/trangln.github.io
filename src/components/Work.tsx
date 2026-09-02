import Reveal from './Reveal'
import ProjectGallery from './ProjectGallery'
import { projects, type Project } from '../data/content'

function ProjectBlock({ project, reversed }: { project: Project; reversed: boolean }) {
  return (
    <article className="border-t border-line py-16 first:pt-0 sm:py-20">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-8">
          <div className={`sm:col-span-7 ${reversed ? 'sm:order-2 sm:col-start-6' : ''}`}>
            <span className="font-display text-sm text-rose-600">{project.index}</span>
            <h3 className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">
              {project.client}
              <span className="block text-ink/65">{project.title}</span>
            </h3>
          </div>
          <div className={`sm:col-span-4 ${reversed ? 'sm:order-1 sm:col-start-1' : 'sm:col-start-9'}`}>
            {project.role && (
              <>
                <p className="text-[13px] font-medium uppercase tracking-widest2 text-ink/65">Role</p>
                <p className="mt-1.5 text-ink/80">{project.role}</p>
              </>
            )}
            <p className={`text-[13px] font-medium uppercase tracking-widest2 text-ink/65 ${project.role ? 'mt-5' : ''}`}>
              Overview
            </p>
            <p className="mt-1.5 leading-relaxed text-ink/70">{project.overview}</p>
          </div>
        </div>
      </Reveal>

      {project.images.length > 0 && (
        <Reveal delay={120} className="mt-10 sm:mt-12">
          <ProjectGallery images={project.images} featuredIndex={project.featuredIndex} />
        </Reveal>
      )}
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Reveal>
          <span className="text-[13px] font-medium uppercase tracking-widest2 text-rose-600">Sample Projects</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            Selected work
          </h2>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          {projects.map((project, i) => (
            <ProjectBlock key={project.client} project={project} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
