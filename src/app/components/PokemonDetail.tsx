import React from "react";
import PokemonList from "./PokemonList";
import { POKEMON_TYPE } from "./PokemonTypeCard";

// src/Pokemon.ts

export interface Pokemon {
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
  types: string[];
  resistant: string[];
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
  weaknesses: string[];
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
}

interface PokemonDisplayProps {
  pokemon: Pokemon;
}
const PokemonDetail = ({ pokemon }: PokemonDisplayProps) => {
  return (
    <div>
      <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>Classification: {pokemon.classification}</p>
        <p>Types: {pokemon.types.join(", ")}</p>
        <p>Resistant: {pokemon.resistant.join(", ")}</p>
        <p>Weaknesses: {pokemon.weaknesses.join(", ")}</p>
        <p>Flee Rate: {pokemon.fleeRate}</p>
        <p>Max CP: {pokemon.maxCP}</p>
        <p>Max HP: {pokemon.maxHP}</p>
        <h2>Attacks</h2>
        <h3>Fast Attacks</h3>
        <ul>
          {pokemon.attacks.fast.map((attack, index) => (
            <li key={index}>
              {attack.name} - {attack.type} - Damage: {attack.damage}
            </li>
          ))}
        </ul>
        <h3>Special Attacks</h3>
        <ul>
          {pokemon.attacks.special.map((attack, index) => (
            <li key={index}>
              {attack.name} - {attack.type} - Damage: {attack.damage}
            </li>
          ))}
        </ul>
        {pokemon.evolutions ? (
          <div>
            <h2>Evolutions</h2>
            <PokemonList pokemonInfo={pokemon.evolutions} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PokemonDetail;
