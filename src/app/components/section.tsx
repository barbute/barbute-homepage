import React from "react";

interface SectionProps {
  title: string;
  // Each new index in the array is a new paragraph
  content: any[];
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className="my-4">
      <h2>
        {title}
      </h2>
      {content.map((paragraph, index) => (
        <div 
          key={index} // Use index as key for simplicity
          className="text-justify leading-relaxed mb-1 last:mb-0"
        >
          {paragraph}
        </div>
        ))
      }
    </div>
  )
};

export default Section;