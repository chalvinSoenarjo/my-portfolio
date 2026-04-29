import { userData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userData.projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} className="text-blue-600 hover:underline">Live Demo →</a>
                  <a href={project.codeLink} className="text-gray-600 hover:underline">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}