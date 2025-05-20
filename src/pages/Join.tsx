
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Join = () => {
  // Sample membership tiers
  const membershipTiers = [
    {
      name: "Explorer",
      price: "Free",
      description: "Get started with basic access to Stuap resources",
      features: [
        "Access to community forums",
        "5 free resources per month",
        "Basic learning path",
        "Public workshops",
      ],
      recommended: false,
      buttonText: "Sign Up for Free",
      buttonVariant: "outline" as const,
    },
    {
      name: "Learner",
      price: "₹499/month",
      description: "Perfect for students serious about skill development",
      features: [
        "All Explorer features",
        "Unlimited resources",
        "10 learning paths",
        "Priority workshop registration",
        "Monthly mentorship session",
        "Course certificates",
      ],
      recommended: true,
      buttonText: "Join as a Learner",
      buttonVariant: "default" as const,
    },
    {
      name: "Achiever",
      price: "₹999/month",
      description: "Advanced support for career-focused students",
      features: [
        "All Learner features",
        "Premium learning paths",
        "Weekly mentorship session",
        "Career counseling",
        "Project guidance",
        "Industry connections",
        "Resume support",
      ],
      recommended: false,
      buttonText: "Join as an Achiever",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <Layout hideFooter>
      <div className="min-h-screen pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="heading-xl mb-4">Join Stuap and Ignite Your Path</h1>
            <p className="text-xl text-gray-600">
              Choose the membership that's right for you and start your journey towards academic and career success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border ${
                  tier.recommended ? "border-primary" : "border-gray-200"
                }`}
              >
                {tier.recommended && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-6 ${tier.recommended ? "" : "pt-8"}`}>
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    {tier.price !== "Free" && <span className="text-gray-500 text-sm"> / month</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="mb-8">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-center mb-3">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant={tier.buttonVariant}
                    className={`w-full ${tier.recommended ? "bg-primary hover:bg-primary/90" : ""}`}
                  >
                    {tier.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
                <p className="text-gray-600 mb-4">
                  Have questions about our membership tiers or enrollment process?
                </p>
                <Link to="/faq">
                  <Button variant="outline">View All FAQs</Button>
                </Link>
              </div>
              <div className="md:w-1/3 md:text-right">
                <p className="text-gray-600 mb-2">Still have questions?</p>
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  Contact our Student Support Team
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-support text-white py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your academic and career journey?</h2>
            <Button className="bg-white text-support hover:bg-gray-100" size="lg">
              Join Stuap Today
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Join;
