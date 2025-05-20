
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const Team = () => {
  // Sample team data
  const teamMembers = [
    {
      name: "Ravi Mehta",
      role: "Founder & CEO",
      bio: "Former EdTech executive with passion for transforming education in India",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&h=500&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Head of Curriculum",
      bio: "Education specialist with 10+ years experience developing learning programs",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&h=500&q=80"
    },
    {
      name: "Aditya Kumar",
      role: "Chief Technology Officer",
      bio: "Tech leader focused on creating accessible digital learning experiences",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&h=500&q=80"
    },
    {
      name: "Neha Gupta",
      role: "Student Experience Director",
      bio: "Dedicated to creating memorable learning journeys for all students",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&h=500&q=80"
    },
    {
      name: "Vikram Singh",
      role: "Industry Relations Lead",
      bio: "Building bridges between education and industry for meaningful opportunities",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&h=500&q=80"
    },
    {
      name: "Anjali Patel",
      role: "Community Manager",
      bio: "Fostering connections and growth within the Stuap student community",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=500&h=500&q=80"
    }
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate educators, mentors and innovators behind Stuap"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mb-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                Passionate about education and empowering students? We're always looking for talented individuals to join our mission.
              </p>
              <Link to="/careers" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
