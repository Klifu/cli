import Klifu, { Cache } from '@klifu/core';
import { PokemonBase } from '@klifu/core/dist/types';
import { useState, useEffect } from 'react';
import * as fs from 'fs';
import {filePaths} from '../utils';


export const useKlifu = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [klifu, setKlifu] = useState<Klifu | undefined>();
	const [error, setError] = useState(null);
	const loadKlifu = async () => {
		try {
			let pokemons: Array<PokemonBase>
			if (fs.existsSync(filePaths.pokemons)) {
				pokemons = JSON.parse(fs.readFileSync(filePaths.pokemons, 'utf-8'));
			} else {
				pokemons = await Cache.pokemons();
				fs.writeFileSync(filePaths.pokemons, JSON.stringify(pokemons), {encoding: 'utf-8'});
			}
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