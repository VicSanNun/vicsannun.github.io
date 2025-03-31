export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          Hello! I'm a passionate developer who loves creating amazing things with code.
          I believe in writing clean, maintainable code and sharing knowledge with others.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">My Journey</h2>
        <p className="text-gray-600 mb-6">
          I started my programming journey [Your story here]. Over the years, I've worked
          on various projects and technologies, always striving to learn and improve.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            'JavaScript/TypeScript',
            'React/Next.js',
            'Node.js',
            'Python',
            'SQL',
            'Git',
            'AWS',
            'Docker',
            'CI/CD',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 px-4 py-2 rounded-md text-gray-700 text-center"
            >
              {skill}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Interests</h2>
        <p className="text-gray-600 mb-6">
          When I'm not coding, I enjoy [Your interests here]. I'm always excited to
          learn new technologies and share my knowledge with the community.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          I'm always open to new opportunities and collaborations. Feel free to reach
          out to me through [Your preferred contact method].
        </p>
      </div>
    </div>
  )
} 