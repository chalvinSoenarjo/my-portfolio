import { userData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {userData.skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}