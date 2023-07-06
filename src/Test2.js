import React from "react";
import "./style.css";

export default class Test2 extends React.Component{
  render(){
    return (
      <div>
      {/* <h1> class component</h1> */}
      <h1>
        {this.props.n}
        </h1>
        </div>
    )
  }
}