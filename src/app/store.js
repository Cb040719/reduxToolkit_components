import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonApi } from "../services/pokemon";
import counterReducer from "../components/counter/counterSlice";
import todoReducer from "../components/todoList/todoSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todoList: todoReducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		// console.log(getDefaultMiddleware(), " --- ", pokemonApi.middleware),
		getDefaultMiddleware().concat(pokemonApi.middleware),
});
setupListeners(store.dispatch);
