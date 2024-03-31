import React from "react";
import PokemonList from "./PokemonList";
import PokemonTypeCard, { POKEMON_TYPE } from "./PokemonTypeCard";

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
        <div>
          <div className="font-medium text-xl py-2">Types</div>
          <div className="flex flex-row gap-2">
            {pokemon.types.map((type: POKEMON_TYPE, index: number) => (
              <PokemonTypeCard type={type} key={index} />
            ))}
          </div>
        </div>

        <div>
          <div className="font-medium text-xl py-2">Resistant</div>
          <div className="flex flex-row gap-2">
            {pokemon.resistant.map((type: POKEMON_TYPE, index: number) => (
              <PokemonTypeCard type={type} key={index} />
            ))}
          </div>
        </div>

        <div>
          <div className="font-medium text-xl py-2">Weaknesses</div>
          <div className="flex flex-row gap-2">
            {pokemon.weaknesses.map((type: POKEMON_TYPE, index: number) => (
              <PokemonTypeCard type={type} key={index} />
            ))}
          </div>
        </div>

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
            <div className="font-medium text-xl py-2">Evolutions</div>
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
