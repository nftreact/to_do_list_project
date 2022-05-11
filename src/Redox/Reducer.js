import { createSlice } from "@reduxjs/toolkit";

export const database = createSlice({
  name: "tasks",
  initialState: {
    Array: [
      { id: 1, title: "Design the solution", completed: true },
      { id: 2, title: "Prepare for implementation	", completed: true },
      { id: 3, title: "Prepare the test/QA environment	", completed: true },
      { id: 4, title: "Schedule jobs", completed: false },
      { id: 5, title: "Prepare the production environment.	", completed: false },
      {
        id: 6,
        title: "Install the product in the production environment.	",
        completed: false,
      },
      {
        id: 7,
        title:
          "Implement distributed data feeds in the production environment.	",
        completed: false,
      },
    ],
    valueInput: "",
    dynamicState: null,
  },

  reducers: {
    addTask: (state, action) => {
      const todo = {
        id: Math.floor(Math.random() * 100000000),
        title: action.payload.title,
        completed: false,
      };
      state.Array.push(todo);
    },
    todoDone: (state, action) => {
      const index = state.Array.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.Array[index].completed = action.payload.completed;
    },
    deleteTask: (state, action) => {
      // return state.Array.filter((todo) => todo.id !== action.payload.id);
      const index = state.Array.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.Array.splice(index, 1);
    },
    updateTask: (state, action) => {
      const index = state.Array.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.Array[index].title = action.payload.title;
    },
    UpdateInput: (state, action) => {
      state.valueInput = action.payload;
    },
    updateDynaicState: (state, action) => {
      state.dynamicState = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTask,
  deleteTask,
  todoDone,
  updateTask,
  UpdateInput,
  updateDynaicState,
} = database.actions;
export default database.reducer;
