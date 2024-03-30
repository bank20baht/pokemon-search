"use client";

import { queryBySearchBar } from "@/app/graphql/queries";
import { useQuery } from "@apollo/client";
import React from "react";
import NotFound from "../not-found";
import CardPokemon from "../components/CardPokemon";
import Loading from "../components/Loading";

type Props = {
  params: {
    id: string;
  };
};

const DetailPage = ({ params }: Props) => {
  const { loading, error, data } = useQuery(queryBySearchBar(params.id), {
    fetchPolicy: "network-only",
  });

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default DetailPage;
