import { configureStore } from "@reduxjs/toolkit";
import  database  from "./Reducer";

export default configureStore({
  reducer: {
    data: database,
  },
});
