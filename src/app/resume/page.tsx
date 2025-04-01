export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Resume</h1>

      <div className="bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Victor Nunes</h2>
          <p className="text-gray-600">Engineer and Researcher</p>
          <div className="mt-2 text-gray-600">
            <p>Campinas, São Paulo • LinkedIn: linkedin.com/in/victorsantosnunes</p>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Summary</h3>
          <p className="text-gray-600 text-justify">
          Cross-disciplinary professional with experience in Software Engineering, Data Science, and Quantitative Finance. I am currently working as a Quantitative Developer where, generally speaking, my job is to understand the financial market and transform it into models, systems, and workflows.
          </p>
          <br/>
          <p className="text-gray-600 text-justify">I am interested in several topics, including Quantitative Finance, Applied Mathematics, Low-level Development and Artificial Intelligence (ML, DL, Generative AI, Computer Vision, etc).
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900">Quantitative Developer</h4>
              <p className="text-gray-600">XP Inc • 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Developing and maintaining position reconciliations, with a special focus on offshore derivatives trading, <strong>ensuring the consistency of financial positions in the range of USD billions.</strong></li>
                <li>Developing and maintaining deal capture systems (ticketing systems) for offshore OTC derivatives trades, <strong>processing dozens of trades daily with values in the range of tens of millions of USD.</strong></li>
                <li>Developing comprehensive training materials on derivatives and bonds while mentoring junior developers, <strong>enhancing their expertise and fostering a culture of continuous growth and excellence within the team.</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Business Analyst</h4>
              <p className="text-gray-600">XP Inc • 2021 - 2024</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>I led the development of a tool to automate performance fee revenue calculations (<strong>values reaching tens of millions of BRL</strong>), providing crucial data for strategic decision-making.</li>
                <li>By analyzing the income statement and product data, we identified the cause of its negative EBITDA. We then modeled the product and simulated scenarios, <strong>reducing 70% of our losses.</strong>
                </li>
                <li>I developed a trade matching tool that, during testing, <strong>helped raise BRL 6 million and now
                assists the trading desk in capturing millions monthly.</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
          <div>
            <h4 className="font-semibold text-gray-900">Ba. in Electrical and Computer Engineering</h4>
            <p className="text-gray-600">State University of Campinas • 2025 - Present</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li><strong>Minors:</strong> Fundamentals of Computer Engineering, Control Systems, Automation and Intelligent Systems</li>
              <li>Researching applications of Artificial Intelligence and Information Theory in Quantitative Finance</li>
            </ul>
          </div>
          <br/>
          <div>
            <h4 className="font-semibold text-gray-900">BSc. in Astrophysics</h4>
            <p className="text-gray-600">Federal University of Sergipe • 2018 - 2023</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li><strong>Final Work:</strong> Reconstruction of the Cosmic Expansion Using Gaussian Processes.</li>
              <li>Undergraduate Research Project in Mathematics, Mathematical Physics and Theoretical Physics (Differential Geometry and General Relativity)</li>
              <li>Teacher Assistant in Mathematical Physics (PDE, Complex Analysis and Vector Analysis)
              </li>
            </ul>
          </div>
          <br/>
          <div>
            <h4 className="font-semibold text-gray-900">Electronics Technician</h4>
            <p className="text-gray-600">Federal Institute of Sergipe • 2018 - 2019</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Python',
              'C#',
              'C++',
              'GoLang',
              'SQL',
              'Git',
              'Docker',
              'RabbitMQ',
              'LangGraph',
              'CI/CD',
              'REST APIs',
              'gRPC',
              'Machine Learning',
              'Deep Learning',
              'Generative AI',
              'Computer Vision',
              'Quantitative Finance',
              'Applied Mathematics',

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