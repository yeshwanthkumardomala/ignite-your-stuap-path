
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

const Events = () => {
  // Sample events data
  const upcomingEvents = [
    {
      id: "1",
      title: "Design Thinking Workshop",
      date: "June 15, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Mumbai Innovation Center",
      address: "Andheri East, Mumbai",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=600&q=80",
      spots: 25,
      spotsLeft: 8,
    },
    {
      id: "2",
      title: "Python Bootcamp for Beginners",
      date: "July 5-7, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Hub Delhi",
      address: "Connaught Place, Delhi",
      category: "Bootcamp",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=600&q=80",
      spots: 30,
      spotsLeft: 12,
    },
    {
      id: "3",
      title: "Career Guidance Seminar",
      date: "July 20, 2023",
      time: "11:00 AM - 2:00 PM",
      location: "The Knowledge Park",
      address: "Koramangala, Bangalore",
      category: "Seminar",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
      spots: 50,
      spotsLeft: 23,
    },
    {
      id: "4",
      title: "Entrepreneurship Summit",
      date: "August 12-13, 2023",
      time: "10:00 AM - 6:00 PM",
      location: "Startup India Center",
      address: "HSR Layout, Bangalore",
      category: "Summit",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&q=80",
      spots: 100,
      spotsLeft: 45,
    },
    {
      id: "5",
      title: "UI/UX Design Workshop",
      date: "August 25, 2023",
      time: "10:00 AM - 5:00 PM",
      location: "Design Studio",
      address: "Bandra, Mumbai",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80",
      spots: 25,
      spotsLeft: 15,
    },
    {
      id: "6",
      title: "Data Science Conference",
      date: "September 8-9, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Analytics Center",
      address: "Salt Lake, Kolkata",
      category: "Conference",
      image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?auto=format&fit=crop&w=600&q=80",
      spots: 75,
      spotsLeft: 30,
    }
  ];

  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Events & Workshops"
            subtitle="Join our in-person events to learn, network, and gain hands-on experience"
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
            <Button variant="outline" className="rounded-full">All Events</Button>
            <Button variant="outline" className="rounded-full">Workshops</Button>
            <Button variant="outline" className="rounded-full">Bootcamps</Button>
            <Button variant="outline" className="rounded-full">Seminars</Button>
            <Button variant="outline" className="rounded-full">Conferences</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-accent text-rich-charcoal px-4 py-1 font-medium">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}, {event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}, {event.address}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm">
                      <span className="text-primary font-medium">{event.spotsLeft}</span> spots left out of {event.spots}
                    </span>
                  </div>
                  
                  <Link to={`/events/${event.id}`}>
                    <Button className="w-full">Register Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Updated on Events</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to get notified about upcoming events and workshops near you.
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

export default Events;
