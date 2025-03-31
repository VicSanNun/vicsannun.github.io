export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project and its key features.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of your second project and its key features.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      github: '#',
    },
    {
      title: 'Project 3',
      description: 'A brief description of your third project and its key features.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Projects</h1>
      
      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project →
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-700 font-medium"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 