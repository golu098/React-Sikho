// Cleanup in React refers to the process of performing necessary actions or releasing resources before a component is unmounted or updated. It helps in preventing memory leaks, avoiding stale data, and ensuring proper cleanup of any resources associated with the component.

import React from 'react';
import React, { useState, useEffect } from 'react';

const cleanUp = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>
    <h2> cleanup function used here </h2>
    <h1> Time: {time}</h1>
      
      </div>;
};

export default cleanUp;
