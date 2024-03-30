"use client";

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import CardPokemon, { PokemonCard } from "./components/CardPokemon";
import SearchComponent from "./components/SearchSuggestions";
import useStore from "./store/store";
import {
  listPokemon,
  queryBySearchBar,
  queryBySuggestion,
} from "./graphql/queries";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";

export default function Home() {
  const [limit, setLimit] = useState(10);
  const { searchValue } = useStore();

  const { loading, error, data } = useQuery(
    searchValue ? queryBySearchBar(searchValue) : listPokemon(limit),
    {
      fetchPolicy: "network-only",
    }
  );

  const pokemons = data?.query?.pokemons;
  const pokemon = data?.query?.pokemon;

  return (
    <div className="flex flex-col">
      <div className="bg-red-500">
        <SearchBar />
      </div>

      {loading ? (
        <Loading />
      ) : pokemons ? (
        <div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
            {pokemons.map((pokemon: PokemonCard) => (
              <CardPokemon key={pokemon.id} PokemonInfo={pokemon} />
            ))}
          </div>
          <div className="flex justify-center">
            <div
              className="text-white bg-blue-400 rounded-lg py-3 px-2"
              onClick={() => setLimit(limit + 10)}
            >
              More Pokemon
            </div>
          </div>
        </div>
      ) : pokemon ? (
        <div className="flex justify-center">
          <div className="w-80">
            <CardPokemon PokemonInfo={pokemon} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div>not found</div>
        </div>
      )}
    </div>
  );
}
