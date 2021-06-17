import React from 'react';

const Paragraph = ({ className, children }) => {
  return <div className={`drop ${className}`}>{children}</div>;
};

export default Paragraph;
