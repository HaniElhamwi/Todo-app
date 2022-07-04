import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    arr: [
      { id: 1, title: "todo1", completed: false },
      { id: 2, title: "todo2", completed: false },
      { id: 3, title: "todo3", completed: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.arr.push(newTodo);
    },
    toggleComplete(state, action) {
      const find = state.arr.find((el) => {
        return el.id === action.payload.id;
      });
      find.completed = !find.completed;
    },
    DeletHandler(state, action) {
      const deleted = state.arr.filter((el) => {
        return el.id !== action.payload.id;
      });
      state.arr = deleted;
    },
  },
});

export const { addTodo, toggleComplete, DeletHandler } = todoSlice.actions;
export default todoSlice.reducer;
