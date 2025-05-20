
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  image,
  category,
  duration,
  level,
}) => {
  const levelColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-white rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500">{duration}</span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${levelColor[level]}`}>
            {level}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link to={`/courses/${id}`}>
          <Button className="w-full">View Course</Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
