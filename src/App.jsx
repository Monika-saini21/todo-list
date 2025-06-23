import { useState } from 'react'
import Nav from './Nav';

import Task from './Task';



function App() {
  
   const [searchTerm, setSearchTerm] = useState("");
  
    
      const [Todo, setTodo] = useState([  
        { id: 102,
        task:"go to gym ",
        purpose:"working",
        time: "12:02"},
        { id: 103,
        task:"Attend the piano class",
         purpose:"learning",
        time: "02:02"
        },
          { id: 104,
        task:"complete my office work",
         purpose:"working",
       time: "06:02"}
      ])
 
    
      
     const handleDelete = (id) => {
        const updatedData = Todo.filter((todo) =>todo.id !== id);
        setTodo(updatedData);
      };
    
       const handleChange = (id) => {
        const updateText = Todo.map((todo) => todo.id === id ?{ ...todo, isChecked: !todo.isChecked} : todo);
        setTodo(updateText);
      };
  
  const filtered = Todo.filter(todo=>  todo.task.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <>
  <Nav searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}/>



    <div>
     
     {/* {Todo.map((Todo)=>  */}
     <Task filtered={filtered}
     handleChange ={handleChange } 
      handleDelete ={ handleDelete}
      Todo={Todo}
      setTodo={setTodo} />
    {/* ) } */}
    </div>
</>
  )
}

export default App
