import React from "react";
import PokemonTypeCard, { POKEMON_TYPE } from "./PokemonTypeCard";
import "./CardPokemon.css";
import BackCard from "./BackCard";
import { Attacks } from "./BackCard";
import { useRouter } from "next/navigation";
import useStore from "../store/store";
import Image from "next/image";

type Props = {
  PokemonInfo: PokemonCard;
};

export type PokemonCard = {
  name: string;
  id: string;
  image: string;
  types: POKEMON_TYPE[];
  attacks: Attacks;
};

const CardPokemon = ({ PokemonInfo }: Props) => {
  const router = useRouter();
  const { setSearchValue } = useStore();

  return (
    <div
      className="card-container"
      onClick={() => {
        router.push("/" + PokemonInfo.name);
        setSearchValue("");
      }}
    >
      <div className="card">
        <div className="front-card">
          <div className="">
            <Image
              loader={() => PokemonInfo.image}
              src={PokemonInfo.image}
              alt={PokemonInfo.name}
              width={128}
              height={128}
            />
          </div>
          <div className="font-bold text-xl py-5">{PokemonInfo.name}</div>

          <div className="flex flex-row gap-2">
            {PokemonInfo.types.map((type: POKEMON_TYPE, index: number) => (
              <PokemonTypeCard type={type} key={index} />
            ))}
          </div>
        </div>
        <div className="back-card">
          <div className="stats">
            <BackCard Attack={PokemonInfo.attacks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPokemon;
