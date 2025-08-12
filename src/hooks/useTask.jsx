import { useState } from "react";

function useTask() {
  const [show, setShow] = useState(false);

  const [input, setInput] = useState({
    task: '',
    purpose: '',
    time: '',
    date: '', 
  });

  const [Todo, setTodo] = useState([
    {
      id: 102,
      task: "go to gym",
      purpose: "working",
      time: "12:02",
      date: "2025-08-10" 
    },
    {
      id: 103,
      task: "Attend the piano class",
      purpose: "learning",
      time: "02:02",
      date: "2025-08-30" 
    },
    {
      id: 104,
      task: "complete my office work",
      purpose: "working",
      time: "06:02",
      date: "2025-08-20"
    }
  ]);

  const handleDelete = (id) => {
    const updatedData = Todo.filter((todo) => todo.id !== id);
    setTodo(updatedData);
  };

  const handleChange = (id) => {
    const updateText = Todo.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    setTodo(updateText);
  };

  function clickhandle(e) {
    e.preventDefault();
    if (input.task.trim() === '') return;

    
    const newTodo = {
      ...input,
      id: Date.now(), 
      
    };

    setTodo([...Todo, newTodo]);
    setInput({ task: '', purpose: '', time: '', date: '' });
    setShow(false);
    alert('Form submitted!');
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return {
    handleInput,
    clickhandle,
    handleChange,
    handleDelete,
    input,
    Todo,
    show,
    setShow
  };
}

export default useTask;
