import { useState } from 'react'

export interface RatingPoint {
  time: number
  rating: number
  date: string
}

interface Props {
  data: RatingPoint[]
}

// SVG coordinate space — the viewBox scales to fit the container width
const WIDTH = 640
const HEIGHT = 260
const PADDING = { top: 24, right: 16, bottom: 28, left: 44 }

export default function ChessRatingChart({ data }: Props) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  if (data.length < 2) {
    return <p className="text-sm text-gray-400">Not enough rated rapid games to chart yet.</p>
  }

  const ratings = data.map((d) => d.rating)
  const minRating = Math.min(...ratings)
  const maxRating = Math.max(...ratings)
  const ratingRange = maxRating - minRating || 1

  const innerW = WIDTH - PADDING.left - PADDING.right
  const innerH = HEIGHT - PADDING.top - PADDING.bottom

  // map a data point to pixel coordinates
  const xFor = (i: number) => PADDING.left + (i / (data.length - 1)) * innerW
  const yFor = (rating: number) =>
    PADDING.top + innerH - ((rating - minRating) / ratingRange) * innerH

  const linePath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(d.rating)}`)
    .join(' ')

  // convert the mouse position to the nearest data point
  function handleMove(e: React.MouseEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = ((e.clientX - rect.left) / rect.width) * WIDTH
    const ratio = (mouseX - PADDING.left) / innerW
    const idx = Math.max(0, Math.min(data.length - 1, Math.round(ratio * (data.length - 1))))
    setHoverIndex(idx)
  }

  const active = hoverIndex !== null ? data[hoverIndex] : null
  const labelX =
    hoverIndex !== null
      ? Math.max(PADDING.left + 24, Math.min(WIDTH - PADDING.right - 24, xFor(hoverIndex)))
      : 0

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full select-none"
      onMouseMove={handleMove}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {/* y-axis reference labels */}
      <text x={PADDING.left - 8} y={yFor(maxRating) + 4} textAnchor="end" fontSize="11" fill="#9ca3af">
        {maxRating}
      </text>
      <text x={PADDING.left - 8} y={yFor(minRating) + 4} textAnchor="end" fontSize="11" fill="#9ca3af">
        {minRating}
      </text>

      {/* x-axis: first and last date */}
      <text x={PADDING.left} y={HEIGHT - 8} textAnchor="start" fontSize="11" fill="#9ca3af">
        {data[0].date}
      </text>
      <text x={WIDTH - PADDING.right} y={HEIGHT - 8} textAnchor="end" fontSize="11" fill="#9ca3af">
        {data[data.length - 1].date}
      </text>

      {/* the rating line */}
      <path d={linePath} fill="none" stroke="#111827" strokeWidth={2} />

      {/* hover guide line, circle, and label */}
      {active && hoverIndex !== null && (
        <>
          <line
            x1={xFor(hoverIndex)}
            y1={PADDING.top}
            x2={xFor(hoverIndex)}
            y2={PADDING.top + innerH}
            stroke="#d1d5db"
            strokeDasharray="3 3"
          />
          <circle cx={xFor(hoverIndex)} cy={yFor(active.rating)} r={5} fill="#111827" />
          <text x={labelX} y={20} textAnchor="middle" fontSize="13" fontWeight="600" fill="#111827">
            {active.rating}
          </text>
          <text x={labelX} y={36} textAnchor="middle" fontSize="11" fill="#9ca3af">
            {active.date}
          </text>
        </>
      )}
    </svg>
  )
}
