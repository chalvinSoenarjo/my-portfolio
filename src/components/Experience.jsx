import { userData } from '../data/portfolioData';
import { useState } from 'react';

export default function Experience() {
  const [imagesFailed, setImagesFailed] = useState({});

  const handleImageError = (companyName) => {
    setImagesFailed(prev => ({ ...prev, [companyName]: true }));
  };

  // Fallback images based on company type
  const getFallbackImage = (company) => {
    if (company.includes("Inverted AI")) return "https://www.inverted.ai/images/hero-background.jpg";
    if (company.includes("Motorola") || company.includes("Avigilon")) return "https://bearcom.ca/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fe0k8mfc6%2Fproduction%2Ff5b8c3a2e1d4b5c6d7e8f9a0b1c2d3e4f5a6b7c8.png&w=1200&q=75";
    if (company.includes("IBM")) return "https://www.ibm.com/ibm/history/ibm100/images/icp/P101214V08442Q57%20IBM%20System%20360%20Mainframe%20B.%20Herbert.jpg";
    if (company.includes("Earls")) return "https://earls.ca/wp-content/uploads/2022/02/earls-kitchen-interior.jpg";
    if (company.includes("Denny")) return "https://cdn.vox-cdn.com/uploads/chorus_asset/file/3644168/dennys-flagship.0.jpg";
    if (company.includes("Langara")) return "https://www.bccolleges.ca/assets/Uploads/_resampled/ScaleWidthWyIxMDAwIl0/Langara-Orientation-Week-2017-5.jpg";
    if (company.includes("Free Geek")) return "https://freegeek.org/sites/default/files/styles/large/public/volunteer-building-computer.jpg";
    return "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200";
  };

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Work Experience</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          My professional journey across technology, data, and systems
        </p>
        
        <div className="max-w-5xl mx-auto">
          {userData.experience.map((exp) => (
            <div key={exp.id} className="mb-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden">
              
              {/* Company Image - Left side on desktop */}
              <div className="md:w-48 h-48 md:h-auto bg-gray-100 overflow-hidden flex-shrink-0">
                <img 
                  src={imagesFailed[exp.company] ? getFallbackImage(exp.company) : exp.companyImage}
                  alt={`${exp.company} product`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={() => handleImageError(exp.company)}
                />
              </div>
              
              {/* Job Details - Right side */}
              <div className="flex-1 p-6">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                
                <a 
                  href={exp.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-800 hover:underline inline-flex items-center gap-1 mb-2"
                >
                  {exp.company} 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {exp.location}
                </p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}