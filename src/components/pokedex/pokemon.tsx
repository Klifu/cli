import React, { FunctionComponent } from 'react';
import { PokemonBase } from '@klifu/core/dist/types';
import { Box, Newline, Text } from 'ink';
import { PokemonTypeColor } from '../../utils/color';

export const PokemonView: FunctionComponent<{ pokemon?: PokemonBase }> = ({ pokemon }) => {

	if (!pokemon) {
		return <Text></Text>
	}

	return <>
		<Box padding={2} flexDirection="column">
			<Text color="cyanBright">{pokemon.name} </Text>
			<Newline />

			<Box flexDirection="row">
				{pokemon.type.map(el => <Text key={el}><Text bold backgroundColor={PokemonTypeColor.get(el)}> {el} </Text> </Text>)}
			</Box>
			<Newline />

			<Text>{pokemon.rarity}</Text>
			<Newline />

			<Text>Attack: {pokemon.baseStat.attack}</Text>
			<Text>Defense: {pokemon.baseStat.defense}</Text>
			<Text>HP: {pokemon.baseStat.hp}</Text>

		</Box>
	</>
}