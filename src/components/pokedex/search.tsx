import React, { FunctionComponent } from 'react';
import { usePokemonService } from '../../hooks/loader';
import LoadingView from '../loading';
import { PokemonView } from './pokemon';

export const SearchByName: FunctionComponent<{ pokemonName: string }> = ({ pokemonName }) => {

	const { loading, pokemonService } = usePokemonService();

	if (loading || !pokemonService) {
		return <LoadingView />
	}

	const pokemon = pokemonService.where().name(pokemonName);

	return <PokemonView pokemon={pokemon} />

}