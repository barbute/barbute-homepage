import React from "react";

interface SectionProps {
  title: string;
  text: string;
}

const Section: React.FC<SectionProps> = ({ title, text }) => {
  return (
    <div className="bg-pink">
      <h2 className="text-2x1 md:text-3x1 font-bold">
        {title}
      </h2>
      <p className="text-justify leading-relaxed">
        {text}
      </p>
    </div>
  )
};

export default Section;