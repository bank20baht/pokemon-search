"use client";

import React from "react";
import SearchComponent from "./SearchSuggestions";
import { useQuery } from "@apollo/client";
import { queryBySuggestion } from "../graphql/queries";
import PokemonIcon from "../assets/icon/icon.svg";
import { useRouter } from "next/navigation";

type Props = {};

const SearchBar = (props: Props) => {
  const { loading, error, data } = useQuery(queryBySuggestion, {
    fetchPolicy: "network-only",
  });
  const router = useRouter();

  return (
    <div>
      {loading ? (
        <div className="py-10 bg-red-500">{""}</div>
      ) : (
        <div className="py-10 flex items-center justify-between bg-red-500">
          <div
            className="cursor-pointer h-16 w-16 pl-3"
            onClick={() => {
              router.push("/");
            }}
          >
            <img src={PokemonIcon.src} alt="icon" />
          </div>
          <SearchComponent pokemons={data} />
          <div>{""}</div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
