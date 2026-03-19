import React, { useEffect, useState } from 'react'

const useEffectt = () => {
  const [jokes, setJokes] = useState([])
  const [trigger, setTrigger] = useState(0)


  useEffect(
     ()=>{

    const getData = async ()=>{
      try {
        
        const resposne = await fetch("https://official-joke-api.appspot.com/random_ten");
        const re= await resposne.json();
        setJokes(re)
      
      } catch (error) {
        console.log(error.message) 
      }  

      }
      getData()
 


    }
    ,[trigger])


    function renderJokes() {
    if (!jokes) {

      return <div>NO JOKES LOADED YET</div>;
    }

    return jokes.map((ele, index) => {
      // console.log(ele);
      return <div key={ele.id}>{ele.setup} -- {ele.punchline}</div>;
    });
    }



  return <>
    <button onClick={() => setTrigger(t => t + 1)}>GET NEW JOKES (with cleanup fxn)</button>
    OUR JOKES ARE
   { renderJokes() }

  </>
}


export default useEffectt