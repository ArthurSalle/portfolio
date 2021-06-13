import React from 'react';
import { Link } from 'gatsby';

const Button = ({ title, className }) => {
  return (
    <>
      <Link to='/' className={`btn ${className}`}>
        {title}
      </Link>
    </>
  );
};

export default Button;
