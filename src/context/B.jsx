import React from "react";
import C from "./context/C.jsx";

const B=(props)=>{
  return (
    <div>
      <C greet ={props.greet}/>
      </div>
  )
}

export default B;