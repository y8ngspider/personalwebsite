import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import BlogCard from '../components/ui/BlogCard'

export default function BlogPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
      <Link to="/" className="text-sm text-stone-400 hover:text-clay transition-colors">
        ← Back home
      </Link>

      <h1 className="text-3xl font-semibold text-ink tracking-tight mt-6 mb-8">Writing</h1>

      <div>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
