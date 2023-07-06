import React from "react";
import "./style.css";
import Test1 from "./Test1.js";
import Test2 from "./Test2.js";
import ImportExport from "./component/ImportExport.js";
import Form from "./component/Form.js";
import {name,uid,Import} from "./component/ImportExport.js";
// import UseState from"./component/UseState.js";
import UseState from "./component/UseState.js";
import UseEffect from "./component/UseEffect.js";
import CleanUp from "./component/CleanUp.js";
import Fetch from "./component/Fetch.js";



export default function App() {
  return (
    <div>
    {/* <Test1 /> */}
    <Test1 text="hi" data="props dn bro" />
    <Test2 text={{n:"with 2 value or props"}}  />
    <ImportExport />
    <h1>{name,uid,Import()}</h1>
    <UseState />
  
    <Form/>
    <UseEffect />
    <CleanUp />
    <Fetch />
    </div>
  );
}
