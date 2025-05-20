
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, BookOpen, Video, FileText } from "lucide-react";

const Resources = () => {
  // Sample resources data
  const categories = [
    {
      id: "templates",
      name: "Templates",
      count: 15,
      icon: <FileText className="w-6 h-6 text-primary" />
    },
    {
      id: "ebooks",
      name: "E-Books",
      count: 8,
      icon: <BookOpen className="w-6 h-6 text-primary" />
    },
    {
      id: "videos",
      name: "Video Tutorials",
      count: 24,
      icon: <Video className="w-6 h-6 text-primary" />
    },
    {
      id: "tools",
      name: "Free Tools",
      count: 12,
      icon: <Download className="w-6 h-6 text-primary" />
    }
  ];

  const featuredResources = [
    {
      id: "1",
      title: "Resume Builder Template",
      type: "Template",
      description: "Professional resume template optimized for ATS systems and hiring managers.",
      downloads: 2500,
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "2",
      title: "Python for Beginners",
      type: "E-Book",
      description: "A comprehensive guide to Python programming fundamentals for absolute beginners.",
      downloads: 3200,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "3",
      title: "Digital Marketing Checklist",
      type: "Template",
      description: "Step-by-step checklist for planning and executing digital marketing campaigns.",
      downloads: 1800,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "4",
      title: "Public Speaking Masterclass",
      type: "Video Tutorial",
      description: "Learn effective communication techniques from industry experts.",
      downloads: 1500,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "5",
      title: "Design Portfolio Guide",
      type: "E-Book",
      description: "Tips and strategies for creating a standout design portfolio that gets noticed.",
      downloads: 2100,
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "6",
      title: "Project Management Kit",
      type: "Tool",
      description: "Complete set of templates and tools for managing student and professional projects.",
      downloads: 2800,
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Free Resources"
            subtitle="Downloadable tools, templates, guides and learning materials to boost your skills"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-12">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/resources/${category.id}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} items</p>
              </Link>
            ))}
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Featured Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{resource.downloads.toLocaleString()} downloads</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-support/10 rounded-xl p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Contribute a Resource</h3>
              <p className="text-gray-600 mb-6">
                Are you an expert with valuable knowledge to share? Submit your resource and help fellow students succeed.
              </p>
              <Link to="/submit-resource" className="inline-block bg-support text-white px-6 py-3 rounded-lg hover:bg-support/90 transition-colors">
                Submit Your Resource
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
