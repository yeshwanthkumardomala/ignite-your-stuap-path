
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Community = () => {
  // Community platforms
  const platforms = [
    {
      name: "Discord",
      description: "Join our active Discord community for daily discussions, resource sharing, and peer support.",
      members: "5,200+",
      image: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png",
      buttonText: "Join Discord Server",
      buttonLink: "/discord",
      color: "bg-[#5865F2]"
    },
    {
      name: "WhatsApp Groups",
      description: "Connect with fellow students in your city through our location-based WhatsApp groups.",
      members: "3,800+",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png",
      buttonText: "Join WhatsApp Community",
      buttonLink: "/whatsapp",
      color: "bg-[#25D366]"
    },
    {
      name: "LinkedIn Group",
      description: "Network with students and professionals in our LinkedIn community for career opportunities.",
      members: "2,400+",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png",
      buttonText: "Join LinkedIn Group",
      buttonLink: "/linkedin",
      color: "bg-[#0A66C2]"
    }
  ];

  // Community features
  const features = [
    {
      title: "Peer Learning Circles",
      description: "Join small groups of students with similar interests for collaborative learning and project work.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Expert AMAs",
      description: "Participate in regular Ask Me Anything sessions with industry professionals and educators.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Project Collaborations",
      description: "Find teammates for projects and hackathons, or join existing student-led initiatives.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Mentorship Matching",
      description: "Connect with senior students and alumni who can provide guidance on your academic and career journey.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Join Our Student Community"
            subtitle="Connect, collaborate, and grow with fellow students and mentors across India"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className={`${platform.color} text-white p-6 text-center`}>
                  <img 
                    src={platform.image} 
                    alt={platform.name}
                    className="h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold mb-1">{platform.name}</h3>
                  <p className="opacity-90">{platform.members} members</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  <Link to={platform.buttonLink}>
                    <Button className="w-full">{platform.buttonText}</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">What Our Community Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="md:flex h-full">
                    <div className="md:w-2/5">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80" 
                  alt="Community Events"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
                <p className="mb-6">
                  Join our vibrant community of students, mentors, and industry experts. Share knowledge, find collaborators, and accelerate your growth.
                </p>
                <div className="space-x-4">
                  <Link to="/join">
                    <Button className="bg-white text-primary hover:bg-gray-100" size="lg">
                      Join Community
                    </Button>
                  </Link>
                  <Link to="/community-guidelines">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                      Community Guidelines
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
