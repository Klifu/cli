import React, {FunctionComponent} from 'react';
import { render, Text } from 'ink';
import {PokemonService} from '@klifu/core';

const App: FunctionComponent<{pokemonService: PokemonService}> = ({pokemonService}) => {
	console.log(pokemonService.pokemons);
	
	return <Text>
		{pokemonService.pokemons.map(el => <Text>{el.name}</Text>)}
	</Text>
}

const loader = async (Component: FunctionComponent<{pokemonService: PokemonService}>) => {
	const pokemonService = await PokemonService.load();

	const Comp = () => {
		return <Component pokemonService={pokemonService} />
	}

	return Comp
}

(async () => {
	let Comp = await loader(App);
	render(<Comp />)
})()
