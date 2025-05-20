
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  background?: "primary" | "accent" | "support" | "white";
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  background = "primary",
}) => {
  const bgClasses = {
    primary: "bg-primary text-white",
    accent: "bg-accent text-rich-charcoal",
    support: "bg-support text-white",
    white: "bg-white text-rich-charcoal",
  };

  const primaryBtnClasses = {
    primary: "bg-accent text-rich-charcoal hover:bg-accent/90",
    accent: "bg-primary text-white hover:bg-primary/90",
    support: "bg-accent text-rich-charcoal hover:bg-accent/90",
    white: "bg-primary text-white hover:bg-primary/90",
  };

  return (
    <div className={`${bgClasses[background]} py-16 px-4 rounded-2xl`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="heading-lg mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to={primaryButtonLink}>
            <Button className={primaryBtnClasses[background]} size="lg">
              {primaryButtonText}
            </Button>
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink}>
              <Button variant="outline" size="lg">
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
