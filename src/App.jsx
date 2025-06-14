import { useState } from 'react'
import Nav from './Nav';

import Task from './Task';



function App() {
  
   const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = () => {
  const filtered = Todo.filter(todo=> todo.task.toLowerCase() === searchTerm.toLowerCase());
setTodo(filtered);
};
  return (
    <>
   
 <Nav handleSearch={handleSearch} 
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
    />

  <Task
  />  
  
    </>
  )
}

export default App
