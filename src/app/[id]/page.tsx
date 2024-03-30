"use client";

import { queryBySearchBar } from "@/app/graphql/queries";
import { useQuery } from "@apollo/client";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const DetailPage = ({ params }: Props) => {
  const { loading, error, data } = useQuery(queryBySearchBar(params.id), {
    fetchPolicy: "network-only",
  });

  return <div>page pokemon {params.id}</div>;
};

export default DetailPage;
