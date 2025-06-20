
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataGame from '@/components/DataGame';
import NavBar from '@/components/NavBar';

const PlayGame = () => {
  const handleGameComplete = () => {
    console.log('Game completed!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      <NavBar/>

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
