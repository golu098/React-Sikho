// // import React, { useContext } from 'react';
// // import React,{useContext } from 'react';
// import React from "react";
// import{GreetContext,Greet2context} from"./A";

// // import A from "./context/C .jsx";
// const C=()=>{
//   const useCon=useContext(GreetContext);
//   const useCon2=useContext(Greet2context);
//   return (
//     // <GreetContext.Consumer>{(value)=>{
//     //   return <h1>Greet :{value}</h1>
//     //   }
//     // }
//     // </GreetContext.Consumer>
//     //


//     // use context

//     <h1>Great:{}
    
//   )
// }

// export default C;
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