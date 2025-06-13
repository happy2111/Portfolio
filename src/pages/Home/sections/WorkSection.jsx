import React, {useEffect, useState} from "react";
import {ExternalLink, Github} from "lucide-react";

const WorkSection = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "TryoBot App",
      description: "AI-powered mobile application with advanced machine learning capabilities",
      image: "/api/placeholder/400/300",
      category: "Mobile App",
      featured: true
    },
    {
      id: 2,
      title: "Flight Local 2024 Travel",
      description: "Modern travel booking platform with real-time flight tracking",
      image: "/api/placeholder/400/300",
      category: "Web App"
    },
    {
      id: 3,
      title: "E-LAB Obstacle",
      description: "Educational platform for interactive learning experiences",
      image: "/api/placeholder/400/300",
      category: "Web Platform"
    },
    {
      id: 4,
      title: "Xprof - Online Transport",
      description: "Transportation management system with live tracking",
      image: "/api/placeholder/400/300",
      category: "Web App"
    },
    {
      id: 5,
      title: "TryoBot - Cross Platform Travel App",
      description: "Comprehensive travel companion application",
      image: "/api/placeholder/400/300",
      category: "Mobile App"
    },
    {
      id: 6,
      title: "Tryou - Dashboard Online",
      description: "Analytics dashboard with real-time data visualization",
      image: "/api/placeholder/400/300",
      category: "Web App"
    },
    {
      id: 7,
      title: "TryoBot Web (WIP)",
      description: "Web version of the popular TryoBot application",
      image: "/api/placeholder/400/300",
      category: "Web App"
    },
    {
      id: 8,
      title: "Barber of Pry List",
      description: "Service booking platform for beauty and wellness",
      image: "/api/placeholder/400/300",
      category: "Web Platform"
    },
    {
      id: 9,
      title: "Karabarkara Spuder Says",
      description: "Interactive communication platform",
      image: "/api/placeholder/400/300",
      category: "Web App"
    },
    {
      id: 10,
      title: "A Flower Thought",
      description: "Creative portfolio and blogging platform",
      image: "/api/placeholder/400/300",
      category: "Portfolio"
    },
    {
      id: 11,
      title: "All the roads of Chittagong",
      description: "Geographic information system for urban planning",
      image: "/api/placeholder/400/300",
      category: "GIS Platform"
    }
  ]);

  // Simulate API call
  useEffect(() => {
    // This would be replaced with actual API call using axios
    // fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // const response = await axios.get('/api/projects');
      // setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <section id="work" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My<br />Work
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              A collection of carefully crafted digital experiences, from mobile applications to web platforms. Each project represents a unique challenge solved with innovative thinking and cutting-edge technology.
            </p>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Featured Project - Mobile Mockup */}
            <div className="relative">
              <div className="w-64 h-96 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl border-8 border-slate-600 mx-auto relative overflow-hidden">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-slate-500 rounded-full"></div>
                <div className="p-6 pt-12">
                  <div className="bg-blue-600 h-12 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-semibold">TryoBot</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-slate-600 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                    <div className="h-3 bg-slate-600 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Featured Project
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-gray-300 bg-black/30 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex items-center space-x-4">
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink size={16} />
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkSection;