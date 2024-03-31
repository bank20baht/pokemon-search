import React from "react";
import PokemonList from "./PokemonList";
import PokemonTypeCard, { POKEMON_TYPE } from "./PokemonTypeCard";
import PokemonDetailCard from "./PokemonDetailCard";

export type Pokemon = {
  name: string;
  id: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: POKEMON_TYPE[];
  resistant: POKEMON_TYPE[];
  attacks: {
    fast: {
      name: string;
      type: string;
      damage: number;
    }[];
    special: {
      name: string;
      type: string;
      damage: number;
    }[];
  };
  weaknesses: POKEMON_TYPE[];
  fleeRate: number;
  maxCP: number;
  evolutions: {
    id: string;
    number: string;
    name: string;
    types: POKEMON_TYPE[];
    image: string;
    attacks: {
      fast: {
        name: string;
        type: string;
        damage: number;
      }[];
      special: {
        name: string;
        type: string;
        damage: number;
      }[];
    };
  }[];
  evolutionRequirements: {
    amount: number;
    name: string;
  };
  image: string;
  maxHP: number;
};

type PokemonDisplayProps = {
  pokemon: Pokemon;
};
const PokemonDetail = ({ pokemon }: PokemonDisplayProps) => {
  return (
    <div className="flex flex-col">
      <PokemonDetailCard pokemon={pokemon} />
      {pokemon.evolutions ? (
        <div>
          <div className="font-medium text-2xl py-2 ml-12">Evolutions</div>
          <PokemonList pokemonInfo={pokemon.evolutions} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PokemonDetail;
