import React, { useState, useCallback } from 'react'

const Demo = React.memo(
      (PROPS) => {
            console.log("called DEMO")
            return (
            <button onClick={PROPS.clicker}>
              increment count {PROPS.count}
            </button>
            )
    }
)

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

    const incrementCount = useCallback(
    ()=>{ setCount((countThatTime)=>countThatTime+1) }
   ,[])

  return (
    <div style={{background:(theme=='light'?"white":"black"), padding:"100px" }}>
      
      <button style={{padding:"20px"}}
      onClick={ 
        ()=> setTheme(theme=='light'?"dark":"light") 
        }>
        chnage theme - current {theme}</button>

      

        <Demo clicker={incrementCount} count={count} />

    </div>
  );
}

export default UseCallback;
