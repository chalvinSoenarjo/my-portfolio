import { userData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} {userData.name}. All rights reserved.</p>
        <p className="text-gray-400 text-sm mt-2">Built with React + Vite + Tailwind CSS</p>
      </div>
    </footer>
  );
}