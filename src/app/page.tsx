"use client";

import React, { useCallback, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import CardPokemon, { PokemonCard } from "./components/CardPokemon";
import useStore from "./store/store";
import { listPokemon, queryBySearchBar } from "./graphql/queries";
import Loading from "./components/Loading";
import NotFound from "./not-found";
import PokemonList from "./components/PokemonList";

export default function Home() {
  const [limit, setLimit] = useState(10);
  const { searchValue } = useStore();

  const { loading, error, data } = useQuery(
    searchValue ? queryBySearchBar(searchValue) : listPokemon(limit),
    {
      fetchPolicy: "cache-first",
    }
  );

  const pokemons = data?.query?.pokemons;
  const pokemon = data?.query?.pokemon;

  const incrementLimit = useCallback(() => {
    setLimit((prevLimit) => prevLimit + 10);
  }, []);

  if (error) {
    return (
      <div className="py-10 bg-red-500 text-white text-center">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {loading ? (
        <Loading />
      ) : pokemons ? (
        <div>
          <PokemonList pokemonInfo={pokemons} />
          <div className="flex justify-center">
            <div
              className="text-white bg-blue-400 rounded-lg py-3 px-2"
              onClick={incrementLimit}
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
        <div className="flex justify-center items-center h-full w-full">
          <NotFound />
        </div>
      )}
    </div>
  );
}
