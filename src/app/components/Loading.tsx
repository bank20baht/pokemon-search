import React from "react";
import PokemonLoading from "../assets/icon/loading.gif";
import Image from "next/image";

type Props = {};

const Loading = ({}: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <Image src={PokemonLoading} alt={"loading"} width={80} height={80} />
    </div>
  );
};

export default Loading;
