import type { BlogPost } from '../../types'

interface Props {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <div className="py-6 border-b border-gray-100 last:border-0">
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3 className="font-semibold text-gray-900">{post.title}</h3>
        <span className="text-sm text-gray-400 whitespace-nowrap">{post.date}</span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{post.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
