// NavBar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to return dynamic class based on active path
  const getLinkClass = (path: string) => {
    return currentPath === path
      ? "text-cyan-400"
      : "hover:text-cyan-400 transition-colors";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={getLinkClass("/")}>Home</Link>
            <Link to="/about" className={getLinkClass("/about")}>About</Link>
            <Link to="/projects" className={getLinkClass("/projects")}>Projects</Link>
            <Link to="/blogs" className={getLinkClass("/blogs")}>Blogs</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
            <Link to="/play-game" className={getLinkClass("/play-game")}>Play Game</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
