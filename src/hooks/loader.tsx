import { useEffect, useState } from 'react';
import { PokemonService } from '@klifu/core';

export const usePokemonService = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [pokemonService, setPokemonService] = useState<PokemonService | undefined>();
	const loadService = async () => {
		let pkService: PokemonService = await PokemonService.load();
		setPokemonService(pkService);
		setLoading(false);
	}

	useEffect(() => {
		loadService();
	}, [])

	return { loading, pokemonService };
}