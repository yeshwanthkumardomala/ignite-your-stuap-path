
import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  text,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
