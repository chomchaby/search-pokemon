export interface PokemonDimension {
  minimum: string;
  maximum: string;
}

export interface PokemonAttackDetail {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonAttacks {
  fast: PokemonAttackDetail[];
  special: PokemonAttackDetail[];
}

export interface PokemonEvolutionRequirement {
  amount: number;
  name: string;
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  height: PokemonDimension;
  weight: PokemonDimension;
  evolutionRequirements?: PokemonEvolutionRequirement;
  evolutions?: Pokemon[];
  attacks: PokemonAttacks;
}
