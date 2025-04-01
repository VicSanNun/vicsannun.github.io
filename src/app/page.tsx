import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I&apos;m a passionate developer sharing my thoughts, projects, and experiences
          through this blog.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Read Blog Posts
          </Link>
          <Link
            href="/about"
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            Learn About Me
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Latest Projects</h2>
          <p className="text-gray-600 mb-4">
            Check out my latest projects and contributions.
          </p>
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View Projects →
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Resume</h2>
          <p className="text-gray-600 mb-4">
            Take a look at my professional experience and skills.
          </p>
          <Link
            href="/resume"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View Resume →
          </Link>
        </div>
      </section>
    </div>
  )
}
