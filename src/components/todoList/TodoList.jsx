import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodos, removeTodos } from "./todoSlice";

export default function TodoList() {
	const todos = useSelector((state) => state.todoList);
	const dispatch = useDispatch();

	const applyLineThrough = (e) => {
		if (e.target.checked) {
			e.target.closest("li").style.textDecoration = "line-through";
		} else {
			e.target.closest("li").style.textDecoration = "none";
		}
	};

	return (
		<div className="bg-[#4a4a4a] flex flex-col p-5">
			<h1 className="mb-5 text-3xl">TodoList</h1>
			<form
				className="mb-5 flex justify-between"
				onSubmit={(e) => {
					e.preventDefault();
					const newItem = e.target[0].value;
					const newId = Date.now();

					dispatch(addTodos({ id: newId, item: newItem }));

					e.target[0].value = "";
				}}
			>
				<input
					className="p-2 outline-none w-full"
					type="text"
					placeholder="Add a todo"
				/>
				<input
					className="p-2 bg-green-800 cursor-pointer"
					type="submit"
					value="Submit"
				/>
			</form>
			<ul className="flex flex-col gap-3">
				{todos.map((todo) => (
					<div
						key={todo.id}
						className="flex justify-between gap-5 items-center"
					>
						<li>
							<div className="text-md flex gap-5">
								<div className="grid items-center">
									<input
										className="w-[15px] h-[15px] mt-0"
										type="checkbox"
										onClick={applyLineThrough}
										name=""
										id=""
									/>
								</div>
								<p className="flex items-center">{todo.item}</p>
							</div>
						</li>
						<button
							className="text-sm bg-red-900 w-fit h-fit p-2 py-1"
							onClick={() => dispatch(removeTodos(todo.id))}
						>
							Remove
						</button>
					</div>
				))}
			</ul>
		</div>
	);
}
