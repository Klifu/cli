import * as path from 'path';
import * as fs from 'fs';
import { Pokemon, PokemonBase, PokemonType } from '@klifu/core/dist/types';
import {Cache} from '@klifu/core';

const DIR_PATH = path.resolve(__dirname);

export const filePaths = {
	pokemons: path.resolve(DIR_PATH, 'pokemons.json')
}


type TypeColors = {
	[pokemonType in PokemonType]: string;
};

export class PokemonTypeColor {
	static readonly colors: TypeColors = {
		Bug: 'green',
		Dark: 'black',
		Dragon: 'blueBright',
		Electric: 'yellowBright',
		Fairy: 'redBright',
		Fighting: 'red',
		Fire: 'yellow',
		Flying: 'cyan',
		Ghost: 'magenta',
		Grass: 'green',
		Ground: '#BA4A00',
		Ice: 'blueBright',
		Normal: 'white',
		Poison: 'magentaBright',
		Psychic: 'cyanBright',
		Rock: '#F39C12',
		Steel: '#D7BDE2',
		Water: 'blue'
	}

	static get(pokemonType: PokemonType) {
		return this.colors[pokemonType];
	}
}

export class Stash {
	private _filePaths = filePaths;
	async loadPokemonData(): Promise<Array<PokemonBase>> {
		let pokemons: Array<PokemonBase>
		if(fs.existsSync(this._filePaths.pokemons)) {
			pokemons = JSON.parse(fs.readFileSync(this._filePaths.pokemons, 'utf-8'));
			return pokemons;
		}else {
			pokemons = await Cache.pokemons();
			fs.writeFileSync(this._filePaths.pokemons, JSON.stringify(pokemons), {encoding: 'utf-8'});
		}
		return pokemons;
	}
}