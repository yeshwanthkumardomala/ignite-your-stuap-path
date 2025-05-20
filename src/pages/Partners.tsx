
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Partners = () => {
  // Sample partner categories
  const partnerCategories = [
    {
      type: "Corporate Partners",
      partners: [
        {
          name: "TechVision",
          logo: "https://placehold.co/200x80/eee/999?text=TechVision",
          description: "Leading technology company providing internship opportunities and mentorship for Stuap students."
        },
        {
          name: "GlobalFinance",
          logo: "https://placehold.co/200x80/eee/999?text=GlobalFinance",
          description: "International financial institution supporting financial literacy programs and workshops."
        },
        {
          name: "CreativeStudio",
          logo: "https://placehold.co/200x80/eee/999?text=CreativeStudio",
          description: "Design agency offering project opportunities and portfolio reviews for design students."
        },
        {
          name: "DataInsights",
          logo: "https://placehold.co/200x80/eee/999?text=DataInsights",
          description: "Analytics company providing resources for data science learning paths and projects."
        },
      ]
    },
    {
      type: "Educational Institutions",
      partners: [
        {
          name: "Delhi University",
          logo: "https://placehold.co/200x80/eee/999?text=Delhi+University",
          description: "Collaborative programs for student skill development and career preparation."
        },
        {
          name: "IIT Mumbai",
          logo: "https://placehold.co/200x80/eee/999?text=IIT+Mumbai",
          description: "Joint research initiatives and technical workshop collaborations."
        },
        {
          name: "Bangalore Institute of Design",
          logo: "https://placehold.co/200x80/eee/999?text=BID",
          description: "Partnership for creative course development and design thinking workshops."
        },
      ]
    },
    {
      type: "Nonprofit Organizations",
      partners: [
        {
          name: "EduAccess",
          logo: "https://placehold.co/200x80/eee/999?text=EduAccess",
          description: "Working together to provide educational opportunities for underserved communities."
        },
        {
          name: "SkillBridge",
          logo: "https://placehold.co/200x80/eee/999?text=SkillBridge",
          description: "Partnering to bridge the gap between education and employment through skills training."
        },
        {
          name: "Future Leaders Foundation",
          logo: "https://placehold.co/200x80/eee/999?text=FLF",
          description: "Collaborative leadership development programs for promising students."
        },
      ]
    }
  ];

  // Partnership benefits
  const partnershipBenefits = [
    {
      title: "Access to Talent",
      description: "Connect with motivated students and recent graduates with in-demand skills."
    },
    {
      title: "Brand Visibility",
      description: "Showcase your organization to thousands of students across India."
    },
    {
      title: "Project Collaboration",
      description: "Engage students in real-world challenges facing your organization."
    },
    {
      title: "Corporate Social Responsibility",
      description: "Support educational initiatives and contribute to India's skill development."
    },
    {
      title: "Recruitment Pipeline",
      description: "Build relationships with potential future employees and interns."
    },
    {
      title: "Knowledge Exchange",
      description: "Share industry expertise and gain fresh perspectives from students."
    },
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Partners"
            subtitle="Collaborating with organizations to bridge the gap between education and industry"
            centered
          />
          
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{category.type}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-16 mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2">{partner.name}</h3>
                    <p className="text-gray-600 text-sm">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
                <p className="text-gray-600 mb-6">
                  Join our growing network of organizations committed to empowering the next generation of Indian talent. Partner with Stuap to make a meaningful impact on student development and gain access to motivated, skilled individuals.
                </p>
                <Link to="/partner-with-us">
                  <Button>Partner With Stuap</Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {partnershipBenefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h3 className="font-bold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Partner Testimonials</h2>
            <div className="max-w-3xl mx-auto mb-8">
              <blockquote className="text-xl italic text-gray-700">
                "Partnering with Stuap has allowed us to connect with talented students who bring fresh perspectives to our projects. The quality of students and the support from the Stuap team have made this a valuable collaboration for our organization."
              </blockquote>
              <p className="mt-4 font-medium">
                — Rajiv Mehta, Head of Talent Acquisition at TechVision
              </p>
            </div>
            <Link to="/partner-testimonials">
              <Button variant="outline">Read More Testimonials</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
