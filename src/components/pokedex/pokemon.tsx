import React, {FunctionComponent} from 'react';
import {PokemonBase} from '@klifu/core';
import {Box, Newline, Text} from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';

export const PokemonView: FunctionComponent<{pokemon?: PokemonBase}> = ({pokemon}) => {

	if(!pokemon){
		return <Text></Text>
	}

	return <Box flexDirection="column" margin={2} padding={2} borderStyle="bold" width="100%">
		<Box flexDirection="row">
			<Text>
				<Gradient name="pastel">
					<BigText font="simple" align="center" text={pokemon.name} />
				</Gradient>
			</Text>
		</Box>

		<Newline />

		<Box flexBasis="row" justifyContent="center" >
			{pokemon.type.map(t => <Box padding={2}>
				<Text>{t}</Text>
			</Box>)}
		</Box>
	</Box>
}