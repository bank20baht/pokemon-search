"use client";

import React from "react";
import SearchComponent from "./SearchSuggestions";
import { useQuery } from "@apollo/client";
import { queryBySuggestion } from "../graphql/queries";

type Props = {};

const SearchBar = (props: Props) => {
  const { loading, error, data } = useQuery(queryBySuggestion, {
    fetchPolicy: "network-only",
  });

  return (
    <div>
      {loading ? (
        <div className="py-10 bg-red-500">{""}</div>
      ) : (
        <div className="py-10 flex items-center justify-center bg-red-500">
          <SearchComponent pokemons={data} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
