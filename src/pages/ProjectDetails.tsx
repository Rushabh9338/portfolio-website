
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

const ProjectDetails = () => {
  const { id } = useParams();
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
      caseStudy: true,
      duration: "6 months",
      team: "4 members",
      client: "Major E-commerce Platform",
      overview: "This project involved creating a comprehensive analytics dashboard for a leading e-commerce platform. The goal was to provide actionable insights into customer behavior, sales trends, and inventory management to drive business growth.",
      challenges: [
        "Processing large volumes of real-time data",
        "Integrating multiple data sources",
        "Creating intuitive visualizations for non-technical stakeholders"
      ],
      solutions: [
        "Implemented efficient ETL pipelines using Python and SQL",
        "Created interactive dashboards with Plotly and Power BI",
        "Developed automated reporting systems"
      ],
      results: [
        "40% increase in actionable sales insights",
        "60% reduction in reporting time",
        "25% improvement in inventory turnover",
        "Enhanced decision-making capabilities for management"
      ]
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
      caseStudy: false,
      duration: "8 months (ongoing)",
      team: "3 members",
      client: "Financial Services Firm",
      overview: "Development of a sophisticated machine learning model that combines historical stock data with sentiment analysis to predict short-term market movements.",
      challenges: [
        "Handling volatile market conditions",
        "Real-time data processing requirements",
        "Balancing model complexity with performance"
      ],
      solutions: [
        "Implemented ensemble learning techniques",
        "Used streaming data processing with Apache Kafka",
        "Applied feature engineering for sentiment analysis"
      ],
      results: [
        "75% prediction accuracy on test data",
        "Real-time processing capabilities",
        "Significant reduction in trading risks"
      ]
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
      caseStudy: true,
      duration: "4 months",
      team: "2 members",
      client: "Retail Chain",
      overview: "Created an advanced customer segmentation platform that analyzes customer behavior patterns to identify distinct market segments for targeted marketing campaigns.",
      challenges: [
        "Defining meaningful customer segments",
        "Processing diverse data sources",
        "Creating actionable insights for marketing teams"
      ],
      solutions: [
        "Applied K-means clustering with optimal cluster determination",
        "Integrated multiple data sources using PostgreSQL",
        "Developed interactive visualization tools"
      ],
      results: [
        "5 distinct customer segments identified",
        "25% improvement in marketing campaign targeting",
        "15% increase in customer engagement",
        "Reduced marketing costs by 20%"
      ]
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
      caseStudy: false,
      duration: "10 months",
      team: "5 members",
      client: "Tech Startup",
      overview: "Developed a comprehensive project management application with real-time collaboration features, task tracking, and team communication tools.",
      challenges: [
        "Real-time synchronization across multiple users",
        "Scalable architecture design",
        "Intuitive user interface for complex workflows"
      ],
      solutions: [
        "Implemented WebSocket connections with Socket.io",
        "Used React with TypeScript for type safety",
        "Created modular component architecture"
      ],
      results: [
        "100+ teams actively using the platform",
        "99.9% uptime reliability",
        "30% improvement in team productivity",
        "Positive user feedback and adoption"
      ]
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
      caseStudy: false,
      duration: "12 months (planned)",
      team: "6 members",
      client: "Manufacturing Company",
      overview: "Planning phase for a comprehensive supply chain optimization project aimed at reducing operational costs and improving efficiency through data-driven insights.",
      challenges: [
        "Complex multi-tier supply chain analysis",
        "Balancing cost reduction with service quality",
        "Integration with existing ERP systems"
      ],
      solutions: [
        "Linear programming optimization models",
        "Advanced analytics with Python",
        "Interactive dashboards with Tableau"
      ],
      results: [
        "Expected 30% reduction in operational costs",
        "Improved supply chain visibility",
        "Enhanced demand forecasting capabilities"
      ]
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
      caseStudy: false,
      duration: "6 months (ongoing)",
      team: "4 members",
      client: "Healthcare Provider",
      overview: "Building a robust ETL pipeline to process and analyze healthcare data from multiple sources, ensuring data quality and compliance with healthcare regulations.",
      challenges: [
        "Handling sensitive healthcare data",
        "Ensuring HIPAA compliance",
        "Processing large volumes of diverse data formats"
      ],
      solutions: [
        "Implemented secure data processing with Apache Airflow",
        "Used Docker for containerized deployment",
        "Applied data validation and quality checks"
      ],
      results: [
        "Processing 1M+ records daily",
        "100% HIPAA compliance maintained",
        "Improved data quality and accessibility"
      ]
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="/projects" className="text-cyan-400">Projects</a>
              <a href="/blogs" className="hover:text-cyan-400 transition-colors">Blogs</a>
              <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Button
            onClick={() => navigate('/projects')}
            variant="outline"
            className="mb-8 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-8 overflow-hidden">
              <img 
                src={`https://images.unsplash.com/${project.image}?w=1200&h=600&fit=crop`}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <Badge variant="outline" className="border-slate-600 text-slate-400">
                    {project.category}
                  </Badge>
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

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:w-80">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Project Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm text-slate-400">Duration</div>
                        <div className="text-white">{project.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="text-sm text-slate-400">Team Size</div>
                        <div className="text-white">{project.team}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-sm text-slate-400">Client</div>
                        <div className="text-white">{project.client}</div>
                      </div>
                    </div>
                    
                    <div className="pt-4 space-y-3">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{project.overview}</p>
                </CardContent>
              </Card>

              {/* Challenges */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Solutions */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              {/* Key Metrics */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Key Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.metrics.map((metric, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Results & Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
