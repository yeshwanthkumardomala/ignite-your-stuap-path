
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
  // Sample job openings
  const jobOpenings = [
    {
      id: "1",
      title: "Course Content Developer",
      department: "Education",
      type: "Full-time",
      location: "Delhi / Remote",
      description: "Create engaging, industry-relevant course content for our technology and design learning paths."
    },
    {
      id: "2",
      title: "Student Experience Specialist",
      department: "Operations",
      type: "Full-time",
      location: "Mumbai",
      description: "Support students through their learning journey and ensure a positive experience with Stuap programs."
    },
    {
      id: "3",
      title: "Marketing Manager",
      department: "Marketing",
      type: "Full-time",
      location: "Bangalore",
      description: "Lead our digital marketing efforts to reach and engage students across India."
    },
    {
      id: "4",
      title: "Career Counselor",
      department: "Student Success",
      type: "Part-time",
      location: "Hyderabad / Remote",
      description: "Provide guidance to students on career paths, skill development, and job opportunities."
    },
    {
      id: "5",
      title: "Web Developer",
      department: "Technology",
      type: "Full-time",
      location: "Remote",
      description: "Help build and maintain our learning platform and internal tools using modern web technologies."
    },
    {
      id: "6",
      title: "Industry Relations Manager",
      department: "Partnerships",
      type: "Full-time",
      location: "Delhi",
      description: "Build and maintain relationships with corporate partners for student opportunities and collaboration."
    },
  ];

  // Company values
  const companyValues = [
    {
      title: "Student First",
      description: "Every decision we make is guided by what's best for our students' growth and success."
    },
    {
      title: "Real-World Relevance",
      description: "We prioritize practical, applicable skills and experiences that prepare students for the future."
    },
    {
      title: "Continuous Learning",
      description: "We believe in the power of lifelong learning and foster a culture of growth and development."
    },
    {
      title: "Inclusive Community",
      description: "We create a welcoming environment where diverse perspectives are valued and celebrated."
    },
    {
      title: "Innovation & Agility",
      description: "We embrace change, experiment with new approaches, and adapt quickly to evolving needs."
    },
    {
      title: "Integrity & Transparency",
      description: "We operate with honesty and openness in all our interactions and decisions."
    }
  ];

  // Employee benefits
  const employeeBenefits = [
    "Competitive salary and performance bonuses",
    "Health insurance coverage",
    "Flexible work arrangements",
    "Professional development budget",
    "Regular team retreats and activities",
    "Wellness programs and initiatives",
    "Opportunity to impact thousands of students"
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Careers at Stuap"
            subtitle="Join our mission to empower India's students with future-ready skills and opportunities"
            centered
          />
          
          <div className="mb-16 mt-8">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
              alt="Stuap team" 
              className="w-full h-80 object-cover rounded-xl mb-8"
            />
            
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-gray-600 mb-6">
                At Stuap, we're passionate about creating meaningful impact in the lives of students across India. We're building a platform that bridges the gap between academic education and real-world skills, and we need talented individuals who share our vision to join our team.
              </p>
              <p className="text-gray-600 mb-6">
                Working at Stuap means being part of a dynamic, mission-driven organization that values innovation, collaboration, and personal growth. Our team comes from diverse backgrounds but shares a common goal: to empower students with the knowledge, skills, and opportunities they need to thrive in their careers and lives.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
            {jobOpenings.length > 0 ? (
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="md:flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
                          <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{job.type}</span>
                          <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{job.location}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Link to={`/careers/${job.id}`}>
                          <Button>View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <p className="text-gray-600">We don't have any open positions at the moment, but we're always interested in hearing from talented individuals.</p>
                <p className="mt-2 text-gray-600">Send your resume to <a href="mailto:careers@stuap.com" className="text-primary hover:underline">careers@stuap.com</a></p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold mb-4">Benefits & Perks</h2>
                <ul className="space-y-2">
                  {employeeBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=600&q=80" 
                  alt="Stuap team culture" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who can contribute to our mission. Send your resume and a note about how you'd like to help Stuap grow!
            </p>
            <a href="mailto:careers@stuap.com">
              <Button>Contact Our Talent Team</Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
