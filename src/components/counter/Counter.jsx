import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="bg-[#4a4a4a] flex flex-col p-5">
			<h1 className="mb-5 text-3xl">Counter</h1>
			<div className="flex flex-row gap-3">
				<button
					className="text-md bg-red-900 w-fit h-fit p-2"
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
				<span className="flex items-center text-lg bg-[#242424] px-3">
					{count}
				</span>
				<button
					className="p-2 bg-green-800 text-md w-fit h-fit"
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
			</div>
		</div>
	);
}
