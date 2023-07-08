import React from "react";
import Test1 from "./Test1.js";
import Test2 from "./Test2.js";
import ImportExport from "./component/ImportExport.js";
import Form from "./component/Form.js";
import UseState from "./component/UseState.js";
import UseEffect from "./component/UseEffect.js";
import CleanUp from "./component/CleanUp.js";
import Fetch from "./component/Fetch.js";
import A from "./context/A.jsx";
// import B from "./context/bx.jsx";
// import MyProvider  from"/context/producer.js";

export default function App() {
  return (
    <div>
      <Test1 text="hi" data="props dn bro" />
      <Test2 text={{ n: "with 2 value or props" }} />
      <ImportExport />
      <h1>{name}</h1> {/* Assuming name is imported from ImportExport.js */}
      <UseState />
      <Form />
      <UseEffect />
      <CleanUp />
      <Fetch />
      <A />
      {/* <MyProvider /> */}
    </div>
  );
}
