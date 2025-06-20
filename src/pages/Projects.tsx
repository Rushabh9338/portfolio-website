
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import NavBar from '@/components/NavBar';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
  
  const projects = [
    {
      id: "ecommerce-analytics",
      title: "E-commerce Analytics Dashboard",
      description: "Comprehensive dashboard analyzing customer behavior, sales trends, and inventory management for a major e-commerce platform.",
      category: "Data Analysis",
      tech: ["Python", "Pandas", "Plotly", "SQL", "Power BI"],
      status: "Completed",
      image: "photo-1461749280684-dccba630e2f6",
      metrics: ["40% increase in sales insights", "60% faster reporting"],
      caseStudy: true
    },
    {
      id: "stock-predictor",
      title: "Real-time Stock Market Predictor",
      description: "Machine learning model that predicts stock movements using historical data and sentiment analysis.",
      category: "Data Science",
      tech: ["Python", "TensorFlow", "scikit-learn", "Alpha Vantage API"],
      status: "Ongoing",
      image: "photo-1518770660439-4636190af475",
      metrics: ["75% accuracy rate", "Real-time processing"],
      caseStudy: false
    },
    {
      id: "customer-segmentation",
      title: "Customer Segmentation Platform",
      description: "Advanced customer segmentation system using clustering algorithms and behavioral analysis.",
      category: "Data Analysis",
      tech: ["R", "Python", "K-means", "PostgreSQL"],
      status: "Completed",
      image: "photo-1526374965328-7f61d4dc18c5",
      metrics: ["5 distinct segments identified", "25% improvement in targeting"],
      caseStudy: true
    },
    {
      id: "project-management-app",
      title: "Project Management React App",
      description: "Full-stack project management application with real-time collaboration features.",
      category: "Frontend Development",
      tech: ["React", "TypeScript", "Node.js", "Socket.io"],
      status: "Completed",
      image: "photo-1487058792275-0ad4aaf24ca7",
      metrics: ["100+ teams using", "99.9% uptime"],
      caseStudy: false
    },
    {
      id: "supply-chain-optimization",
      title: "Supply Chain Optimization",
      description: "Data-driven solution to optimize supply chain logistics and reduce operational costs.",
      category: "Data Analysis",
      tech: ["Python", "Linear Programming", "Excel", "Tableau"],
      status: "Planning",
      image: "photo-1470813740244-df37b8c1edcb",
      metrics: ["Expected 30% cost reduction"],
      caseStudy: false
    },
    {
      id: "healthcare-pipeline",
      title: "Healthcare Data Pipeline",
      description: "ETL pipeline for processing and analyzing healthcare data from multiple sources.",
      category: "Data Engineering",
      tech: ["Apache Airflow", "Python", "MongoDB", "Docker"],
      status: "Ongoing",
      image: "photo-1500673922987-e212871fec22",
      metrics: ["Processing 1M+ records daily"],
      caseStudy: false
    }
  ];

  const categories = ['All', 'Data Analysis', 'Data Science', 'Frontend Development', 'Data Engineering'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <ParticleBackground />
      
      <NavBar/>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A showcase of data analysis projects, frontend applications, and consulting work 
              that demonstrate my expertise across multiple domains.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`${
                  filter === category 
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500" 
                    : "border-slate-600 text-slate-300 hover:bg-slate-800"
                } transition-all duration-300`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <div className="flex space-x-2">
                      <Badge variant={
                        project.status === 'Completed' ? 'default' :
                        project.status === 'Ongoing' ? 'secondary' : 'outline'
                      } className={
                        project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border-green-500/50' :
                        project.status === 'Ongoing' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' :
                        'bg-blue-500/20 text-blue-400 border-blue-500/50'
                      }>
                        {project.status}
                      </Badge>
                      {project.caseStudy && (
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
                          Case Study
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit border-slate-600 text-slate-400">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Metrics:</h4>
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="text-sm text-slate-400">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{projects.length}+</div>
              <div className="text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-slate-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
