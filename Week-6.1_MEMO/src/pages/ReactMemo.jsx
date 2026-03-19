import React, { useState } from 'react'

const ReactMemo = () => {

  const [count, setCount] = useState(0);

  return (
    <>
    
    <HeaderComponenet title="Hello World" count={count} />
    <HeaderComponenet title="Hello World"  />
    <HeaderComponenet title="Hello World"  />
    <HeaderComponenet title="Hello World" />
    <HeaderComponenet title="Hello World"  />
    <HeaderComponenet title="Hello World" count={count} />

sasa
<p>dsds</p>


<button onClick={ ()=> setCount(count+1) }> INCREASE {count}</button>
    </>
    
  )
}


const HeaderComponenet = 
React.memo(
  function (PROPS){
console.log("HEADER WAS RE RENDERED \n")
  return <>

    <div> {PROPS.title} {PROPS.count}</div>
   
  </>
}
)

export default ReactMemo
