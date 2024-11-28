import React from "react";

interface AnchorProps {
  link: string;
  text: string;
}

const Anchor: React.FC<AnchorProps> = ({ link, text }) => {
  return (
    <a className="text-accent hover:decoration-solid" href={link}>{text}</a>
  )
};

export default Anchor;