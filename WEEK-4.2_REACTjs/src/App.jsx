import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  function seTheCount(){
    setCount(count+1)
  }


  return (
    <>
    
    <div>TODO LIST {count}</div>

    <button onClick={ seTheCount }>
      INCREASE</button>
    
    </>
  )
}



export default App