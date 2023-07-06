import React from 'react';

import { useState, useEffect } from 'react';

const UseState= ()=>{
  const [data ,setData]=useState(0)
  console.warn(data)
return (
<div>
  <h5>
    use state{data}
    </h5>
<button onClick={()=>setData(data+1)}>update data

  </button>
  </div>
)
};
export default UseState;
