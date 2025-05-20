
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  // FAQ categories and questions
  const faqCategories = [
    {
      name: "General Questions",
      questions: [
        {
          question: "What is Stuap?",
          answer: "Stuap is an education platform that empowers Indian students with academic support, career discovery, real-world projects, and offline workshops. We combine online learning with in-person experiences to make students future-ready."
        },
        {
          question: "Who can join Stuap?",
          answer: "Stuap is designed for high school students, college students, and recent graduates in India who are looking to supplement their academic education with practical skills, career guidance, and real-world experience."
        },
        {
          question: "Is Stuap a coaching institute?",
          answer: "No, Stuap is not a traditional coaching institute. We focus on skills development, career guidance, and practical experience rather than exam preparation. Our goal is to prepare students for real-world success beyond academic achievements."
        },
        {
          question: "Where is Stuap located?",
          answer: "Stuap has physical learning centers in major cities including Delhi, Mumbai, Bangalore, and Hyderabad. However, many of our resources and programs are available online, allowing students from anywhere in India to benefit from our platform."
        }
      ]
    },
    {
      name: "Courses & Learning",
      questions: [
        {
          question: "What types of courses does Stuap offer?",
          answer: "Stuap offers courses across various domains including technology, business, design, data science, marketing, and personal development. Our courses are structured as learning paths that build comprehensive skills in specific areas."
        },
        {
          question: "How are Stuap's courses different from online platforms like Coursera?",
          answer: "While traditional online platforms focus on content delivery, Stuap combines online learning with in-person workshops, mentor guidance, peer collaboration, and real-world projects. This blended approach ensures practical skill development and better learning outcomes."
        },
        {
          question: "Do I get a certificate after completing a course?",
          answer: "Yes, students receive a certificate of completion for each course and learning path. These certificates highlight the practical skills and projects completed, making them valuable for your resume and portfolio."
        },
        {
          question: "What if I can't attend an in-person workshop?",
          answer: "While we encourage participation in our in-person workshops for the best experience, we understand that not everyone can attend. Many workshops are recorded and made available online, and we offer alternative project assignments for remote students."
        }
      ]
    },
    {
      name: "Membership & Pricing",
      questions: [
        {
          question: "What are the different membership tiers?",
          answer: "Stuap offers three membership tiers: Explorer (free), Learner (₹499/month), and Achiever (₹999/month). Each tier provides different levels of access to courses, resources, mentorship, and career support."
        },
        {
          question: "Can I cancel my membership anytime?",
          answer: "Yes, you can cancel your paid membership at any time. Your access will continue until the end of the current billing period, after which you'll revert to the free Explorer tier."
        },
        {
          question: "Are there any discounts for long-term commitments?",
          answer: "Yes, we offer discounts for students who commit to 6-month or 12-month memberships. Additionally, we have special scholarship programs for students from underserved communities."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards, UPI, net banking, and popular mobile payment platforms like PhonePe and Paytm."
        }
      ]
    },
    {
      name: "Projects & Mentorship",
      questions: [
        {
          question: "How does the mentorship program work?",
          answer: "Our mentorship program pairs students with industry professionals who provide guidance, feedback, and support. Mentorship sessions can be booked through our platform based on the mentor's availability and your membership tier."
        },
        {
          question: "Can I work on my own project ideas?",
          answer: "Absolutely! We encourage students to pursue their own project ideas. Our mentors can help you refine your concept and provide guidance throughout the development process."
        },
        {
          question: "Will Stuap help me find internships or jobs?",
          answer: "Yes, Stuap has partnerships with companies across various industries. We regularly share internship and job opportunities with our community, and our career guidance services help prepare you for the application and interview process."
        },
        {
          question: "How are project teams formed?",
          answer: "Project teams are typically formed based on shared interests and complementary skills. You can either join an existing project team or form your own team with other Stuap members."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about Stuap programs, membership, and learning experience"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-12 mb-16">
            {faqCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer you were looking for, feel free to reach out to our support team. We're here to help!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button>Contact Support</Button>
                </Link>
                <a href="mailto:support@stuap.com">
                  <Button variant="outline">Email Us</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
