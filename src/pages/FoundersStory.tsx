
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FoundersStory = () => {
  return (
    <Layout>
      <div className="pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Our Founder's Story"
              subtitle="The journey behind Stuap and the vision that drives us forward"
            />
            
            <div className="mb-12">
              <div className="rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                  alt="Founder of Stuap" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  In 2020, during the peak of the pandemic, our founder Ravi Mehta noticed a critical gap in India's education system. While students were technically learning subjects, they weren't developing the practical skills and mindset needed for today's rapidly evolving career landscape.
                </p>
                
                <p className="text-lg mb-4">
                  Having worked with some of India's leading tech companies and educational institutions, Ravi saw firsthand how students struggled to transition from academic learning to practical application. The vision for Stuap was born from this realization - a community that bridges academics with real-world skills.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">From Idea to Impact</h3>
                
                <p className="text-lg mb-4">
                  Stuap began as small weekend workshops in Delhi, bringing together 20-30 students to work on real projects with industry mentors. The response was overwhelming. Students weren't just learning - they were discovering their passions and potential.
                </p>
                
                <p className="text-lg mb-4">
                  "What started as a small initiative to help a few students quickly grew into something much bigger," recalls Ravi. "We realized we weren't just teaching skills - we were igniting paths that students didn't even know existed for them."
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Our Mission Today</h3>
                
                <p className="text-lg mb-8">
                  Today, Stuap has evolved into a comprehensive platform that combines online learning with offline experiences, personalized mentorship, and a vibrant community. Our mission remains clear: to make every Indian student future-ready through accessible, practical, and inspiring education.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-16">
              <Link to="/team">
                <Button>Meet Our Team</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline">Learn More About Stuap</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FoundersStory;
