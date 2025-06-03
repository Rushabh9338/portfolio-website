
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, X, ExternalLink, Github, Linkedin, Mail, Code, BarChart3, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ParticleBackground from '@/components/ParticleBackground';
import DataGame from '@/components/DataGame';
import LoadingBar from '@/components/LoadingBar';

const Index = () => {
  const [showGame, setShowGame] = useState(true);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleGameComplete = () => {
    setGameCompleted(true);
    setTimeout(() => setShowGame(false), 1000);
  };

  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Power BI dashboard analyzing sales performance across multiple regions",
      tech: ["Power BI", "SQL", "Python"],
      status: "Completed",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Customer Segmentation Model",
      description: "Machine learning model for customer behavior analysis using clustering algorithms",
      tech: ["Python", "Scikit-learn", "Pandas"],
      status: "Ongoing",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Real-time Data Pipeline",
      description: "ETL pipeline for processing streaming data from multiple sources",
      tech: ["Apache Kafka", "Python", "PostgreSQL"],
      status: "Planning",
      image: "photo-1526374965328-7f61d4dc18c5"
    }
  ];

  const certifications = [
    {
      title: "MBA in Project Management",
      issuer: "University",
      year: "2023",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Bachelor's in Computer Science",
      issuer: "University",
      year: "2020",
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "Data Analysis Certification",
      issuer: "Professional Institute",
      year: "2022",
      color: "from-green-400 to-teal-400"
    }
  ];

  if (showGame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <DataGame onComplete={handleGameComplete} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <LoadingBar progress={loadingProgress} />
      
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
              <Link to="/play-game" className="hover:text-cyan-400 transition-colors">Play Game</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Data Analyst
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in delay-200">
              Senior Software Engineer | MBA Project Management | Freelancer
            </p>
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-slate-400">
                <Code className="w-5 h-5" />
                <span>Frontend Engineering</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <BarChart3 className="w-5 h-5" />
                <span>Data Analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Briefcase className="w-5 h-5" />
                <span>Project Management</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              <Link to="/projects" className="flex items-center space-x-2">
                <span>View Projects</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 transition-all duration-300">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Education
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className={`text-xl flex items-center bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    <Award className="w-6 h-6 mr-2 text-current" />
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{cert.issuer}</p>
                  <p className="text-slate-500 text-sm mt-1">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 flex items-center justify-center">
                    <img 
                      src={`https://images.unsplash.com/${project.image}`} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'Ongoing' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Link to="/projects" className="flex items-center space-x-2">
                <span>View All Projects</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
