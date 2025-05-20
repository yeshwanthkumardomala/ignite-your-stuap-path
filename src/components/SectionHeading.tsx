
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = "",
}) => {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="heading-lg mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
