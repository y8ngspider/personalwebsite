import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export default function BlogPostPage() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          ← Back home
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
      <Link
        to="/#blog"
        className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
      >
        ← Back to writing
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 tracking-tight mt-6 mb-2">
        {post.title}
      </h1>
      <p className="text-sm text-gray-400 mb-8">{post.date}</p>

      <div className="space-y-4">
        {post.content.map((paragraph, index) => (
          <p key={index} className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-8">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
    </main>
  )
}
