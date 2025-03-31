export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Resume</h1>

      <div className="bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Your Name</h2>
          <p className="text-gray-600">Software Developer</p>
          <div className="mt-2 text-gray-600">
            <p>email@example.com • (123) 456-7890</p>
            <p>City, State • LinkedIn: linkedin.com/in/yourprofile</p>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Summary</h3>
          <p className="text-gray-600">
            Experienced software developer with expertise in web development and cloud technologies.
            Passionate about creating efficient, scalable solutions and mentoring junior developers.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900">Senior Software Developer</h4>
              <p className="text-gray-600">Company Name • 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Led development of key features and improvements</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented CI/CD pipelines and automated testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Software Developer</h4>
              <p className="text-gray-600">Previous Company • 2018 - 2020</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Developed and maintained web applications</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Optimized application performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
          <div>
            <h4 className="font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
            <p className="text-gray-600">University Name • 2014 - 2018</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              'REST APIs',
              'GraphQL',
              'MongoDB',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 px-4 py-2 rounded-md text-gray-700 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 