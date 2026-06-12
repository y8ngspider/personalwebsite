import { blogPosts } from '../../data/blog'
import BlogCard from '../ui/BlogCard'

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <h2 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">
        Writing
      </h2>
      <div>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
