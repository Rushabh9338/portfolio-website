
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, X, ExternalLink, Github, Linkedin, Mail, Code, BarChart3, Briefcase, Award, Download, Shield, Database, Activity, TrendingUp, Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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

  const skills = [
    { name: "Python", icon: Code, level: "Expert", color: "from-blue-400 to-blue-600" },
    { name: "SQL", icon: Database, level: "Expert", color: "from-green-400 to-green-600" },
    { name: "Power BI", icon: BarChart3, level: "Advanced", color: "from-yellow-400 to-yellow-600" },
    { name: "Machine Learning", icon: Activity, level: "Advanced", color: "from-purple-400 to-purple-600" },
    { name: "Data Analysis", icon: TrendingUp, level: "Expert", color: "from-cyan-400 to-cyan-600" },
    { name: "Project Management", icon: Briefcase, level: "Advanced", color: "from-pink-400 to-pink-600" },
    { name: "React", icon: Code, level: "Intermediate", color: "from-blue-400 to-cyan-400" },
    { name: "Tableau", icon: BarChart3, level: "Advanced", color: "from-orange-400 to-orange-600" },
    { name: "Apache Kafka", icon: Database, level: "Intermediate", color: "from-red-400 to-red-600" },
    { name: "Excel", icon: Grid, level: "Expert", color: "from-green-500 to-emerald-500" },
    { name: "Statistics", icon: Activity, level: "Advanced", color: "from-indigo-400 to-indigo-600" },
    { name: "ETL", icon: Database, level: "Advanced", color: "from-teal-400 to-teal-600" }
  ];

  const certifications = [
    {
      title: "MBA in Project Management",
      issuer: "Harvard Business School",
      completed: "December 2023",
      credentialId: "HBS-PM-2023-001",
      image: "photo-1488590528505-98d2b5aba04b",
      color: "from-purple-400 to-pink-400",
      verifyUrl: "https://verify.hbs.edu",
      downloadUrl: "#"
    },
    {
      title: "AWS Certified Data Analytics",
      issuer: "Amazon Web Services",
      completed: "August 2023",
      credentialId: "AWS-DA-2023-789",
      image: "photo-1461749280684-dccba630e2f6",
      color: "from-cyan-400 to-blue-400",
      verifyUrl: "https://aws.amazon.com/verification",
      downloadUrl: "#"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      completed: "March 2022",
      credentialId: "GDAPC-2022-456",
      image: "photo-1498050108023-c5249f4df085",
      color: "from-green-400 to-teal-400",
      verifyUrl: "https://coursera.org/verify",
      downloadUrl: "#"
    },
    {
      title: "Microsoft Power BI Data Analyst",
      issuer: "Microsoft",
      completed: "January 2023",
      credentialId: "MS-PBI-2023-123",
      image: "photo-1551288049-bebda4e38f71",
      color: "from-yellow-400 to-orange-400",
      verifyUrl: "https://docs.microsoft.com/verify",
      downloadUrl: "#"
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      completed: "June 2022",
      credentialId: "TAB-DS-2022-567",
      image: "photo-1460925895917-afdab827c52f",
      color: "from-blue-400 to-purple-400",
      verifyUrl: "https://www.tableau.com/verify",
      downloadUrl: "#"
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

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <Carousel className="w-full max-w-6xl mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/7">
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                        <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-20 text-white font-medium`}>
                          {skill.level}
                        </span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700" />
            <CarouselNext className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700" />
          </Carousel>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <Carousel className="w-full max-w-6xl mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {certifications.map((cert, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group h-full">
                    <CardContent className="p-6">
                      {/* Certificate Image */}
                      <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/${cert.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Certificate Title */}
                      <h3 className={`text-lg font-semibold mb-2 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent flex items-center`}>
                        <Award className="w-5 h-5 mr-2 text-current" />
                        {cert.title}
                      </h3>
                      
                      {/* Issuer and Date */}
                      <div className="space-y-1 mb-4">
                        <p className="text-slate-300 font-medium">{cert.issuer}</p>
                        <p className="text-slate-400 text-sm">Completed: {cert.completed}</p>
                        <p className="text-slate-500 text-xs font-mono">ID: {cert.credentialId}</p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                          onClick={() => window.open(cert.verifyUrl, '_blank')}
                        >
                          <Shield className="w-4 h-4 mr-1" />
                          Verify
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          onClick={() => window.open(cert.downloadUrl, '_blank')}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700" />
            <CarouselNext className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700" />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Index;
