import React from "react";
import { Pokemon } from "./PokemonDetail";
import PokemonTypeCard, { POKEMON_TYPE } from "./PokemonTypeCard";
import Image from "next/image";

type PokemonDisplayProps = {
  pokemon: Pokemon;
};

const PokemonDetailCard = ({ pokemon }: PokemonDisplayProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-5">
        <div className="flex flex-col items-center w-full xl:w-1/2">
          <h1 className="text-4xl font-bold">{pokemon.name}</h1>
          <Image
            className="w-64 h-64 mt-8"
            loader={() => pokemon.image}
            src={pokemon.image}
            alt={pokemon.name}
            height={256}
            width={256}
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
    </div>
  );
};

export default PokemonDetailCard;
