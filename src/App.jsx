import Counter from "./components/counter/Counter";
import TodoList from "./components/todoList/TodoList";

function App() {
	return (
		<div className="flex flex-col gap-20 p-5">
			<h1 className="text-3xl text-center">REDUX-TOOLKIT COMPONENTS</h1>
			<TodoList />
			<Counter />
		</div>
	);
}

export default App;
