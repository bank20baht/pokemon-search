import React from "react";
import PokemonTypeCard, { POKEMON_TYPE } from "./PokemonTypeCard";

type Props = {
  Attack: Attacks;
};

type Attack = {
  name: string;
  type: string;
  damage: number;
};

export type Attacks = {
  fast: Attack[];
  special: Attack[];
};

const BackCard = ({ Attack }: Props) => {
  return (
    <div className="justify-center">
      <div className="font-medium text-xl text-center">Fast</div>
      {Attack.fast.map((value: Attack, index: number) => (
        <div key={index} className="flex flex-row gap-2 justify-between">
          <div>{value.name}</div>
          <div>{value.damage}</div>
          <PokemonTypeCard type={value.type as POKEMON_TYPE} />
        </div>
      ))}
      <div className="font-medium text-xl text-center">Special</div>
      {Attack.special.map((value: Attack, index: number) => (
        <div
          key={index}
          className="flex flex-row gap-3 justify-between items-center"
        >
          <div>{value.name} </div>
          <div>{value.damage}</div>
          <PokemonTypeCard type={value.type as POKEMON_TYPE} />
        </div>
      ))}
    </div>
  );
};

export default BackCard;
