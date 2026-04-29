import { userData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-20 bg-white" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Academic background and professional certifications
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {userData.education.map((edu) => (
              <div key={edu.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                <a 
                  href={edu.institutionUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-800 hover:underline inline-block"
                >
                  {edu.institution} ↗
                </a>
                <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
                {edu.description && (
                  <p className="text-gray-600 text-sm mt-2">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {userData.certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition cursor-pointer"
              >
                {cert.name} {cert.year && `(${cert.year})`} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}