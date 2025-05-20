
import React, { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");

  // Course categories
  const categories = [
    "all",
    "programming",
    "business",
    "design",
    "marketing",
    "data science",
    "personal development",
  ];

  // Course levels
  const levels = ["all", "Beginner", "Intermediate", "Advanced"];

  // Sample course data
  const allCourses = [
    {
      id: "1",
      title: "Digital Marketing Fundamentals",
      description: "Master the basics of digital marketing and social media strategy for brand growth and engagement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60",
      category: "marketing",
      duration: "8 weeks",
      level: "Beginner",
    },
    {
      id: "2",
      title: "Python Programming for Data Science",
      description: "Learn Python programming basics and libraries commonly used for data analysis and visualization.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=60",
      category: "programming",
      duration: "10 weeks",
      level: "Intermediate",
    },
    {
      id: "3",
      title: "Product Management Essentials",
      description: "Discover the fundamentals of product management and user experience design.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=60",
      category: "business",
      duration: "6 weeks",
      level: "Beginner",
    },
    {
      id: "4",
      title: "UI/UX Design Principles",
      description: "Master the fundamentals of user interface and experience design for digital products.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=60",
      category: "design",
      duration: "8 weeks",
      level: "Beginner",
    },
    {
      id: "5",
      title: "Advanced Data Analysis with R",
      description: "Take your data analysis skills to the next level with R programming and statistical methods.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60",
      category: "data science",
      duration: "12 weeks",
      level: "Advanced",
    },
    {
      id: "6",
      title: "Leadership & Team Management",
      description: "Develop essential leadership and team management skills to excel in any organization.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60",
      category: "personal development",
      duration: "6 weeks",
      level: "Intermediate",
    },
    {
      id: "7",
      title: "Web Development Bootcamp",
      description: "Comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60",
      category: "programming",
      duration: "14 weeks",
      level: "Beginner",
    },
    {
      id: "8",
      title: "Social Media Marketing Strategy",
      description: "Learn to create effective social media strategies for business growth and brand awareness.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=500&q=60",
      category: "marketing",
      duration: "7 weeks",
      level: "Intermediate",
    },
    {
      id: "9",
      title: "Machine Learning Fundamentals",
      description: "Introduction to machine learning algorithms and their applications in real-world scenarios.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
      category: "data science",
      duration: "12 weeks",
      level: "Intermediate",
    },
  ];

  // Filter courses based on selected category and level
  const filteredCourses = allCourses.filter((course) => {
    const categoryMatch = activeCategory === "all" || course.category === activeCategory;
    const levelMatch = activeLevel === "all" || course.level === activeLevel;
    return categoryMatch && levelMatch;
  });

  // Learning paths data
  const learningPaths = [
    {
      title: "Data Science Professional",
      courses: 4,
      duration: "6 months",
      description: "Master data analysis, visualization, and machine learning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Full-Stack Web Developer",
      courses: 5,
      duration: "8 months",
      description: "Become proficient in both front-end and back-end development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Digital Marketing Specialist",
      courses: 4,
      duration: "5 months",
      description: "Learn comprehensive digital marketing strategies and implementation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Learning Paths & Courses</h1>
            <p className="text-xl opacity-90 mb-8">
              Discover carefully designed courses and learning paths that will help you develop in-demand skills and advance your career.
            </p>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg flex">
              <input
                type="text"
                placeholder="Search for courses..."
                className="flex-grow px-4 py-3 focus:outline-none text-rich-charcoal"
              />
              <Button className="rounded-none">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Learning Paths"
            subtitle="Comprehensive programs combining multiple courses to build complete skill sets"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{path.title}</h3>
                  <div className="flex text-gray-600 mb-3">
                    <div className="mr-4">
                      <span className="font-medium">{path.courses}</span> Courses
                    </div>
                    <div>
                      <span className="font-medium">{path.duration}</span> Duration
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{path.description}</p>
                  <Button className="w-full">View Learning Path</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Explore Individual Courses"
            subtitle="Develop specific skills with our focused courses"
            centered
          />

          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <h3 className="font-medium mb-2">Filter by Category:</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm ${
                        activeCategory === category
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-medium mb-2">Filter by Level:</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      className={`px-4 py-2 rounded-full text-sm ${
                        activeLevel === level
                          ? "bg-support text-white"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                      onClick={() => setActiveLevel(level)}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                category={course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                duration={course.duration}
                level={course.level as "Beginner" | "Intermediate" | "Advanced"}
              />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">No courses match your selected filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setActiveCategory("all");
                  setActiveLevel("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <CallToAction
            title="Not Sure Where to Start?"
            description="Schedule a free consultation with our academic advisors to find the perfect learning path for your goals."
            primaryButtonText="Get Personalized Guidance"
            primaryButtonLink="/contact"
            secondaryButtonText="Join Stuap"
            secondaryButtonLink="/join"
            background="primary"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
