import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 510 510' {...props}>
      <path d='M459 0H51C23 0 0 23 0 51v408c0 28 23 51 51 51h408c28 0 51-23 51-51V51c0-28-23-51-51-51zM153 434H77V204h76v230zm-38-273a46 46 0 010-92c25 0 46 20 46 46s-21 46-46 46zm319 273h-77V298c0-20-18-38-38-38s-38 18-38 38v136h-77V204h77v31c12-21 40-36 63-36 49 0 90 41 90 89v146z' />
    </svg>
  );
}

export default SvgComponent;
