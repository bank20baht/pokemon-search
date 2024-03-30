"use client";

import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import CardPokemon, { PokemonCard } from "./components/CardPokemon";
import SearchComponent from "./components/SearchSuggestions";
import useStore from "./store";
import BackCard from "./components/BackCard";
const listPokemon = (limit: number) => gql`
  query listPokemon {
    query {
      pokemons(first: ${limit}) {
        name
        id
        image
        types
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

const queryBySearchBar = (PokemonName: string) => {
  return gql`
    query pokemonByName {
      pokemon(name: "${PokemonName}") {
        name
        id
        image
        types
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  `;
};

const queryBySuggestion = gql`
  query listPokemon {
    query {
      pokemons(first: 151) {
        name
      }
    }
  }
`;

export default function Home() {
  const [limit, setLimit] = useState(10);
  const { searchValue } = useStore();

  const { loading, error, data } = useQuery(
    searchValue ? queryBySearchBar(searchValue) : listPokemon(limit),
    {
      variables: { PokemonName: searchValue },
      fetchPolicy: "network-only",
    }
  );

  const suggestion = useQuery(queryBySuggestion, {
    fetchPolicy: "network-only",
  });

  return (
    <div className="flex flex-col">
      {suggestion.loading ? (
        <div></div>
      ) : (
        <div className="py-10 flex items-center justify-center bg-red-500">
          <SearchComponent pokemons={suggestion.data} />
        </div>
      )}
      {loading ? (
        <div className="flex justify-center items-center">Loading</div>
      ) : data.query ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
          {data.query.pokemons.map((pokemon: PokemonCard) => (
            <CardPokemon key={pokemon.id} PokemonInfo={pokemon} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          {data.pokemon ? (
            <div className="w-80">
              <CardPokemon PokemonInfo={data.pokemon} />
            </div>
          ) : (
            <div>not found</div>
          )}
        </div>
      )}
      <div>
        <div className="flex justify-center">
          <div
            className="text-white bg-blue-400 rounded-lg py-3 px-2"
            onClick={() => setLimit(limit + 10)}
          >
            More Pokemon
          </div>
        </div>
      </div>
    </div>
  );
}
