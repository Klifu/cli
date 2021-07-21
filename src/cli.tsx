import { Command } from 'commander';
import { Pokedex } from './components/pokedex/index';
import { render } from 'ink';
import React from 'react';

const program = new Command();


program
	.name('klifu')
	.version('0.0.1')
	.addHelpCommand(false);


program
	.command('pokedex')
	.description('A digital encyclopedia, which gives information about all pokemons currently in the game')
	.action(() => {
		render(<Pokedex />)
	})

program.on('command:*', (command) => {
	console.error("missing" + command);
	program.help();
});

program.parse(process.argv);

