
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Mentorship = () => {
  // Sample mentor data
  const mentors = [
    {
      id: "1",
      name: "Rajan Sharma",
      role: "Senior Software Engineer at Google",
      specialty: "Web Development & AI",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&h=500&q=80",
      rating: 4.9,
      availability: "Available for scheduling"
    },
    {
      id: "2",
      name: "Priya Patel",
      role: "Marketing Director at Amazon",
      specialty: "Digital Marketing & Brand Strategy",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&h=500&q=80",
      rating: 4.8,
      availability: "Limited spots available"
    },
    {
      id: "3",
      name: "Vikram Singh",
      role: "Product Manager at Flipkart",
      specialty: "Product Development & UX",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=500&q=80",
      rating: 4.7,
      availability: "Available for scheduling"
    },
    {
      id: "4",
      name: "Neha Gupta",
      role: "Data Scientist at Microsoft",
      specialty: "AI & Machine Learning",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&h=500&q=80",
      rating: 4.9,
      availability: "Limited spots available"
    },
    {
      id: "5",
      name: "Rajesh Kumar",
      role: "Startup Founder & Angel Investor",
      specialty: "Entrepreneurship & Business Development",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&h=500&q=80",
      rating: 4.8,
      availability: "Available for scheduling"
    },
    {
      id: "6",
      name: "Ananya Desai",
      role: "UI/UX Designer at Adobe",
      specialty: "Design Thinking & Creative Process",
      experience: "9+ years",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&h=500&q=80",
      rating: 4.9,
      availability: "Available for scheduling"
    },
  ];

  // Mentorship program features
  const mentorshipFeatures = [
    {
      title: "One-on-One Guidance",
      description: "Personal mentoring sessions tailored to your specific needs and goals"
    },
    {
      title: "Career Direction",
      description: "Get insights and advice on career paths, specializations, and industry trends"
    },
    {
      title: "Project Feedback",
      description: "Receive professional feedback and guidance on your academic or personal projects"
    },
    {
      title: "Resume & Portfolio Review",
      description: "Have your professional materials reviewed by industry experts"
    },
    {
      title: "Industry Insights",
      description: "Learn about real-world applications and expectations in your field of interest"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with professionals and peers in your target industry"
    },
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Mentorship & Career Guidance"
            subtitle="Connect with industry experts who can help guide your academic and career journey"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-12">
            {mentorshipFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mb-8">Meet Our Mentors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="p-6">
                  <div className="flex items-center">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-xl mb-1">{mentor.name}</h3>
                      <p className="text-primary text-sm">{mentor.role}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p><span className="font-medium">Specialty:</span> {mentor.specialty}</p>
                    <p><span className="font-medium">Experience:</span> {mentor.experience}</p>
                    <div className="flex items-center mt-1">
                      <span className="font-medium">Rating:</span>
                      <div className="flex items-center ml-1">
                        <span>{mentor.rating}</span>
                        <div className="text-yellow-400 ml-1">★★★★★</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-green-600">{mentor.availability}</span>
                    <Link to={`/mentors/${mentor.id}`}>
                      <Button>Book Session</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Need help finding the right mentor?</h3>
                <p className="text-gray-600 mb-6">
                  Take our quick assessment and we'll match you with mentors who can best help you achieve your goals.
                </p>
                <Link to="/mentor-matching">
                  <Button>Find Your Perfect Mentor</Button>
                </Link>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80" 
                  alt="Mentor matching" 
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

export default Mentorship;
