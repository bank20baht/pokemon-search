"use client";

import React from "react";
import SearchComponent from "./SearchSuggestions";
import { useQuery } from "@apollo/client";
import { queryBySuggestion } from "../graphql/queries";
import PokemonIcon from "../assets/icon/icon.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {};

const SearchBar = (props: Props) => {
  const { loading, error, data } = useQuery(queryBySuggestion, {
    fetchPolicy: "cache-first",
  });
  const router = useRouter();

  return (
    <div>
      {loading ? (
        <div className="py-10 bg-red-500">{""}</div>
      ) : (
        <div className="flex items-center justify-between bg-red-500">
          <div
            className="cursor-pointer h-16 w-16 pl-3 flex  items-center"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              className="w-10 h-10"
              src={PokemonIcon.src}
              alt="icon"
              height={40}
              width={40}
            />
          </div>
          <SearchComponent pokemons={data} />
          <div>{""}</div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
