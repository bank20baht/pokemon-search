import React from "react";
import PokemonList from "./PokemonList";
import PokemonTypeCard, { POKEMON_TYPE } from "./PokemonTypeCard";

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
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-5">
        <div className="flex flex-col items-center w-full xl:w-1/2">
          <h1 className="text-4xl font-bold">{pokemon.name}</h1>
          <img
            className="w-64 h-64 mt-8"
            src={pokemon.image}
            alt={pokemon.name}
          />
          <p className="font-bold mt-8">
            Classification:{" "}
            <span className="font-normal">{pokemon.classification}</span>{" "}
          </p>
        </div>

        <div className="flex flex-col w-full xl:w-1/2">
          <div className="font-bold py-2">Types</div>
          <div className="flex flex-row gap-2">
            {pokemon.types.map((type: POKEMON_TYPE, index: number) => (
              <PokemonTypeCard
                type={type}
                key={index}
                testid={`p_type_${index}`}
              />
            ))}
          </div>

          <div className="font-bold mt-5 mb-1">Resistant</div>
          <div className="flex flex-row gap-2">
            {pokemon.resistant.map((type: POKEMON_TYPE, index: number) => (
              <PokemonTypeCard type={type} key={index} />
            ))}
          </div>

          <div className="font-bold mt-5 mb-1">Weaknesses</div>
          <div className="flex flex-row gap-2">
            {pokemon.weaknesses.map((type: POKEMON_TYPE, index: number) => (
              <PokemonTypeCard type={type} key={index} />
            ))}
          </div>

          <div className="mt-5 max-w-sm rounded-xl overflow-hidden shadow-lg p-3 bg-cyan-500 text-white font-bold">
            <div className="flex flex-row gap-2 justify-between items-center">
              <p className="">Flee Rate: {pokemon.fleeRate}</p>
              <p>Max CP: {pokemon.maxCP}</p>
              <p>Max HP: {pokemon.maxHP}</p>
            </div>

            <p className="text-center">Fast Attacks</p>
            <ul>
              {pokemon.attacks.fast.map((attack, index) => (
                <li key={index} className="text-center justify-center flex">
                  {attack.name} -{" "}
                  <PokemonTypeCard type={attack.type as POKEMON_TYPE} /> -
                  Damage: {attack.damage}
                </li>
              ))}
            </ul>
            <p className="text-center">Special Attacks</p>
            <ul>
              {pokemon.attacks.special.map((attack, index) => (
                <li key={index} className="text-center justify-center flex">
                  {attack.name} -{" "}
                  <PokemonTypeCard type={attack.type as POKEMON_TYPE} /> -
                  Damage: {attack.damage}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {pokemon.evolutions ? (
        <div>
          <div className="font-medium text-2xl py-2">Evolutions</div>
          <PokemonList pokemonInfo={pokemon.evolutions} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PokemonDetail;
