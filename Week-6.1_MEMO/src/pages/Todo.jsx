import React, { useEffect, useState } from 'react'

const Todo = () => {

    const [todos, setTodos] = React.useState(["GOTO GYM", "learn"])
    const [newToDo, setNewTodo] = React.useState("")
    const [wake, setWake] = useState(0)    


    const AddNewTODO= ()=>{
        setTodos([...todos, newToDo])
   
    }

  return (
    
    <>
    <div>ADD TODOS</div>

        <input type='text' 
        value={newToDo} onChange={ 
            (e)=>{
                console.log(e.target.value)
            setNewTodo(e.target.value) 
                }
        }
        />
        <button onClick={AddNewTODO}> + </button>
    


   <div>
        <p>SAVED TODOS</p>

      

        {

        
            todos.map((ele, index)=>{

                return <div key={index}> {index} -- {ele}</div>

            })
        }


   </div>


    </>

  )
}




export default Todo