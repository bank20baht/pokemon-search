import React from "react";
import PokemonTypeCard, { POKEMON_TYPE } from "./PokemonTypeCard";

type Props = {
  PokemonInfo: Pokemon;
};

type Pokemon = {
  name: string;
  id: string;
  image: string;
  types: POKEMON_TYPE[];
};

const CardPokemon = ({ PokemonInfo }: Props) => {
  return (
    <div className=" py-8 flex flex-col items-center justify-center border border-black p-3 rounded-xl">
      <div className="">
        <img
          src={PokemonInfo.image}
          alt={PokemonInfo.name}
          className="w-32 h-32"
        />
      </div>
      <div className="font-bold text-xl py-5">{PokemonInfo.name}</div>

      <div className="flex flex-row gap-2">
        {PokemonInfo.types.map((type: POKEMON_TYPE, index: number) => (
          <PokemonTypeCard type={type} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardPokemon;
