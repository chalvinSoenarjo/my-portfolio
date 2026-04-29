import { userData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="text-center px-4 max-w-4xl mx-auto">
        
        {/* Profile Picture */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl bg-white/10 hover:scale-105 transition-transform duration-300">
            <img 
              src="/src/assets/chalvin_Linkedin_Profile_Pic.png" 
              alt={userData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {userData.name}
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-blue-100">{userData.title}</p>
        <p className="max-w-3xl mx-auto text-lg mb-8 text-blue-50">
          {userData.bio}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href={userData.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
          >
            GitHub
          </a>
          <a 
            href={userData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:chalssensi@gmail.com"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}