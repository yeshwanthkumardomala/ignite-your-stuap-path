
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Book, Star, Search } from "lucide-react";

const Index = () => {
  // Placeholder data
  const featuredCourses = [
    {
      id: "1",
      title: "Digital Marketing Fundamentals",
      description: "Master the basics of digital marketing and social media strategy.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60",
      category: "Marketing",
      duration: "8 weeks",
      level: "Beginner" as const,
    },
    {
      id: "2",
      title: "Python Programming for Data Science",
      description: "Learn Python programming basics for data analysis and visualization.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=60",
      category: "Programming",
      duration: "10 weeks",
      level: "Intermediate" as const,
    },
    {
      id: "3",
      title: "Product Management Essentials",
      description: "Discover the fundamentals of product management and user experience.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=60",
      category: "Business",
      duration: "6 weeks",
      level: "Beginner" as const,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student, Delhi University",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Stuap helped me find my passion in web development. The mentorship and real-world projects transformed my college experience!",
    },
    {
      name: "Arjun Patel",
      role: "Engineering Student, IIT Bombay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      text: "The career guidance and industry connections I made through Stuap were instrumental in landing my dream internship.",
    },
    {
      name: "Neha Gupta",
      role: "High School Student, Mumbai",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Stuap's workshops helped me discover my strengths and interests before college. I now have a clear direction for my future!",
    },
  ];

  const features = [
    {
      icon: <Book className="h-10 w-10 text-primary" />,
      title: "Personalized Learning",
      description: "Tailored courses and resources based on your academic interests and career goals.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Real-World Projects",
      description: "Gain practical experience through industry-relevant projects and case studies.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Interactive Workshops",
      description: "Participate in hands-on workshops led by industry experts and academics.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Career Discovery",
      description: "Explore various career paths and find the right fit for your skills and passions.",
    },
  ];

  const upcomingEvents = [
    {
      id: "1",
      title: "Design Thinking Workshop",
      date: "June 15, 2023",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      title: "Python Bootcamp for Beginners",
      date: "July 5-7, 2023",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      title: "Career Guidance Seminar",
      date: "July 20, 2023",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/90 to-support/90 text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="heading-xl mb-4 leading-tight">
                Ignite Your Path to Academic and Career Success
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-lg">
                Empower yourself with personalized learning, real-world projects, and a supportive community of peers and mentors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/join">
                  <Button className="bg-accent text-rich-charcoal hover:bg-accent/90" size="lg">
                    Join Stuap Today
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                  alt="Students collaborating"
                  className="rounded-lg shadow-lg max-w-full md:max-w-md"
                />
                <div className="absolute -bottom-5 -left-5 bg-accent rounded-lg p-4 shadow-lg animate-pulse-subtle">
                  <p className="font-bold">1000+ Students</p>
                  <p className="text-sm">Already growing with Stuap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Stuap"
            subtitle="We combine academic excellence, career guidance, and practical experience to make you future-ready."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-all card-hover"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <SectionHeading
              title="Featured Learning Paths"
              subtitle="Discover courses and programs designed to build in-demand skills"
              className="md:mb-0"
            />
            <Link to="/courses" className="mt-4 md:mt-0">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Student Success Stories"
            subtitle="Hear from students who transformed their academic and career paths with Stuap"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <SectionHeading
              title="Upcoming Events & Workshops"
              subtitle="Join our in-person events and boost your skills"
              className="md:mb-0"
            />
            <Link to="/events" className="mt-4 md:mt-0">
              <Button variant="outline">View All Events</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <Link to={`/events/${event.id}`}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <CallToAction
            title="Ready to Ignite Your Path?"
            description="Join thousands of Indian students who are discovering their potential and preparing for future success with Stuap."
            primaryButtonText="Join Stuap for Free"
            primaryButtonLink="/join"
            secondaryButtonText="Explore Programs"
            secondaryButtonLink="/courses"
            background="support"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
