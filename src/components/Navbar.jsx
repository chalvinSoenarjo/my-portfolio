import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('hero')}
          className={`text-xl font-bold transition ${
            isScrolled ? 'text-gray-800' : 'text-white'
          } hover:text-blue-500`}
        >
          Chalvin Soenarjo
        </button>

        <div className="hidden md:flex space-x-8">
          {['Home', 'Skills', 'Projects', 'Experience', 'Education'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`transition hover:text-blue-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-3 px-4 py-4">
            {['Home', 'Skills', 'Projects', 'Experience', 'Education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-500 py-2 text-left transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}