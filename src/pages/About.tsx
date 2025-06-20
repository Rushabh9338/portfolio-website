
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, BarChart3, Briefcase, Users } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import NavBar from '@/components/NavBar';

const About = () => {
  const skills = [
    { category: "Data Analysis", items: ["Python", "SQL", "Power BI", "Tableau", "Excel"], icon: BarChart3 },
    { category: "Frontend Development", items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Vue.js"], icon: Code },
    { category: "Project Management", items: ["Agile", "Scrum", "JIRA", "Confluence", "Risk Management"], icon: Briefcase }
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Tech Corporation",
      period: "2020 - Present",
      description: "Led frontend development teams, architected scalable solutions"
    },
    {
      role: "Data Analyst",
      company: "Analytics Firm",
      period: "2019 - 2020",
      description: "Developed data pipelines and visualization dashboards"
    },
    {
      role: "Project Manager",
      company: "Consulting Group",
      period: "2018 - 2019",
      description: "Managed cross-functional teams and delivered complex projects"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <ParticleBackground />
      
      <NavBar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with Profile Image */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Profile" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl"
                />
                <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A versatile professional combining technical expertise in software engineering and data analysis 
              with strategic project management skills to deliver impactful solutions.
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-16">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Professional Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  With a unique blend of technical and business acumen, I bridge the gap between 
                  complex data insights and strategic business decisions. My journey spans from 
                  hands-on software development to high-level project management.
                </p>
                <p>
                  As a freelancer, I help organizations transform their data into actionable 
                  insights while ensuring projects are delivered on time and within scope.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Core Competencies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-cyan-400 flex items-center">
                      <skillGroup.icon className="w-6 h-6 mr-2" />
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                          <span className="text-slate-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <p className="text-cyan-400">{exp.company}</p>
                      </div>
                      <span className="text-slate-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-slate-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
