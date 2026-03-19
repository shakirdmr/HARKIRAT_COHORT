import React from 'react'

const WraperComponent = () => {
  return (
    
    <Wrapper > <TT /></Wrapper>

    

  )
}


export default WraperComponent

function TT(){
    return <> HELLO SHAK</>
}

function Wrapper( {children}) {


    return <div style={ {border:"1px solid red", padding:"30px "} }>
    
        {children}
    </div>


}
