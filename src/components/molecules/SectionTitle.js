import React from 'react';
import Title from '../atoms/Title';

const SectionTitle = ({ text, type }) => {
  return (
    <div className=' section--title'>
      <Title type={type}>{text}</Title>
      <div className='section--line'></div>
    </div>
  );
};

export default SectionTitle;
