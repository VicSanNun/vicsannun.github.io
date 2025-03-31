import { getPostBySlug, getAllPosts } from '@/lib/markdown'
import { notFound } from 'next/navigation'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPostProps) {
  try {
    const post = await getPostBySlug(params.slug)

    return (
      <div className="bg-gray-50 min-h-screen py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <time className="text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          <div
            className="prose prose-lg max-w-none text-gray-900 [&>h1]:text-gray-900 [&>h2]:text-gray-900 [&>h3]:text-gray-900 [&>h4]:text-gray-900 [&>p]:text-gray-900 [&>ul]:text-gray-900 [&>ol]:text-gray-900 [&>li]:text-gray-900 [&>strong]:text-gray-900 [&>code]:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    )
  } catch (error) {
    notFound()
  }
} 