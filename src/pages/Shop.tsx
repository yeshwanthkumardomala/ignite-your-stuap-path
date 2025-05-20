
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const Shop = () => {
  // Sample product categories
  const productCategories = [
    "All Products",
    "Study Kits",
    "Digital Tools",
    "Merchandise",
    "Books & Resources",
    "Tech Accessories"
  ];
  
  // Sample products data
  const products = [
    {
      id: "1",
      name: "Web Development Starter Kit",
      category: "Study Kits",
      price: 1499,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80",
      description: "Everything you need to start your web development journey, including reference guides, code cheatsheets, and project templates."
    },
    {
      id: "2",
      name: "Stuap Logo Hoodie",
      category: "Merchandise",
      price: 899,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80",
      description: "Stay cozy while representing the Stuap community with our premium quality cotton hoodie."
    },
    {
      id: "3",
      name: "Data Science Project Toolkit",
      category: "Digital Tools",
      price: 1199,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
      description: "A collection of premium data analysis templates, visualization tools, and machine learning resources."
    },
    {
      id: "4",
      name: "Career Roadmap Planner",
      category: "Books & Resources",
      price: 599,
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80",
      description: "A comprehensive guide and planner to help you map out your career goals, skills, and action plans."
    },
    {
      id: "5",
      name: "Stuap Water Bottle",
      category: "Merchandise",
      price: 399,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80",
      description: "Stay hydrated during your learning sessions with our eco-friendly, insulated water bottle."
    },
    {
      id: "6",
      name: "Design Thinking Toolkit",
      category: "Study Kits",
      price: 1299,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=500&q=80",
      description: "Essential templates, case studies, and materials to apply design thinking methodology to your projects."
    },
    {
      id: "7",
      name: "Productivity Dashboard Template",
      category: "Digital Tools",
      price: 799,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=500&q=80",
      description: "A customizable productivity dashboard to track your learning progress, projects, and goals."
    },
    {
      id: "8",
      name: "Stuap Notebook Set",
      category: "Merchandise",
      price: 499,
      image: "https://images.unsplash.com/photo-1527863280617-15596f92e5c8?auto=format&fit=crop&w=500&q=80",
      description: "Set of 3 high-quality notebooks with inspirational quotes and Stuap branding."
    },
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Stuap Shop"
            subtitle="Study kits, digital tools, and merchandise to support your learning journey"
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
            {productCategories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-2 inline-block">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">₹{product.price}</span>
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="bg-primary rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" 
                    alt="Student kit" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Custom Study Kits for Your Course</h3>
                  <p className="mb-6">
                    Are you an educator or organization looking for custom study materials for your students? We can create tailored kits that align with your curriculum and learning objectives.
                  </p>
                  <Button className="bg-white text-primary hover:bg-gray-100">
                    Request Custom Kits
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">India-wide Shipping</h3>
              <p className="text-gray-600">
                We deliver to all major cities and towns across India.
              </p>
            </div>
            <div className="p-6">
              <div className="text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Multiple secure payment options for your convenience.
              </p>
            </div>
            <div className="p-6">
              <div className="text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Student Discounts</h3>
              <p className="text-gray-600">
                Special pricing for Stuap members and student groups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
