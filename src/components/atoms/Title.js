import React from 'react';

const Title = ({ type, children }) => {
  switch (type) {
    case 'h1':
      return <h1 className='h1'>{children}</h1>;
    case 'h2':
      return <h2 className='h2'>{children}</h2>;
    case 'h3':
      return <h3 className='h3'>{children}</h3>;
    case 'h4':
      return <h4 className='h4'>{children}</h4>;

    default:
      return <h1 className='h1'>{children}</h1>;
  }
};

export default Title;
