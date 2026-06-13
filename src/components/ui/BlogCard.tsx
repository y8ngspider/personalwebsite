import { Link } from 'react-router-dom'
import type { BlogPost } from '../../types'

interface Props {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="block py-6 border-b border-stone-200 last:border-0 group"
    >
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3 className="font-semibold text-ink group-hover:text-clay transition-colors">
          {post.title}
        </h3>
        <span className="text-sm text-stone-400 whitespace-nowrap">{post.date}</span>
      </div>
      <p className="text-sm text-stone-600 leading-relaxed mb-3">{post.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-stone-500 bg-stone-100 rounded px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-clay group-hover:translate-x-0.5 transition-transform whitespace-nowrap">
          Read more →
        </span>
      </div>
    </Link>
  )
}
