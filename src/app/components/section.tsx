import React from "react";

interface SectionProps {
  title: string;
  // Each new index in the array is a new paragraph
  text: string[];
}

const Section: React.FC<SectionProps> = ({ title, text }) => {
  return (
    <div className="my-4">
      <h2>
        {title}
      </h2>
      {text.map((paragraph, index) => (
        <p 
          key={index} // Use index as key for simplicity
          className="text-justify leading-relaxed mb-1 last:mb-0"
        >
          {paragraph}
        </p>
        ))
      }
    </div>
  )
};

export default Section;