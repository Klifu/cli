#!/usr/bin/env node
import { Command } from 'commander';
import { Pokedex } from './components/pokedex/index';
import { Catch } from './components/catch';
import { render } from 'ink';
import React from 'react';

const program = new Command();


program
	.name('klifu')
	.version('0.0.1')
	.addHelpCommand(false);


program
	.command('pokedex')
	.option('-p, --pokemon <pokemon-name>', "pass in pokemon name to search for the pokemon")
	.description('A digital encyclopedia, which gives information about all pokemons currently in the game')
	.action((options) => {
		render(<Pokedex options={options} />)
	})

program
	.command('catch')
	.description("Catch wild pokemon")
	.action(() => {
		render(<Catch />);
	})

program.on('command:*', (command) => {
	console.error("missing" + command);
	program.help();
});

program.parse(process.argv);


