import React, { FunctionComponent, useState } from 'react';
import { usePokemonService } from '../../hooks/loader';
import { Box, Text, useInput } from 'ink';
import Spinner from 'ink-spinner';
import _ from 'lodash';
import Table from 'ink-table';
import { SearchByName } from './search';
import LoadingView from '../loading';

export const Pokedex: FunctionComponent<{ options: any }> = ({ options }) => {

	if (options.pokemon) {
		return <SearchByName pokemonName={options.pokemon} />
	}

	const { loading, pokemonService } = usePokemonService();
	const [pos, setPos] = useState(0);

	useInput((input, key) => {
		if (key.rightArrow) {
			if (pos <= 13) {
				setPos(pos + 1);
			}
		}

		if (key.leftArrow) {
			if (pos > 0) {
				setPos(pos - 1);
			}
		}

		if (key.escape) {
			process.exit();
		}
	})

	if (loading || !pokemonService) {
		return <LoadingView />
	}

	const tableData = pokemonService.pokemons.map(pokemon => ({
		id: pokemon.id,
		name: pokemon.name,
		type: pokemon.type.join(),
		rarity: pokemon.rarity
	}))

	const tData = _.chunk(tableData, 10);



	return <>
		<Box flexDirection="column" padding={2}>
			<Table data={tData[pos]} />
		</Box>
	</>
}