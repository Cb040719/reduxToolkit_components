# Redux Toolkit Components

This project is a demonstration of how to use [Redux Toolkit](https://redux-toolkit.js.org/), [TailwindCSS](https://tailwindcss.com/), [RTK query](https://redux-toolkit.js.org/rtk-query/overview) and [Vite](https://vitejs.dev/). It contains components for a Todo List, Counter and GetAPokemon.

## TodoList

The TodoList component uses the `todoSlice` to manage state. This slice contains reducers for adding, removing and updating todos in the list.

## Counter

The Counter component uses the `counterSlice` to manage state. This slice contains reducers for incrementing and decrementing the counter value.

## GetAPokemon

The GetAPokemon component uses the `getAPokemonApi` slice to manage state. This slice contains reducers for setting the pokemon name and image URL, as well as an asynchronous thunk for fetching data from an API endpoint.
