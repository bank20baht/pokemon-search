import React from "react";

export type POKEMON_TYPE =
  | "Grass"
  | "Poison"
  | "Fire"
  | "Flying"
  | "Water"
  | "Bug"
  | "Normal"
  | "Electric"
  | "Ground"
  | "Fairy"
  | "Fighting"
  | "Psychic"
  | "Rock"
  | "Steel"
  | "Ice"
  | "Ghost"
  | "Dragon"
  | "Dark"
  | "Stellar";

type Props = {
  type: POKEMON_TYPE;
  testid?: string;
};

const typeToClass = {
  Grass: "bg-green-500",
  Poison: "bg-purple-500",
  Fire: "bg-red-500",
  Flying: "bg-blue-500",
  Water: "bg-blue-300",
  Bug: "bg-green-300",
  Normal: "bg-gray-500",
  Electric: "bg-yellow-500",
  Ground: "bg-yellow-300",
  Fairy: "bg-pink-500",
  Fighting: "bg-red-600",
  Psychic: "bg-pink-600",
  Rock: "bg-yellow-600",
  Steel: "bg-gray-300",
  Ice: "bg-blue-200",
  Ghost: "bg-purple-600",
  Dragon: "bg-blue-600",
  Dark: "bg-gray-700",
  Stellar: "bg-red-700",
};

const PokemonTypeCard = ({ type, testid }: Props) => {
  const className = typeToClass[type];
  return (
    <div
      data-testid={testid}
      className={`${className} px-2 py-1 rounded-md text-xs text-white`}
    >
      {type}
    </div>
  );
};

export default PokemonTypeCard;
