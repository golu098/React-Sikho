import React from "react";
import "./style.css";
const Test1=(props)=>{
  const image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROl_nKB-r_bpA3iYbP3NXv4DrXntjRYEECEkJYGhI&s";
  const t1="play";
  return(
    <div>
{/* <h1> hi</h1> */}
<img src={image} />
<h1>{props.text.n}</h1>

<h1> {props.data}</h1>

<button>
   {t1}
   </button>
</div>
  )
}
export default Test1;