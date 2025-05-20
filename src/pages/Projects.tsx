
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  // Sample project data
  const studentProjects = [
    {
      id: "1",
      title: "EcoTracker Mobile App",
      student: "Arjun Patel & Team",
      category: "App Development",
      description: "A mobile application that helps users track their carbon footprint and suggests eco-friendly alternatives.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "2",
      title: "Financial Literacy Platform",
      student: "Meera Shah & Team",
      category: "Web Development",
      description: "An interactive website teaching teens and young adults about personal finance and investment basics.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "3",
      title: "Mental Health Chatbot",
      student: "Diya Kumar & Team",
      category: "AI & Machine Learning",
      description: "A conversational AI that provides mental health resources and basic support for college students.",
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "4",
      title: "Local Market Connect",
      student: "Vikram Singh & Team",
      category: "E-commerce",
      description: "A platform connecting local artisans and small businesses to customers in their community.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "5",
      title: "EdTech Classroom Solution",
      student: "Neha Gupta & Team",
      category: "Education",
      description: "A classroom management tool that helps teachers track student progress and engagement in real-time.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "6",
      title: "Healthcare Appointment System",
      student: "Rohan Joshi & Team",
      category: "Healthcare",
      description: "A web application that simplifies the process of booking medical appointments in rural areas.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Student Projects"
            subtitle="Real-world applications built by Stuap students that solve genuine problems"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {studentProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">By {project.student}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link to={`/projects/${project.id}`}>
                    <Button variant="outline" className="w-full">View Project</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Build Your Own Project?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join Stuap to work on real-world projects with industry mentors and develop skills that stand out on your resume.
            </p>
            <Link to="/join">
              <Button className="mr-4">Start Your Project Journey</Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline">Explore Project Courses</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
