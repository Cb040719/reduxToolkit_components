import { useState } from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemon";

export default function GetAPokemon() {
	const [pokeName, setPokeName] = useState("pokeName");
	const { data, error, isLoading } = useGetPokemonByNameQuery(pokeName);

	return (
		<div className="bg-[#4a4a4a] p-5 w-fit">
			<h1 className=" text-2xl">Get a Pokemon!</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.target[0].value !== ""
						? setPokeName(e.target[0].value)
						: alert("Insert. A. PokeFuckingName.");
					e.target[0].value = "";
				}}
			>
				<input
					type="text"
					placeholder="Insert Pokemon name (all in lowercase)"
					className="outline-none p-2 my-2"
				/>
				<input
					className="p-2 bg-green-800 cursor-pointer"
					type="submit"
					value="Submit"
				/>
			</form>
			{error ? (
				<>Choose a pokemon!</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<>
					<div className="flex justify-between">
						<h3 className="flex items-center font-medium tracking-wider">
							{data.species.name.toUpperCase()}
						</h3>
						<div className="img">
							<img src={data.sprites.front_shiny} alt={data.species.name} />
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}
