import React,{createContext} from 'react';
import B from './B';

const GreetContext=createContext();
const A = () => {
  const greet = "hello";

  return (
    <div>
      <GreetContext.Provider  value={greet} >
      <B />
 </GreetContext.Provider>
    </div>
  );
}

export default A;
export {GreetContext};

// 3:09:00