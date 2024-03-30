"use client";

import { queryDetailPokemon } from "@/app/graphql/queries";
import { useQuery } from "@apollo/client";
import React from "react";
import NotFound from "../not-found";
import Loading from "../components/Loading";
import PokemonDetail from "../components/PokemonDetail";

type Props = {
  params: {
    id: string;
  };
};

const DetailPage = ({ params }: Props) => {
  const { loading, error, data } = useQuery(queryDetailPokemon(params.id), {
    fetchPolicy: "network-only",
  });

  return (
    <div>
      {loading ? (
        <Loading />
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
