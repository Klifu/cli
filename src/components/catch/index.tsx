import { Text } from 'ink';
import React, { FunctionComponent } from 'react';
import { usePokemonService } from '../../hooks/loader';
import LoadingView from '../loading';


export const Catch: FunctionComponent = () => {

	const { loading, pokemonService } = usePokemonService();

	if (loading) {
		return <LoadingView />
	}

	const wildPokemon = pokemonService?.catch(2);

	return <>
		<Text>A wild {wildPokemon?.name()} appeared.</Text>
		<Text>CP: <Text color="greenBright">{wildPokemon?.stat().cp}</Text></Text>
		<Text>HP: <Text color="magenta">{wildPokemon?.stat().hp}</Text></Text>
	</>
}