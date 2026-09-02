import type { ProjectImage } from '../data/content'

function Tile({ image, priority = false }: { image: ProjectImage; priority?: boolean }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      className="mb-4 w-full break-inside-avoid border border-line/70 object-cover align-bottom last:mb-0"
    />
  )
}

export default function ProjectGallery({
  images,
  featuredIndex = 0,
}: {
  images: ProjectImage[]
  featuredIndex?: number
}) {
  const featured = images[featuredIndex]
  const rest = images.filter((_, i) => i !== featuredIndex)

  if (images.length === 1) {
    return (
      <div className="mx-auto max-w-2xl">
        <Tile image={featured} priority />
      </div>
    )
  }

  // A richer set of secondary images, or a wide featured shot, reads better
  // stacked full-width than squeezed into a narrow side column.
  if (rest.length >= 4 || featured.orientation === 'landscape') {
    return (
      <div>
        <Tile image={featured} priority />
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {rest.map((img) => (
            <Tile key={img.src} image={img} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      <div className="md:col-span-3">
        <Tile image={featured} priority />
      </div>
      <div className={rest.length > 1 ? 'columns-2 gap-4 md:col-span-2' : 'md:col-span-2'}>
        {rest.map((img) => (
          <Tile key={img.src} image={img} />
        ))}
      </div>
    </div>
  )
}
