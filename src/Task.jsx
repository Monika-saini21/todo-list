import {useState} from 'react'
import'./task.css'
function Task( ) {
    
      const[show,setShow]=useState(false);
    
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
       const [input, setInput] = useState({
      task:"",
      purpose:"",
      time:""
     })
    
      function clickhandle(e){
         e.preventDefault();
      if(input.task.trim() === "" )return;
       if (setShow(false))
    alert("Form submitted!");
      setTodo([ ...Todo,input])
     setInput({ task:"",
      purpose:"",
      time:""});
      }
      const handleInput=(e)=>{
        const {name,value}=e.target;
        setInput({...input,[name]:value});
      }
     const handleDelete = (id) => {
        const updatedData = Todo.filter((todo) =>todo.id !== id);
        setTodo(updatedData);
      };
    
       const handleChange = (id) => {
        const updateText = Todo.map((todo) => todo.id === id ?{ ...todo, isChecked: !todo.isChecked} : todo);
        setTodo(updateText);
      };
  return (
    <div>
      <div className='title'>
        <samp >
      <h1 className='activitises'>Today Activities</h1>
      <p className='activitises'>Manage your habits,reminders,events,activities,</p>
      </samp>
     <button className='add-todo' onClick={()=> setShow(true)}>
     + add todo
     </button>
     </div>
     {show &&(
      <div className='fome-bg'>
       <form className='todo-fome' onSubmit={clickhandle}>
      <img className='delete-fome' onClick={() => setShow(false)} src='https://cdn-icons-png.flaticon.com/128/657/657059.png' />
      <h1 className='todo-heading'>todo</h1>
       
         <input className='todo'
       type='text'
       name='purpose'
       value={input.purpose} 
       onChange={handleInput}
       placeholder='enter the purpose'/>

      <input className='todo'
       type='text'
       name='task'
       value={input.task} 
       onChange={handleInput}
       placeholder='enter the task'/>
      
     
        <input className='todo'
       type='time'
       name='time'
       value={input.time} 
       onChange={handleInput}
       placeholder='enter the time'/>

        <button className='submit' type="submit" >
         submit
        </button>
      </form>
      </div>
     )}
     <ul className='taskbox'>{
     Todo.length>0?
     Todo.map((todo)=>

        <div className='box'>
      <li key={todo.id}  style={{
            textDecoration: todo.isChecked ? "line-through" : "none",
           
          }}
       >
         <div className='task-box'>
          <samp>
         <input  type="checkbox"checked={todo.isChecked} 
       onChange={() => handleChange(todo.id)}/>
      
        <strong style={{color:'gray'}} >{todo.purpose}</strong>
        </samp>
         <img className='deleteimg'  onClick={() => handleDelete(todo.id)} src='https://cdn-icons-png.flaticon.com/128/657/657059.png' />
           </div>
            <p style={{fontSize:17 , marginBottom:39}}>{todo.task}</p>
            <hr></hr>
            <p className='time'> {todo.time || "No due time"}</p>
       <br></br>
      
       </li>
     </div>
    
     
    
     )
      :<div><img className='empty' src="https://cdn-icons-png.flaticon.com/128/6104/6104865.png" alt="" />
      <p className='todo-empty'>Your todo is empty</p></div>
     }
     
     </ul>
    </div>
  )
}

export default Task
