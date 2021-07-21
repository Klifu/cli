import React, { FunctionComponent, useState } from 'react';
import { usePokemonService } from '../../hooks/loader';
import { Box, Text, useInput } from 'ink';
import Spinner from 'ink-spinner';
import { Tabs, Tab } from 'ink-tab';
import _ from 'lodash';
import { PokemonBase } from '@klifu/core';
import { PokemonView } from './pokemon';

export const Pokedex: FunctionComponent = () => {
	const { loading, pokemonService } = usePokemonService();
	const [activeTabName, setActiveTabName] = useState<string | null>(null);
	const [pos, setPos] = useState(0);

	useInput((input, key) => {
		if (key.downArrow) {
			if (pos > 0) {
				setPos(pos - 1);
			}
		}

		if (key.upArrow) {
			if(pos < ((150/10) - 1 )){
				setPos(pos + 1);
			}
		}

		if(key.escape){
			process.exit();
		}
	})

	if (loading || !pokemonService) {
		return <Text><Spinner type="pong" />{" "} Loading...</Text>
	}

	let pokemons = _.chunk(pokemonService.pokemons, 10);

	return <>
		<Box flexDirection="column" padding={2}>
			<Tabs onChange={(name: string, activeTab) => {
				setActiveTabName(name);
			}} flexDirection="row">

				{pokemons[pos].map(el => <Tab key={el.id} name={el.name}>{el.name}</Tab>)}
			</Tabs>

			<Box>
				{(typeof activeTabName === "string") ?
					<PokemonView pokemon={pokemonService.where().name(activeTabName)} />
					: null}
			</Box>
		</Box>
	</>
}