import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodos: (state, action) => {
			state.push(action.payload);
		},
		removeTodos: (state, action) => {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addTodos, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;
