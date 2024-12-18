import React from "react";

interface CalloutProps {
  // Pass an emoji as an icon for now, might add support for custom icons now
  icon: string
  // Each new index in the array is a new paragraph
  text: any[]
}

const Callout: React.FC<CalloutProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-col justify-center px-4 py-4 w-full bg-transparent rounded-lg">
      <div className="flex gap-3.5">
        <div>{icon}</div>
        <div className="flex flex-col">
          {text.map((paragraph, index) => (
            <div
              key={index} // Use index as key for simplicity
              className="leading-relaxed mb-1 last:mb-0"
            >
              {paragraph}
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Callout;