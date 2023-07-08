import React from 'react';
import B from './context/B';

const A = () => {
  const greet = "hello";

  return (
    <div>
      <B greet={greet} />
    </div>
  );
}

export default A;
