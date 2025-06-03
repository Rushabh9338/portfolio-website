
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataGame from '@/components/DataGame';

const PlayGame = () => {
  const handleGameComplete = () => {
    console.log('Game completed!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
              <Link to="/blogs" className="hover:text-cyan-400 transition-colors">Blogs</Link>
              <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              <Link to="/play-game" className="text-cyan-400">Play Game</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 mb-8">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Game Section */}
      <div className="flex-1 flex items-center justify-center px-4">
        <DataGame onComplete={handleGameComplete} />
      </div>
    </div>
  );
};

export default PlayGame;
