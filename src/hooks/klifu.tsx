import Klifu from '@klifu/core';
import { PokemonBase } from '@klifu/core/dist/types';
import { useState, useEffect } from 'react';
import { Stash } from '../utils';


export const useKlifu = () => {
	const stash = new Stash();
	const [loading, setLoading] = useState<boolean>(true);
	const [klifu, setKlifu] = useState<Klifu | undefined>();
	const [error, setError] = useState(null);
	const loadKlifu = async () => {
		try {
			let pokemons: Array<PokemonBase> = await stash.loadPokemonData();
			setKlifu(await Klifu.load({ pokemonList: pokemons }));
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	}
	useEffect(() => {
		loadKlifu();
	}, []);

	return { loading, klifu, error };
}