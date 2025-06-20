
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Calendar } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      title: "Data Analysis & Visualization",
      description: "Transform your data into actionable insights with comprehensive analysis and stunning visualizations.",
      price: "Starting at $500"
    },
    {
      title: "Frontend Development",
      description: "Build modern, responsive web applications using React, TypeScript, and latest technologies.",
      price: "Starting at $1000"
    },
    {
      title: "Project Management Consulting",
      description: "Streamline your projects with proven methodologies and strategic planning expertise.",
      price: "Starting at $800"
    }
  ];

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
              <a href="/projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="/blogs" className="hover:text-cyan-400 transition-colors">Blogs</a>
              <a href="/contact" className="text-cyan-400">Contact</a>
              <a href="/play-game" className="hover:text-cyan-400 transition-colors">Play Game</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your data into insights or build your next project? 
              Let's discuss how I can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-700 border-slate-600 text-white focus:border-cyan-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-slate-700 border-slate-600 text-white focus:border-cyan-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-slate-700 border-slate-600 text-white focus:border-cyan-500"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-slate-700 border-slate-600 text-white focus:border-cyan-500"
                        placeholder="Tell me about your project or question..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Services */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-400">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>Available Worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span>Mon - Fri, 9AM - 6PM EST</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-400">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors">
                    <Github className="w-5 h-5" />
                    <span>GitHub Portfolio</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors">
                    <Calendar className="w-5 h-5" />
                    <span>Schedule a Call</span>
                  </a>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-400">Freelance Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="border-b border-slate-700 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                      <p className="text-sm text-slate-400 mb-2">{service.description}</p>
                      <p className="text-sm text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Availability Banner */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border-green-500/30">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <h3 className="text-xl font-semibold text-white">Available for New Projects</h3>
                </div>
                <p className="text-slate-300 mb-6">
                  I'm currently accepting new freelance opportunities and would love to discuss your project.
                </p>
                <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600">
                  Let's Work Together
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
