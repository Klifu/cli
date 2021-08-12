import { PokemonType } from '@klifu/core/dist/types';

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
		Ground: '',
		Ice: 'blueBright',
		Normal: 'white',
		Poison: 'magentaBright',
		Psychic: 'cyanBright',
		Rock: '',
		Steel: '',
		Water: 'blue'
	}

	static get(pokemonType: PokemonType) {
		return this.colors[pokemonType];
	}
}