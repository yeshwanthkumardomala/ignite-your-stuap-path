
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LearningPaths = () => {
  // Sample learning paths data
  const learningPaths = [
    {
      id: "tech",
      title: "Technology & Development",
      description: "Master coding, software development, and tech skills for the digital economy",
      courses: 12,
      duration: "4-6 months",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      popular: true
    },
    {
      id: "business",
      title: "Business & Entrepreneurship",
      description: "Develop business acumen, leadership skills, and entrepreneurial thinking",
      courses: 10,
      duration: "3-5 months",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      popular: false
    },
    {
      id: "design",
      title: "Design & Creativity",
      description: "Explore UI/UX, graphic design, and creative problem-solving methodologies",
      courses: 8,
      duration: "3-4 months",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
      popular: true
    },
    {
      id: "data",
      title: "Data Science & Analytics",
      description: "Learn data analysis, visualization, and machine learning fundamentals",
      courses: 9,
      duration: "4-6 months",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      popular: true
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "Master social media, content creation, SEO, and digital marketing strategies",
      courses: 7,
      duration: "2-3 months",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=600&q=80",
      popular: false
    },
    {
      id: "personal",
      title: "Personal Development",
      description: "Build soft skills, communication abilities, and professional competencies",
      courses: 6,
      duration: "2-3 months",
      image: "https://images.unsplash.com/photo-1507497994-3825d8d1fe9e?auto=format&fit=crop&w=600&q=80",
      popular: false
    },
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Learning Paths"
            subtitle="Structured programs designed to build comprehensive skills in specific domains"
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
            <Button variant="outline" className="rounded-full">All Paths</Button>
            <Button variant="outline" className="rounded-full">Technology</Button>
            <Button variant="outline" className="rounded-full">Business</Button>
            <Button variant="outline" className="rounded-full">Creative</Button>
            <Button variant="outline" className="rounded-full">Data</Button>
            <Button variant="outline" className="rounded-full">Marketing</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPaths.map((path) => (
              <div key={path.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                {path.popular && (
                  <div className="bg-accent text-rich-charcoal px-4 py-1 text-center text-sm font-medium">
                    Popular Choice
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={path.image} 
                    alt={path.title}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{path.courses} Courses</span>
                    <span>{path.duration}</span>
                  </div>
                  <Link to={`/learning-paths/${path.id}`}>
                    <Button className="w-full">Explore Path</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Not Sure Which Path to Choose?</h3>
                <p className="text-gray-600 mb-4">
                  Take our career assessment to discover which learning path best aligns with your interests, strengths, and career goals.
                </p>
                <Link to="/career-assessment">
                  <Button>Take Career Assessment</Button>
                </Link>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80" 
                  alt="Career Assessment" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LearningPaths;
