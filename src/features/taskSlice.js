
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  input: {
    task: '',
    purpose: '',
    time: '',
    date: '',
  },
  Todo: [
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
  ]
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setShow(state, action) {
      state.show = action.payload;
    },
    handleInput(state, action) {
      const { name, value } = action.payload;
      state.input[name] = value;
    },
    clickhandle(state) {
      if (state.input.task.trim() === "") return;
      const newTodo = {
        ...state.input,
        id: Date.now()
      };
      state.Todo.push(newTodo);
      state.input = { task: '', purpose: '', time: '', date: '' };
      state.show = false;
    },
    handleChange(state, action) {
      const id = action.payload;
      state.Todo = state.Todo.map(todo =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      );
    },
    handleDelete(state, action) {
      const id = action.payload;
      state.Todo = state.Todo.filter(todo => todo.id !== id);
    }
  }
});

export const { setShow, handleInput, clickhandle, handleChange, handleDelete } = taskSlice.actions;
export default taskSlice.reducer;
