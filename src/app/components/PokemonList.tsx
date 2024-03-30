import React from "react";
import CardPokemon, { PokemonCard } from "./CardPokemon";

type Props = {
  pokemonInfo: PokemonCard[];
};

const PokemonList = ({ pokemonInfo }: Props) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
      {pokemonInfo.map((pokemon: PokemonCard) => (
        <CardPokemon key={pokemon.id} PokemonInfo={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
