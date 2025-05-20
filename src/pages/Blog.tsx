
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  // Sample blog posts
  const featuredPosts = [
    {
      id: "1",
      title: "How to Choose the Right Career Path: A Guide for Students",
      excerpt: "Navigating the complex world of career choices can be overwhelming. Here's a framework to help you decide.",
      category: "Career Guidance",
      author: "Priya Sharma",
      authorRole: "Career Counselor",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "2",
      title: "The Power of Project-Based Learning: Why Experience Matters",
      excerpt: "Discover why hands-on projects are crucial for skill development and how to get started with your own projects.",
      category: "Learning Strategies",
      author: "Vikram Singh",
      authorRole: "Education Specialist",
      date: "April 28, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const recentPosts = [
    {
      id: "3",
      title: "5 In-Demand Tech Skills Every Student Should Learn in 2023",
      excerpt: "The technology landscape is constantly evolving. Here are the skills that employers are looking for right now.",
      category: "Technology",
      author: "Aditya Kumar",
      date: "May 10, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "4",
      title: "Balancing Academics and Skill Development: A Student's Guide",
      excerpt: "Finding the right balance between traditional academics and practical skill-building can be challenging. Here's how to manage both effectively.",
      category: "Student Life",
      author: "Neha Gupta",
      date: "May 5, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "5",
      title: "The Rise of Micro-Credentials: Are They Worth Your Time?",
      excerpt: "With the growing popularity of micro-credentials and certificates, are they actually valuable for your career prospects?",
      category: "Education Trends",
      author: "Rajesh Kumar",
      date: "April 22, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "6",
      title: "How to Build a Portfolio That Gets You Noticed",
      excerpt: "Whether you're in design, development, or any creative field, a strong portfolio is essential. Here's how to create one that stands out.",
      category: "Career Development",
      author: "Ananya Desai",
      date: "April 15, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Blog categories
  const categories = [
    "Career Guidance",
    "Learning Strategies",
    "Technology",
    "Student Life",
    "Education Trends",
    "Career Development",
    "Skill Building",
    "Industry Insights",
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Stuap Blog"
            subtitle="Insights, guides, and inspiration for your academic and career journey"
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
            <Button variant="outline" className="rounded-full">All Posts</Button>
            {categories.slice(0, 5).map((category) => (
              <Button key={category} variant="outline" className="rounded-full">
                {category}
              </Button>
            ))}
            <Button variant="outline" className="rounded-full">More</Button>
          </div>
          
          {/* Featured Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="md:flex h-full">
                  <div className="md:w-2/5">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.authorRole}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {post.date} · {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Recent Posts */}
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{post.author}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Load More Articles</Button>
          </div>
          
          {/* Newsletter */}
          <div className="bg-support/10 rounded-xl p-8 mt-16">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Get the latest articles, resources, and insights delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 border border-gray-300 rounded-lg flex-grow"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
