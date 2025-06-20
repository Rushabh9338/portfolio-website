
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Eye, BookOpen } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of Data Analytics in Business Decision Making",
      excerpt: "Exploring how advanced analytics and machine learning are reshaping how companies make strategic decisions.",
      category: "Data Science",
      readTime: "8 min read",
      date: "Dec 15, 2023",
      views: "1.2k",
      image: "photo-1461749280684-dccba630e2f6",
      featured: true
    },
    {
      title: "Building Scalable React Applications: Lessons Learned",
      excerpt: "Best practices and architectural patterns I've discovered while building large-scale React applications.",
      category: "Frontend Development",
      readTime: "12 min read",
      date: "Nov 28, 2023",
      views: "856",
      image: "photo-1487058792275-0ad4aaf24ca7",
      featured: false
    },
    {
      title: "Project Management in the Age of Remote Work",
      excerpt: "How to effectively manage distributed teams and deliver projects successfully in a remote-first world.",
      category: "Project Management",
      readTime: "6 min read",
      date: "Nov 10, 2023",
      views: "943",
      image: "photo-1518770660439-4636190af475",
      featured: false
    },
    {
      title: "Data Visualization: Turning Numbers into Stories",
      excerpt: "A deep dive into effective data visualization techniques and tools that help communicate insights clearly.",
      category: "Data Analysis",
      readTime: "10 min read",
      date: "Oct 22, 2023",
      views: "1.5k",
      image: "photo-1526374965328-7f61d4dc18c5",
      featured: true
    },
    {
      title: "Freelancing as a Data Professional: A Complete Guide",
      excerpt: "Everything you need to know about starting and growing a successful freelance career in data analytics.",
      category: "Career",
      readTime: "15 min read",
      date: "Oct 5, 2023",
      views: "2.1k",
      image: "photo-1470813740244-df37b8c1edcb",
      featured: false
    },
    {
      title: "Machine Learning Ethics: Building Responsible AI Systems",
      excerpt: "Discussing the importance of ethical considerations in machine learning and how to implement them.",
      category: "Data Science",
      readTime: "11 min read",
      date: "Sep 18, 2023",
      views: "987",
      image: "photo-1500673922987-e212871fec22",
      featured: false
    }
  ];

  const categories = ["All", "Data Science", "Frontend Development", "Project Management", "Data Analysis", "Career"];

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
              <a href="/blogs" className="text-cyan-400">Blogs</a>
              <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
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
              Blog & Insights
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Sharing knowledge and insights about data analytics, software engineering, 
              project management, and the evolving tech landscape.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-cyan-400 flex items-center">
              <BookOpen className="w-6 h-6 mr-2" />
              Featured Posts
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02] group">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-t-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${post.image}?w=600&h=400&fit=crop`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
                        Featured
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-cyan-400">All Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02] group">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-t-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${post.image}?w=400&h=250&fit=crop`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      {post.featured && (
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs">
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-300 text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
                <p className="text-slate-300 mb-6">
                  Subscribe to my newsletter for the latest insights on data analytics, 
                  software engineering, and project management.
                </p>
                <div className="flex max-w-md mx-auto space-x-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
                  />
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
