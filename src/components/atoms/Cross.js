import * as React from 'react';

function Cross(props) {
  return (
    <svg viewBox='0 0 512 512' {...props}>
      <path d='M512 22L490 0 256 234 22 0 0 22l234 234L0 490l22 22 234-234 234 234 22-22-234-234z' />
    </svg>
  );
}

export default Cross;
