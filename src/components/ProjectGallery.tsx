import type { ProjectImage } from '../data/content'

// Uniform square tiles, packed as square as possible: roughly sqrt(n) columns,
// stretching the last row's tiles to fill any leftover slots so the montage
// always ends up a clean rectangle instead of a ragged grid. Used for 4+
// photos only - 3 or fewer stack vertically instead (see ProjectGallery).
function layout(n: number) {
  const cols = Math.min(5, Math.ceil(Math.sqrt(n)))
  const rows = Math.ceil(n / cols)
  const lastRowCount = n - cols * (rows - 1)
  const base = Math.floor(cols / lastRowCount)
  const extra = cols % lastRowCount
  return { cols, lastRowStart: n - lastRowCount, base, extra }
}

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  if (images.length <= 3) {
    return (
      <div className="flex gap-2">
        {images.map((image, i) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-0 flex-1 border border-line/70"
          />
        ))}
      </div>
    )
  }

  const { cols, lastRowStart, base, extra } = layout(images.length)

  return (
    <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {images.map((image, i) => {
        const posInLastRow = i - lastRowStart
        const span = i >= lastRowStart ? base + (posInLastRow < extra ? 1 : 0) : 1
        return (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="aspect-square w-full border border-line/70 object-cover"
            style={{ gridColumn: `span ${span}` }}
          />
        )
      })}
    </div>
  )
}
