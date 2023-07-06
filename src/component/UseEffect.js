import React from"react";
import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  // syntax 
  // useEffect(()=>{

  // },[dependency])
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('Component mounted or updated');
  //   return () => {
  //     console.log('Component unmounted');
  //   };
  // }, []);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button> */}
    </div>
  );
};

export default MyComponent;
