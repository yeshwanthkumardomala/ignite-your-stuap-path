
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Student-First Approach",
      description:
        "Everything we do is centered around empowering students with the knowledge, skills, and confidence they need to succeed.",
    },
    {
      title: "Practical Learning",
      description:
        "We believe in learning by doing, with real-world projects that build valuable skills and experience.",
    },
    {
      title: "Inclusive Community",
      description:
        "We're committed to creating a supportive environment where every student feels welcome and valued.",
    },
    {
      title: "Innovation & Adaptation",
      description:
        "We constantly evolve our programs to reflect emerging trends and prepare students for future opportunities.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Foundation",
      description: "Stuap was founded with a mission to bridge the gap between academic education and real-world skills.",
    },
    {
      year: "2020",
      title: "Online Expansion",
      description: "Launched our first digital courses and online mentorship programs, reaching students across India.",
    },
    {
      year: "2021",
      title: "Community Growth",
      description: "Built a thriving community of 500+ students and launched our first series of offline workshops.",
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description: "Established partnerships with leading companies to create internship opportunities for our students.",
    },
    {
      year: "2023",
      title: "Course Innovation",
      description: "Developed comprehensive learning paths aligned with emerging career opportunities.",
    },
  ];

  const team = [
    {
      name: "Raj Patel",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      bio: "Former Google engineer with a passion for education and mentorship.",
    },
    {
      name: "Ananya Sharma",
      role: "Head of Curriculum",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      bio: "Education specialist with 8+ years of experience in course development.",
    },
    {
      name: "Vikram Singh",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      bio: "Dedicated to creating meaningful connections and fostering student growth.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">About Stuap</h1>
            <p className="text-xl opacity-90 mb-6">
              We're on a mission to transform student education in India by
              bridging the gap between academic learning and real-world skills.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <SectionHeading
                title="Our Story"
                subtitle="How Stuap came to be and what drives us forward"
              />
              <div className="space-y-4 text-gray-700">
                <p>
                  Stuap was born from a simple observation: despite India's
                  renowned educational institutions, many students graduate
                  without the practical skills and guidance needed to thrive in
                  today's rapidly changing world.
                </p>
                <p>
                  Founded in 2019 by Raj Patel, a former Google engineer and
                  educator, Stuap began as a series of weekend workshops helping
                  college students develop real-world technical skills. These
                  sessions quickly gained popularity, revealing an intense demand
                  for education that bridges classroom learning with professional
                  preparation.
                </p>
                <p>
                  Today, Stuap has evolved into a comprehensive platform that
                  combines online learning, in-person workshops, mentorship, and
                  community support. We've helped thousands of students discover
                  their strengths, build marketable skills, and connect with
                  opportunities that launch meaningful careers.
                </p>
                <p>
                  Our approach remains student-first, focusing on personalized
                  learning journeys that adapt to each individual's goals and
                  potential.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"
                  alt="Students participating in a Stuap workshop"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-2xl text-primary mb-1">1000+</h3>
                  <p className="text-gray-600">Students Impacted</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-2xl text-primary mb-1">50+</h3>
                  <p className="text-gray-600">Workshops Conducted</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-2xl text-primary mb-1">15+</h3>
                  <p className="text-gray-600">Industry Partners</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-2xl text-primary mb-1">20+</h3>
                  <p className="text-gray-600">Expert Mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="What we believe and where we're headed"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="heading-md text-primary mb-4">Mission</h3>
              <p className="text-gray-700">
                To empower Indian students with the knowledge, skills, and
                confidence they need to excel academically and professionally in
                an ever-changing global landscape.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="heading-md text-support mb-4">Vision</h3>
              <p className="text-gray-700">
                A future where every Indian student has access to high-quality,
                practical education that bridges the gap between academics and
                industry, unlocking their full potential and creating pathways to
                meaningful careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Journey So Far"
            subtitle="Key milestones in Stuap's growth story"
            centered
          />

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row mb-8 last:mb-0"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-primary text-white rounded-lg p-3 inline-block">
                    {milestone.year}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet The Team"
            subtitle="The passionate individuals behind Stuap"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/team" className="btn-outline inline-block">
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <CallToAction
            title="Be Part of Our Story"
            description="Join Stuap today and take the first step towards a brighter academic and professional future."
            primaryButtonText="Join Our Community"
            primaryButtonLink="/join"
            secondaryButtonText="Explore Programs"
            secondaryButtonLink="/courses"
            background="accent"
          />
        </div>
      </section>
    </Layout>
  );
};

export default About;
