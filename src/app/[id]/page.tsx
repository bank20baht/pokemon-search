"use client";

import { queryBySearchBar, queryDetailPokemon } from "@/app/graphql/queries";
import { useQuery } from "@apollo/client";
import React from "react";
import NotFound from "../not-found";
import Loading from "../components/Loading";
import PokemonDetail from "../components/PokemonDetail";
import useStore from "../store/store";
import CardPokemon from "../components/CardPokemon";

type Props = {
  params: {
    id: string;
  };
};

const DetailPage = ({ params }: Props) => {
  const { searchValue } = useStore();

  const { loading, error, data } = useQuery(
    searchValue ? queryBySearchBar(searchValue) : queryDetailPokemon(params.id),
    {
      fetchPolicy: "cache-first",
    }
  );

  if (error) {
    return (
      <div className="py-10 bg-red-500 text-white text-center">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : searchValue ? (
        data?.query?.pokemon ? (
          <div className="flex justify-center">
            <div className="w-80">
              <CardPokemon PokemonInfo={data?.query?.pokemon} />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full w-full">
            <NotFound />
          </div>
        )
      ) : data?.query?.pokemon ? (
        <div className="flex justify-center">
          <PokemonDetail pokemon={data?.query?.pokemon} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default DetailPage;
