import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Posts</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <time className="text-gray-500 text-sm mb-4 block">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.excerpt && (
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
            )}
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 