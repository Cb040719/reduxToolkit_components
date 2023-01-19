import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import todoReducer from "../components/todoList/todoSlice";

export default configureStore({
	reducer: {
		counter: counterReducer,
		todoList: todoReducer,
	},
});
