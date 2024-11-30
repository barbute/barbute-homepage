import React from "react";

interface AnchorProps {
  link: string;
  content: any;
}

const Anchor: React.FC<AnchorProps> = ({ link, content }) => {
  return (
    <a className="text-accent hover:underline hover:decoration-solid" href={link}>{content}</a>
  )
};

export default Anchor;