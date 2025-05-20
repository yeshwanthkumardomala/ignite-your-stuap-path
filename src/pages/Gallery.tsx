
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const Gallery = () => {
  // Sample gallery images by category
  const galleryCategories = [
    {
      name: "Workshops & Events",
      images: [
        {
          src: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=600&q=80",
          caption: "Design Thinking Workshop, Mumbai 2023"
        },
        {
          src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
          caption: "Career Guidance Seminar, Delhi 2023"
        },
        {
          src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
          caption: "Team Building Activity, Bangalore 2023"
        },
        {
          src: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?auto=format&fit=crop&w=600&q=80",
          caption: "Python Bootcamp, Delhi 2023"
        },
      ]
    },
    {
      name: "Student Projects",
      images: [
        {
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
          caption: "Team collaboration on EcoTracker app"
        },
        {
          src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
          caption: "Students building the Financial Literacy platform"
        },
        {
          src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
          caption: "Market research for EdTech classroom solution"
        },
        {
          src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
          caption: "Mentorship session for Healthcare app project"
        },
      ]
    },
    {
      name: "Campus Life",
      images: [
        {
          src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
          caption: "Students relaxing at the Stuap lounge"
        },
        {
          src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?auto=format&fit=crop&w=600&q=80",
          caption: "Study session at Mumbai learning center"
        },
        {
          src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
          caption: "Casual Friday meetup at Delhi hub"
        },
        {
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
          caption: "Students celebrating project completion"
        },
      ]
    },
    {
      name: "Success Stories",
      images: [
        {
          src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
          caption: "Arjun receiving job offer after Stuap mentorship"
        },
        {
          src: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=600&q=80",
          caption: "Neha's app winning national hackathon"
        },
        {
          src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80",
          caption: "Vikram presenting his project to industry panel"
        },
        {
          src: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=600&q=80",
          caption: "Priya receiving Stuap excellence award"
        },
      ]
    },
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Gallery"
            subtitle="Capturing moments from workshops, events, student projects, and campus life"
            centered
          />
          
          {galleryCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="relative group overflow-hidden rounded-xl">
                    <img 
                      src={image.src} 
                      alt={image.caption}
                      className="w-full h-60 object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                      <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Want to see more? Follow us on social media for regular updates.</p>
            <div className="flex justify-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
